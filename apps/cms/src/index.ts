//@ts-nocheck
import type { Core, Schema } from '@strapi/strapi';
import forEach from 'lodash/forEach';
import has from 'lodash/has';
import set from 'lodash/set';
import TransformRichText from './middlewares/transform';
import TransformLatestTeasers from './plugins/collection-type-select/server/src/middlewares/transform';
import TransformTeasers from './plugins/content-type-teaser/server/src/middlewares';
import TransformLinks from './plugins/link/server/src/middlewares';
import { generateSeedData, generateSeedFormData } from './seeds';
import TransformCollectionTypes from './middlewares/collectionType';
import TransformFormConfig from './middlewares/form';
import { getFullPopulateObject } from './helpers/populate';

const FILTERABLE_ATTRIBUTES = ['api::tag.tag'];

function addTransformMiddleware(route) {
	// ensure path exists
	if (!has(route, ['config', 'middlewares'])) {
		set(route, ['config', 'middlewares'], []);
	}

	route.config.middlewares = [
		async (ctx, next) => {
			await next();
			await TransformRichText(strapi, ctx);
			await TransformTeasers(strapi, ctx);
			await TransformLinks(strapi, ctx);
			await TransformLatestTeasers(strapi, ctx);
			await TransformCollectionTypes(strapi, ctx);

			if (Object.hasOwn(strapi.plugins, 'api-forms')) {
				await TransformFormConfig(strapi, ctx);
			}
		},
	];
}

const strapiConfig = {
	/**
	 * An asynchronous register function that runs before
	 * your application is initialized.
	 *
	 * This gives you an opportunity to extend code.
	 */
	async register({ strapi }: { strapi: Core.Strapi }) {
		strapi.config.EXCLUDED_CONTENT_TYPES = [
			'api::menu.menu',
			'api::redirect.redirect',
			'api::general-setting.general-setting',
			'api::tag.tag',
			'api::fixed-block.fixed-block',
		];
		strapi.config.contentTypes = Object.entries(
			strapi.contentTypes as {
				[uid: string]: Schema.ContentType;
			}
		).reduce<Schema.ContentType[]>((a, [uid, value]) => {
			if (!uid.includes('api::') || strapi.config.EXCLUDED_CONTENT_TYPES.includes(uid)) {
				return a;
			}

			return [...a, value];
		}, []);

		forEach(strapi.apis, (api, apiName) => {
			forEach(api.routes, (router) => {
				// skip admin routes
				if (router.type && router.type === 'admin') {
					return;
				}
				if (router.routes) {
					forEach(router.routes, (route) => {
						if (route.method !== 'GET') {
							return;
						}

						addTransformMiddleware(route);
					});
				}
			});
		});

		strapi.config.contentTypes.forEach((contentType) => {
			if (contentType.kind !== 'collectionType') {
				return;
			}

			const extendedController = {
				async find(ctx) {
					const { query } = ctx.request;

					if (query.populate) {
						query.populate = query.populate.filter((populateItem: string) => {
							return contentType.attributes.hasOwnProperty(populateItem);
						});

						const populateObject: { [key: string]: { populate: string } } = {};

						query.populate.forEach((populateItem) => {
							populateObject[populateItem] = {
								populate: '*',
							};
						});

						query.populate = populateObject;
					}

					await this.validateQuery(ctx);

					const sanitizedQuery = await this.sanitizeQuery(ctx);
					const { results, pagination } = await strapi.service(contentType.uid).find(sanitizedQuery);
					const sanitizedResults = await this.sanitizeOutput(results, ctx);

					const meta = { pagination };
					const matchingFilterableAttributes = Object.entries(contentType.attributes).filter(([key, attribute]) =>
						FILTERABLE_ATTRIBUTES.includes(attribute.target)
					);

					if (matchingFilterableAttributes.length) {
						await Promise.all(
							matchingFilterableAttributes.map(async ([key, attribute]) => {
								const filterableEntities = await strapi.documents(contentType.uid).findMany({
									fields: ['title'],
									populate: [key],
									filters: {
										[key]: {
											title: {
												$ne: null,
											},
										},
									},
									limit: -1,
									start: 0,
									status: 'published',
								});

								const allEntities = filterableEntities.map((entity) => entity[key]).flat();

								const uniqueEntities = Array.from(new Set(allEntities.map((entity) => entity.id))).map((id) =>
									allEntities.find((entity) => entity.id === id)
								);

								if (uniqueEntities) {
									meta[key] = uniqueEntities;
								}
							})
						);
					}

					const entries = sanitizedResults;

					for (const entry of entries) {
						const route = await strapi
							.plugin('link')
							.service('service')
							.routes({
								request: { query: { documentId: entry.documentId } },
							});

						entry.route = route ? Object.values(route).flat().pop()?.route : '';
						entry.image = entry.image ? entry.image : entry.hero ? entry.hero[0].image : { url: '' };
					}

					return this.transformResponse(entries, meta);
				},
			};

			strapi.controllers[contentType.uid].find = extendedController.find;
		});
	},

	/**
	 * An asynchronous bootstrap function that runs before
	 * your application gets started.
	 *
	 * This gives you an opportunity to set up your data model,
	 * run jobs, or perform some special logic.
	 */
	async bootstrap({ strapi }: { strapi: Core.Strapi }) {
		const findPublicRole = async (): Promise<string> => {
			const result: Array<any> = await strapi.service('plugin::users-permissions.role').find({});

			return Object.values(result)
				.filter((role) => role.type === 'public')
				.pop().id;
		};

		const publicRole = await strapi.service('plugin::users-permissions.role').findOne(await findPublicRole(), {});

		for (const permission of Object.keys(publicRole.permissions)) {
			if (permission.startsWith('plugin::api-form')) {
				for (const controller of Object.keys(publicRole.permissions[permission].controllers)) {
					if (controller === 'form') {
						publicRole.permissions[permission].controllers[controller].find.enabled = true;
						publicRole.permissions[permission].controllers[controller].getFormConfig.enabled = true;
					}
					if (controller === 'submission') {
						publicRole.permissions[permission].controllers[controller].post.enabled = true;
					}
				}
			}

			if (permission.startsWith('api')) {
				for (const controller of Object.keys(publicRole.permissions[permission].controllers)) {
					// custom routes
					if (publicRole.permissions[permission].controllers[controller].layout) {
						publicRole.permissions[permission].controllers[controller].layout.enabled = true;
					}

					if (publicRole.permissions[permission].controllers[controller].routes) {
						publicRole.permissions[permission].controllers[controller].routes.enabled = true;
					}

					publicRole.permissions[permission].controllers[controller].find.enabled = true;
				}
			}
		}

		await strapi.service('plugin::users-permissions.role').updateRole(publicRole.id, publicRole);

		strapi.db.lifecycles.subscribe((event) => {
			if (event.action === 'beforeFindMany' || event.action === 'beforeFindOne') {
				const level = event.params?.pLevel;

				if (level !== undefined) {
					const depth = level ?? 5;
					const modelObject = getFullPopulateObject(event.model.uid, depth, []);
					event.params.populate = modelObject.populate;
				}
			}
		});

		// Seeding not needed for now - works with import / export
		if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'staging') {
			strapi.log.info('Running seed data');
			//@ts-ignore
			await generateSeedData(strapi);

			if (Object.hasOwn(strapi.plugins, 'api-forms')) {
				await generateSeedFormData(strapi);
			}
		}
	},
};

// Add health check endpoint for Render
export default {
	...strapiConfig,
	
	// Add health check route
	async bootstrap({ strapi }: { strapi: Core.Strapi }) {
		// Call original bootstrap
		await strapiConfig.bootstrap({ strapi });
		
		// Add health check endpoint
		strapi.server.routes([
			{
				method: 'GET',
				path: '/health',
				handler: (ctx) => {
					ctx.status = 200;
					ctx.body = {
						status: 'ok',
						timestamp: new Date().toISOString(),
						uptime: process.uptime(),
						version: strapi.config.info.strapi,
						environment: process.env.NODE_ENV
					};
				},
				config: {
					auth: false,
					policies: [],
					middlewares: [],
				},
			},
		]);
	},
};

// Add health check endpoint for Render
export default {
	...strapiConfig,
	
	// Add health check route
	async bootstrap({ strapi }: { strapi: Core.Strapi }) {
		// Call original bootstrap
		await strapiConfig.bootstrap({ strapi });
		
		// Add health check endpoint
		strapi.server.routes([
			{
				method: 'GET',
				path: '/health',
				handler: (ctx) => {
					ctx.status = 200;
					ctx.body = {
						status: 'ok',
						timestamp: new Date().toISOString(),
						uptime: process.uptime(),
						version: strapi.config.info.strapi,
						environment: process.env.NODE_ENV
					};
				},
				config: {
					auth: false,
					policies: [],
					middlewares: [],
				},
			},
		]);
	},
};
