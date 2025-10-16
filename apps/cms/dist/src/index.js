"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const forEach_1 = __importDefault(require("lodash/forEach"));
const has_1 = __importDefault(require("lodash/has"));
const set_1 = __importDefault(require("lodash/set"));
const transform_1 = __importDefault(require("./middlewares/transform"));
const transform_2 = __importDefault(require("./plugins/collection-type-select/server/src/middlewares/transform"));
const middlewares_1 = __importDefault(require("./plugins/content-type-teaser/server/src/middlewares"));
const middlewares_2 = __importDefault(require("./plugins/link/server/src/middlewares"));
const seeds_1 = require("./seeds");
const collectionType_1 = __importDefault(require("./middlewares/collectionType"));
const form_1 = __importDefault(require("./middlewares/form"));
const populate_1 = require("./helpers/populate");
const FILTERABLE_ATTRIBUTES = ['api::tag.tag'];
function addTransformMiddleware(route) {
    // ensure path exists
    if (!(0, has_1.default)(route, ['config', 'middlewares'])) {
        (0, set_1.default)(route, ['config', 'middlewares'], []);
    }
    route.config.middlewares = [
        async (ctx, next) => {
            await next();
            await (0, transform_1.default)(strapi, ctx);
            await (0, middlewares_1.default)(strapi, ctx);
            await (0, middlewares_2.default)(strapi, ctx);
            await (0, transform_2.default)(strapi, ctx);
            await (0, collectionType_1.default)(strapi, ctx);
            if (Object.hasOwn(strapi.plugins, 'api-forms')) {
                await (0, form_1.default)(strapi, ctx);
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
    async register({ strapi }) {
        strapi.config.EXCLUDED_CONTENT_TYPES = [
            'api::menu.menu',
            'api::redirect.redirect',
            'api::general-setting.general-setting',
            'api::tag.tag',
            'api::fixed-block.fixed-block',
        ];
        strapi.config.contentTypes = Object.entries(strapi.contentTypes).reduce((a, [uid, value]) => {
            if (!uid.includes('api::') || strapi.config.EXCLUDED_CONTENT_TYPES.includes(uid)) {
                return a;
            }
            return [...a, value];
        }, []);
        (0, forEach_1.default)(strapi.apis, (api, apiName) => {
            (0, forEach_1.default)(api.routes, (router) => {
                // skip admin routes
                if (router.type && router.type === 'admin') {
                    return;
                }
                if (router.routes) {
                    (0, forEach_1.default)(router.routes, (route) => {
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
                    var _a;
                    const { query } = ctx.request;
                    if (query.populate) {
                        query.populate = query.populate.filter((populateItem) => {
                            return contentType.attributes.hasOwnProperty(populateItem);
                        });
                        const populateObject = {};
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
                    const matchingFilterableAttributes = Object.entries(contentType.attributes).filter(([key, attribute]) => FILTERABLE_ATTRIBUTES.includes(attribute.target));
                    if (matchingFilterableAttributes.length) {
                        await Promise.all(matchingFilterableAttributes.map(async ([key, attribute]) => {
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
                            const uniqueEntities = Array.from(new Set(allEntities.map((entity) => entity.id))).map((id) => allEntities.find((entity) => entity.id === id));
                            if (uniqueEntities) {
                                meta[key] = uniqueEntities;
                            }
                        }));
                    }
                    const entries = sanitizedResults;
                    for (const entry of entries) {
                        const route = await strapi
                            .plugin('link')
                            .service('service')
                            .routes({
                            request: { query: { documentId: entry.documentId } },
                        });
                        entry.route = route ? (_a = Object.values(route).flat().pop()) === null || _a === void 0 ? void 0 : _a.route : '';
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
    async bootstrap({ strapi }) {
        const findPublicRole = async () => {
            const result = await strapi.service('plugin::users-permissions.role').find({});
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
            var _a;
            if (event.action === 'beforeFindMany' || event.action === 'beforeFindOne') {
                const level = (_a = event.params) === null || _a === void 0 ? void 0 : _a.pLevel;
                if (level !== undefined) {
                    const depth = level !== null && level !== void 0 ? level : 5;
                    const modelObject = (0, populate_1.getFullPopulateObject)(event.model.uid, depth, []);
                    event.params.populate = modelObject.populate;
                }
            }
        });
        // Seeding not needed for now - works with import / export
        if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'staging') {
            strapi.log.info('Running seed data');
            //@ts-ignore
            await (0, seeds_1.generateSeedData)(strapi);
            if (Object.hasOwn(strapi.plugins, 'api-forms')) {
                await (0, seeds_1.generateSeedFormData)(strapi);
            }
        }
    },
};
// Add health check endpoint for Render
exports.default = {
    ...strapiConfig,
    // Add health check route
    async bootstrap({ strapi }) {
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
exports.default = {
    ...strapiConfig,
    // Add health check route
    async bootstrap({ strapi }) {
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
