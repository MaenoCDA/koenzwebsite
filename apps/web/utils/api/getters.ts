import { notFound } from 'next/navigation';
import { draftMode } from 'next/headers';
import { isValidResponse, log } from '../helpers';
import { getFetchClient } from './client';
import { CollectionTypeEnum } from './routes';
import { DEBUG_MODE } from '~/config';
import { Endpoints } from '~/types/api';
import { FixedBlocks, GeneralSettings, Menu, Overview, Page, Route, RouteResult, Tag } from '~/types/schemas';

interface FetchDataProps {
	apiRoute: keyof Endpoints;
	locale: string;
	slug: string[];
	tag?: string;
}

export const fetchData = async <T>({ apiRoute, locale, slug, tag }: FetchDataProps): Promise<T> => {
	const { isEnabled: preview } = await draftMode();

	const child = slug.length > 1 ? slug[slug.length - 1] : slug.pop();
	const parent = slug.length > 1 ? slug[slug.length - 2] : undefined;

	const filters = parent ? { slug: { $eq: child }, parent: { slug: { $eq: parent } } } : { slug: { $eq: child } };

	const { data } = await getFetchClient().get(
		apiRoute,
		{
			locale,
			filters,
			status: preview ? 'draft' : 'published',
		},
		undefined,
		undefined,
		undefined,
		tag ? [tag] : undefined,
		undefined,
		preview
	);

	if (!isValidResponse(data)) {
		log('info', `❌ No data found for api ${apiRoute}`, DEBUG_MODE);
		notFound();
	}

	if (Array.isArray(data)) {
		return data.pop() as T;
	}
	return data as T;
};

const getTags = async (locale: string, route: Route): Promise<{ data: Tag[] }> => {
	const filters: { [key: string]: any } = {};

	if (route.childrenUid) {
		filters[route.childrenUid.replaceAll('.', '_').replaceAll('::', '_')] = { $notNull: ['*'] };
	}

	//@ts-ignore
	return await getFetchClient().get(
		'api/tags',
		{ locale, filters },
		undefined,
		undefined,
		{ title: 'asc' },
		undefined,
		undefined,
		false,
		false
	);
};

export const getCollectionTypeData = async (props: FetchDataProps): Promise<Page> => {
	return fetchData<Page>(props);
};

export const getSingleTypeData = async (props: FetchDataProps): Promise<Overview> => {
	return fetchData<Overview>(props);
};

const getPageData = async (endpoint: keyof Endpoints, locale: string, slug: string[], route: RouteResult) => {
	'use server';

	if (route.kind === CollectionTypeEnum.SINGLE_TYPE) {
		return getSingleTypeData({ apiRoute: endpoint, locale, slug, tag: `${route.uid}-${slug}-${locale}` });
	}

	return getCollectionTypeData({ apiRoute: endpoint, locale, slug, tag: `${route.uid}-${slug}-${locale}` });
};

const getHomePageData = async (locale: string) => {
	const { isEnabled: preview } = await draftMode();

	const { data } = await getFetchClient().get(
		'api/home-page',
		{ locale, status: preview ? 'draft' : 'published' },
		undefined,
		undefined,
		undefined,
		[`api::home-page.home-page-${locale}`],
		undefined,
		preview
	);

	if (!data || data.length === 0) {
		notFound();
	}

	return data.pop();
};

const getLayoutData = async (
	locale: string
): Promise<{ generalSettings: GeneralSettings | null; menus: Menu[] | null; fixedBlocks: FixedBlocks[] | null }> => {
	const tags = [`api::general-setting.general-setting-${locale}`, `api::menu.menu-${locale}`];

	const { data } = await getFetchClient().get('api/layout', { locale }, undefined, undefined, undefined, tags);

	if (!data || (Array.isArray(data) && data.length === 0)) {
		throw new Error('General settings not found - please make sure they are available in the CMS');
	}

	const layoutData = Array.isArray(data) ? data.pop() : data;

	if (!layoutData) {
		throw new Error('Invalid layout data received');
	}

	const { generalSettings, menus, fixedBlocks } = layoutData;

	return {
		generalSettings: generalSettings ?? null,
		menus: menus ?? null,
		fixedBlocks: fixedBlocks ?? null,
	};
};

export { getLayoutData, getPageData, getHomePageData, getTags };
