import { Route } from '~/types/schemas';
import { getFetchClient } from '~/utils/api/client';

const KIND_ENUM = {
	COLLECTION_TYPE: 'collectionType',
	SINGLE_TYPE: 'singleType',
};

const Sitemap = async () => {
	const routes = await getFetchClient().routes('api/routes');

	if (!routes) {
		return {};
	}

	const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

	if (!siteUrl) {
		throw new Error('NEXT_PUBLIC_SITE_URL is not defined');
	}

	const entries = await Promise.all(
		Object.entries(routes).map(async ([locale, routes]) => {
			const localeEntries = await Promise.all(
				routes.map(async (route: Route) => ({
					url: route.route,
					lastModified: new Date(),
					priority: route.kind === KIND_ENUM.COLLECTION_TYPE ? 0.5 : 0.8,
					changeFrequency: 'daily',
				}))
			);
			// Add the root entry for the locale
			const rootEntry = {
				url: `${siteUrl}/${locale}`,
				lastModified: new Date(),
				priority: 1.0,
				changeFrequency: 'daily',
			};

			return [rootEntry, ...localeEntries];
		})
	);

	return entries.flat();
};

export default Sitemap;
