/**
 * @file slug pages
 * @route /:locale/[...slug]
 * @description Catch all collection and single types for all dynamic routes based on the CMS routes
 */
import { setStaticParamsLocale } from 'next-international/server';
import ClientPageProviders from '../../client/ClientPageProviders';
import { getOverviewRecordsData } from '../../server/ServerOverview';
import type { LocaleLayoutProps } from '~/types/app';
import { type Route, type Routes, type RouteResult, PageFields } from '~/types/schemas';
import { getPageData } from '~/utils/api/getters';

// Route data
import { getRoutes } from '~/utils/api/routes';
import { getSeoMetadata } from '~/utils/seo';
import { getFetchClient } from '~/utils/api/client';
import ServerPage, { API_ROUTES, PAGE_SIZE } from '@/app/server/ServerPage';
import { Endpoints } from '~/types/api';

interface StaticParams {
	locale: string;
	slug: string[];
	page?: number;
}

export const fetchCache = 'default-cache';

const HOMEPAGE_UID = 'api::home-page.home-page';

// ~~~~ Start 🚀 generating static routes ~~~~ //
export async function generateStaticParams(): Promise<StaticParams[]> {
	// Check if CMS URL is available
	const { CMS_BASE_URL } = await import('~/config');
	
	// If CMS URL is not set to a real URL, return empty static params to avoid build errors
	if (!CMS_BASE_URL || CMS_BASE_URL === 'http://localhost:1337' || CMS_BASE_URL.includes('your-cms-url')) {
		console.warn('CMS URL not configured for build, skipping static generation');
		return [];
	}

	// Check if we're in build mode and CMS is localhost
	const isBuildTime = process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_CMS_URL?.includes('localhost');
	const isLocalhost = CMS_BASE_URL.includes('localhost') || CMS_BASE_URL.includes('127.0.0.1');
	
	if (isBuildTime && isLocalhost) {
		console.warn('Skipping static params generation during build time with localhost CMS');
		return [];
	}

	try {
		const routes = (await getFetchClient().routes('api/routes')) as Routes;

		if (!routes || typeof routes !== 'object') {
			console.warn('No valid routes data received');
			return [];
		}

		const staticParams: StaticParams[] = [];
		for (const locale in routes) {
			// Use a for...of loop to handle async operations correctly
			for (const route of routes[locale]) {
				if (!route.slug || route.uid === HOMEPAGE_UID) {
					continue; // Skip if there's no slug or if it's the homepage
				}

				if (route.childrenUid) {
					// Handle overview pages with children UIDs
					const endpoint = API_ROUTES.get(route.childrenUid as any) as keyof Endpoints;
					const pageSize = PAGE_SIZE.get(route.childrenUid as any) as number;

					try {
						// Fetch the first page of data
						const { meta } = await getOverviewRecordsData(endpoint, {}, pageSize, locale);

						// Push the static params for the first page
						staticParams.push({
							locale,
							slug: route.route.split('/').filter(Boolean).slice(1),
							page: 1, // Add page parameter for pagination
						});

						// Optionally: Generate additional static params for paginated pages
						const totalPages = Math.ceil((meta?.pagination?.total || 0) / pageSize);
						for (let page = 2; page <= totalPages; page++) {
							staticParams.push({
								locale,
								slug: route.route.split('/').filter(Boolean).slice(1),
								page,
							});
						}
					} catch (error) {
						console.warn(`Failed to generate static params for route ${route.route}:`, error);
						// Continue with other routes instead of failing completely
						continue;
					}
				} else {
					// Handle normal static routes
					staticParams.push({
						locale,
						slug: route.route.split('/').filter(Boolean).slice(1),
					});
				}
			}
		}
		return staticParams;
	} catch (error) {
		console.error('Error generating static params:', error);
		// Return empty array to prevent build failure
		return [];
	}
}
// ~~~~ End 🚀 generating static routes ~~~~ //

// ~~~~ Start 🕸️ generating metadata ~~~~ /
export async function generateMetadata(props: LocaleLayoutProps<{ slug: string[] }>) {
	const params = await props.params;
	const { slug, locale } = params;
	const route = (await getRoutes(locale, slug)) as RouteResult;
	const data = await getPageData(API_ROUTES.get(route.uid) as keyof Endpoints, locale, route.slug, route);
	return getSeoMetadata(locale, data);
}
// ~~~~ End 🕸️ generating metadata ~~~~ //

// ~~~~ Begin 🌎 Render ~~~~ //
const Page = async (props: {
	params: Promise<{ locale: string; slug: string[] }>;
	searchParams?: Promise<{
		query?: string;
		page?: string;
	}>;
}) => {
	const { locale, slug } = await props.params;
	const searchParams = await props.searchParams;
	setStaticParamsLocale(locale);

	const route = (await getRoutes(locale, slug)) as RouteResult;
	const data = await getPageData(API_ROUTES.get(route.uid) as keyof Endpoints, locale, route.slug, route);

	return (
		<ClientPageProviders pageData={data} route={route}>
			<ServerPage locale={locale} data={data as PageFields} route={route} searchParams={searchParams!} />
		</ClientPageProviders>
	);
};
// ~~~~ End 🌎 Render ~~~~ //

export default Page;
