import { Homepage, Layout, Page, Routes, Overview, Tag } from '../schemas';
import { Get } from './api';
import { EndPointsEnum } from '~/config';

export type Endpoints = {
	'api/home-page': Get<Homepage>;
	'api/overview': Get<Overview>;
	'api/layout': Get<Layout>;
	'api/pages': Get<Page[]>;
	'api/posts': Get<Page[]>;
	'api/routes': Get<{ routes: Routes }>;
	'api/tags': Get<Tag[]>;
	[key: `api/redirects/${string}`]: Get<{ redirect: { source: string; destination: string } }>;
};

export type CollectionEndpoints = {
	'api/posts': Get<Page[]>;
};

export type EndpointsKeys = keyof Endpoints;
export type CollectionEndpointsKeys = keyof CollectionEndpoints;
