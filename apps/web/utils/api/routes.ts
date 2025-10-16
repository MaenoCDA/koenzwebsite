import { notFound } from 'next/navigation';
import { draftMode } from 'next/headers';
import { log } from '../helpers';
import { DEBUG_MODE } from '~/config';
import { getFetchClient } from '~/utils/api/client';

import { RouteResult, Route, Routes } from '~/types/schemas';

export enum CollectionTypeEnum {
	COLLECTION_TYPE = 'collectionType',
	SINGLE_TYPE = 'singleType',
}

export const getRoutes = async (locale?: string, slug?: string[], documentId?: string): Promise<Route[] | RouteResult | Routes | Route> => {
	'use server';

	const { isEnabled: preview } = await draftMode();
	const status = preview ? 'draft' : 'published';

	// Build query parameters
	const queryParams = new URLSearchParams();

	if (locale) {
		queryParams.append('locale', locale);
	}
	if (documentId) {
		queryParams.append('documentId', documentId);
	}
	if (slug?.length) {
		queryParams.append('slug', slug.at(-1) as string);
	}

	queryParams.append('status', status);

	const routes = await getFetchClient().routes('api/routes', queryParams.toString());

	if (!slug && !documentId) {
		return routes as Route[];
	}

	if (documentId) {
		return routes[locale].find((route) => route.documentId === documentId) as Route;
	}

	// Check if `routes` has the expected structure
	if (!locale || !isRoutes(routes) || !routes[locale]) {
		log('info', `❌ No routes found for locale ${locale}`, DEBUG_MODE);
		notFound();
	}

	const route = routes[locale].find((route) => route.route === `/${locale}/${slug!.join('/')}`);
	if (!route) {
		log('info', `❌ No route found for slug ${slug!.join('/')}`, DEBUG_MODE);
		notFound();
	}

	return { ...route, slug: route.slug.split('/') } as RouteResult;
};

// Helper function to check if `routes` is of type `Routes`
const isRoutes = (routes: Routes | Route[]): routes is Routes => {
	return typeof routes === 'object' && !Array.isArray(routes);
};
