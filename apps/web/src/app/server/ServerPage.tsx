import ServerOverview from './ServerOverview';
import ServerSinglePage from './ServerSinglePage';
import { PageFields, Route, RouteResult } from '~/types/schemas';

export interface ServerPageProps {
	data: PageFields;
	route: Route | RouteResult;
	locale: string;
	searchParams: Record<string, string | string[] | undefined>;
}

/*
 * ~ API Routes ~
 * uid list for routes from the CMS
 */
export enum ROUTES_ENUM {
	PAGE_UID = 'api::page.page',
	OVERVIEW_UID = 'api::overview.overview',
	POST_UID = 'api::post.post',
	CONTACT_UID = 'api::contact-page.contact-page',
}

export const API_ROUTES = new Map<ROUTES_ENUM, string>([
	[ROUTES_ENUM.PAGE_UID, 'api/pages'],
	[ROUTES_ENUM.OVERVIEW_UID, 'api/overview'],
	[ROUTES_ENUM.POST_UID, 'api/posts'],
	[ROUTES_ENUM.CONTACT_UID, 'api/contact-page'],
]);

export const PAGE_SIZE = new Map<ROUTES_ENUM, number>([[ROUTES_ENUM.POST_UID, 6]]);

export default async function ServerPage({ data, route, searchParams, locale }: ServerPageProps) {
	// Route has a children - meaning it's an overview page
	if (route.childrenUid) {
		return <ServerOverview locale={locale} searchParams={searchParams} route={route as Route} />;
	}

	return <ServerSinglePage locale={locale} route={route as Route} />;
}
