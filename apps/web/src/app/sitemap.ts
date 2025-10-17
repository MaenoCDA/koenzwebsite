import { Route } from '~/types/schemas';
import { getFetchClient } from '~/utils/api/client';

const KIND_ENUM = {
	COLLECTION_TYPE: 'collectionType',
	SINGLE_TYPE: 'singleType',
};

const Sitemap = async () => {
	// Check if CMS URL is available
	const { CMS_BASE_URL } = await import('~/config');
	
	// If CMS URL is not set to a real URL, return empty sitemap to avoid build errors
	if (!CMS_BASE_URL || CMS_BASE_URL === 'http://localhost:1337' || CMS_BASE_URL.includes('your-cms-url')) {
		console.warn('CMS URL not configured for build, skipping sitemap generation');
		return [];
	}

	// Check if we're in build mode and CMS is localhost
	const isBuildTime = process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_CMS_URL?.includes('localhost');
	const isLocalhost = CMS_BASE_URL.includes('localhost') || CMS_BASE_URL.includes('127.0.0.1');
	
	if (isBuildTime && isLocalhost) {
		console.warn('Skipping sitemap generation during build time with localhost CMS');
		return [];
	}

	let routes;
	try {
		routes = await getFetchClient().routes('api/routes');
	} catch (error) {
		console.warn('Failed to fetch routes for sitemap:', error);
		return [];
	}

	if (!routes) {
		return [];
	}

	const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

	if (!siteUrl) {
		console.warn('NEXT_PUBLIC_SITE_URL is not defined, using default');
		return [];
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
