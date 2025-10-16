import { FunctionComponent, Suspense } from 'react';
import { API_ROUTES, PAGE_SIZE, ROUTES_ENUM } from './ServerPage';
import { Meta, Route } from '~/types/schemas';
import { Endpoints, EndpointsKeys } from '~/types/api';
import { SearchParams } from '~/types/app';
import { getFetchClient } from '~/utils/api/client';

import 'server-only';

// Views
import Skeleton from '~/src/components/main/teaser/Skeleton';
import ClientOverview from '@/app/client/ClientOverview';

export const getOverviewRecordsData = async (
	endpoint: EndpointsKeys,
	searchParams: SearchParams,
	pageSize: number,
	locale: string
): Promise<{ data: any[]; meta: Meta }> => {
	const filters: { [key: string]: any } = {};
	const sort = { rank: 'asc', publishedAt: 'desc' };

	const { page, tag } = searchParams;

	if (searchParams) {
		delete searchParams.page;
		// Add search query to filters if it exists
		if (tag) {
			filters['tags'] = { slug: { $eq: tag } };
		}
	}

	const { data, meta } = await getFetchClient().get(
		endpoint,
		{
			locale,
			filters,
		},
		Number(page ?? 1),
		pageSize,
		sort,
		[],
		undefined,
		false,
		false,
		// populate instead of deep, as we only need the tags and hero
		{ populate: ['tags', 'hero', 'image'] }
	);

	return { data, meta };
};

interface ServerOverviewProps {
	route: Route;
	searchParams: SearchParams;
	locale: string;
}

const ServerOverViewContent = async ({ route, searchParams, locale }: ServerOverviewProps) => {
	// Overview components
	const ClientOverviewComponents = new Map<ROUTES_ENUM, FunctionComponent<any>>([
		[ROUTES_ENUM.POST_UID, (props) => <ClientOverview {...props} />],
	]);

	// Fetch records
	const endpoint = API_ROUTES.get(route.childrenUid as ROUTES_ENUM) as keyof Endpoints;
	const pageSize = (PAGE_SIZE.get(route.childrenUid as ROUTES_ENUM) as number) ?? (PAGE_SIZE.get(ROUTES_ENUM.POST_UID) as number);

	const records = await getOverviewRecordsData(endpoint, searchParams, pageSize, locale);

	const ClientComponent =
		ClientOverviewComponents.get(route.childrenUid as ROUTES_ENUM) ??
		(ClientOverviewComponents.get(ROUTES_ENUM.POST_UID) as FunctionComponent<any>);

	return <ClientComponent records={records.data} meta={records.meta} />;
};

const ServerOverview = async ({ route, searchParams, locale }: ServerOverviewProps) => {
	return (
		<Suspense fallback={<Skeleton />}>
			{/* OverviewContent fetches and renders the data */}
			<ServerOverViewContent route={route} searchParams={searchParams} locale={locale} />
		</Suspense>
	);
};

export default ServerOverview;
