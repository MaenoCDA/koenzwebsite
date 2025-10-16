'use client';

import React, { createContext, useContext, useMemo } from 'react';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
import { StateMapping } from 'instantsearch.js/es';
import { SearchParams } from '~/types/app';

export const SearchTypeEnum = {
	SEARCH: 'search',
};

interface SearchContextValue {
	type: keyof typeof SearchTypeEnum;
	searchClient: any;
	indexName: string;
	stateMapping: StateMapping;
	params: SearchParams;
}

const SearchContext = createContext<SearchContextValue | null>(null);

const { searchClient, setMeiliSearchParams } = instantMeiliSearch(
	process.env.NEXT_PUBLIC_MEILISEARCH_HOST!,
	process.env.NEXT_PUBLIC_MEILISEARCH_API_KEY
);

const optimizedSearchClient = {
	...searchClient,
	finitePagination: true,
	placeholderSearch: false,
	primaryKey: 'id',
};

export const SearchProvider = ({
	children,
	type,
	indexName,
	params,
}: {
	type: keyof typeof SearchTypeEnum;
	children: React.ReactNode;
	indexName: string;
	params: SearchParams;
}) => {
	const stateMapping = useMemo(
		() => ({
			stateToRoute(uiState: any) {
				const indexUiState = uiState[indexName];
				return {
					query: indexUiState?.query || '',
					page: indexUiState?.page || 1,
				};
			},
			routeToState(routeState: any) {
				return {
					[indexName]: {
						query: routeState.query || '',
						page: routeState.page || 1,
					},
				};
			},
		}),
		[indexName]
	);

	const value = {
		searchClient: optimizedSearchClient,
		indexName,
		params,
		stateMapping,
		type,
	};

	return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};

export const useSearchContext = () => {
	const context = useContext(SearchContext);
	if (!context) {
		throw new Error('useSearchContext must be used within a SearchProvider');
	}
	return context;
};
