import qs from 'qs';
import { Api, Path } from '../../types/api';
import { CMS_BASE_URL, DEFAULT_LOCALE } from '../../config';
import { handleError, handleResponse } from './helpers';
import { Routes, Route } from '~/types/schemas';

export type FetchClient = {
	routes: (path: string, params?: string) => Promise<Routes | Route[]>;
	get: <T extends keyof Api['Get']>(
		url: Path<T>,
		params?: any,
		currentPage?: number,
		pageSize?: number,
		sort?: any,
		tags?: string[],
		options?: RequestInit,
		useTimeStamp?: boolean,
		deep?: boolean,
		populate?: object
	) => Promise<Api['Get'][T]['response']>;
};

type Params = Record<string, string | number | boolean>;

const createFilterParams = (params: Params) => {
	const defaultParams: Params = {
		locale: params.locale ?? DEFAULT_LOCALE,
	};

	const query = qs.stringify(
		{
			...defaultParams,
			filters: params.filters || {},
			...params,
		},
		{
			encodeValuesOnly: true,
		}
	);

	return query;
};

const createSortParams = (sortObject: Record<string, string>): string => {
	const sortParams: Record<string, string> = {};

	Object.entries(sortObject).forEach(([key, value], index) => {
		sortParams[`sort[${index}]`] = `${key}:${value}`;
	});

	return new URLSearchParams(sortParams).toString();
};

const getFetchClient = (): FetchClient => {
	const routes = async <R = Api['Get']['api/routes']>(path: Path<string>, params?: string): Promise<R> => {
		// Remove any trailing slashes from CMS_BASE_URL to avoid double slashes
		const baseUrl = CMS_BASE_URL?.replace(/\/+$/, '') || 'http://localhost:1337';
		
		// Check if we're in build mode and CMS is localhost
		const isBuildTime = process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_CMS_URL?.includes('localhost');
		const isLocalhost = baseUrl.includes('localhost') || baseUrl.includes('127.0.0.1');
		
		if (isBuildTime && isLocalhost) {
			console.warn(`Skipping API call to ${baseUrl}/${path} during build time`);
			return {} as R; // Return empty object to prevent build failures
		}
		
		return fetch(`${baseUrl}/${path}${params ? `?${params}` : ''}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			next: { tags: ['routes'] },
		})
			.then(handleResponse<R>)
			.catch((error) => {
				// During build time, return empty object instead of failing
				if (isBuildTime) {
					console.warn(`API call failed during build: ${baseUrl}/${path}`, error);
					return {} as R;
				}
				return handleError(error);
			});
	};

	const get = async <T extends keyof Api['Get'], R = Api['Get'][T]>(
		path: Path<string>,
		params: string | URLSearchParams | Record<string, string> | string[][] | undefined,
		currentPage?: number,
		pageSize?: number,
		sort?: any,
		tags?: string[],
		options?: RequestInit,
		useTimeStamp: boolean = false,
		deep: boolean = true,
		populate?: object
	): Promise<R> => {
		const searchParams = params ? createFilterParams(params as Params) : null;
		const sortParams = sort ? createSortParams(sort) : null;
		const timestamp = new Date().toISOString().slice(0, 19).replace(/[-T:]/g, '');
		const fetchParams = options ?? {
			next: { tags },
		};

		if (!fetchParams) {
			throw new Error('No fetch params provided');
		}

		const deepPopulate = deep ? '?pLevel' : populate ? `?${qs.stringify(populate)}` : '?';
		// Remove any trailing slashes from CMS_BASE_URL to avoid double slashes
		const baseUrl = CMS_BASE_URL?.replace(/\/+$/, '') || 'http://localhost:1337';
		
		// Check if we're in build mode and CMS is localhost
		const isBuildTime = process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_CMS_URL?.includes('localhost');
		const isLocalhost = baseUrl.includes('localhost') || baseUrl.includes('127.0.0.1');
		
		if (isBuildTime && isLocalhost) {
			console.warn(`Skipping API call to ${baseUrl}/${path} during build time`);
			return {} as R; // Return empty object to prevent build failures
		}

		return fetch(
			`${baseUrl}/${path}${deepPopulate}${currentPage !== undefined ? `&pagination[page]=${currentPage ?? 1}&pagination[pageSize]=${pageSize ?? 10}` : ''}${searchParams ? `&${searchParams}${sortParams ? `&${sortParams}` : ''}` : ''}${useTimeStamp ? `&timestamp=${timestamp}` : ''}`,
			fetchParams
		)
			.then(handleResponse<R>)
			.catch((error) => {
				// During build time, return empty object instead of failing
				if (isBuildTime) {
					console.warn(`API call failed during build: ${baseUrl}/${path}`, error);
					return {} as R;
				}
				return handleError(error);
			});
	};

	return {
		routes,
		get,
	};
};

export { getFetchClient };
