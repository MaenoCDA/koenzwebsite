/**
 * menu controller
 */

import { factories } from '@strapi/strapi';
import { getFullPopulateObject } from '../../../helpers/populate';

const getMenusWithSlugs = async (locale) => {
	const menus = await strapi.db
		.query('api::menu.menu')
		.findMany({ populate: ['menuItems', 'menuItems.subItems', 'menuItems.subItems.subItems'], where: { locale } });

	const routes = await strapi
		.plugin('link')
		.service('service')
		.routes({ request: { query: { locale } } });

	const replaceLinks = async (item: any, locale: string) => {
		if (item.menuItems && item.menuItems.length > 0) {
			for (const menuItem of item.menuItems) {
				await replaceLinks(menuItem, locale);
			}
		}

		if (item.subItems && item.subItems.length > 0) {
			for (const subItem of item.subItems) {
				await replaceLinks(subItem, locale);
			}
		}

		if (item.link) {
			const { link, type } = item.link;
			item.link.target = item.link.target === '_blank' ? '_blank' : '_self';
			item.link.href = '';

			if (!link) {
				item.link.href = '';

				return item;
			}

			const { uid, kind, slug, id } = link;

			if (type === 'external') {
				delete item.link.link;
				item.link.href = ensureHttps(link.url);
				return;
			}

			delete item.link.link;

			if (!slug && !id) {
				item.link.href = `/${locale}`;
				return;
			}

			// Defensive: routes for this locale may not exist yet
			const localizedRoutes = Array.isArray(routes?.[locale]) ? routes[locale] : [];
			const findRoute = localizedRoutes.find(
				(route) => route.uid === uid && (route.slug === slug || route.id === Number(id)) && route.kind === kind
			);

			if (!findRoute) {
				item.link.href = `/${locale}`;
				return;
			}

			item.link.href = findRoute.route;
		}

		return item;
	};

	return Promise.all(menus.map(async (menu) => await replaceLinks(menu, locale)));
};

export default factories.createCoreController('api::menu.menu', ({ strapi }) => ({
	async routes(ctx) {
		ctx.body = await strapi.plugin('link').service('service').routes(ctx);
	},
	async layout(ctx) {
		const { locale } = ctx.request.query;
		const menus = await getMenusWithSlugs(locale ?? 'nl');
		const generalSettings = await strapi
			.documents('api::general-setting.general-setting')
			.findFirst({ status: 'published', populate: '*' });

		const modelObject = getFullPopulateObject('api::fixed-block.fixed-block', 4, []);

		const fixedBlocks = await strapi.documents('api::fixed-block.fixed-block').findMany({
			status: 'published',
			populate: modelObject.populate,
		});

		try {
			ctx.body = { data: { generalSettings, menus, fixedBlocks } };
		} catch (err) {
			ctx.body = err;
		}
	},
	async findWithSlugs(ctx) {
		const { locale } = ctx.request.query;
		const menus = await getMenusWithSlugs(locale);

		try {
			ctx.body = menus;
		} catch (err) {
			ctx.body = err;
		}
	},
}));

const ensureHttps = (url: string): string => {
	if (!url) {
		return '';
	}

	if (!url.startsWith('http://') && !url.startsWith('https://')) {
		return `https://${url.startsWith('www.') ? url : `www.${url}`}`;
	}

	return url.replace('http://', 'https://');
};
