'use client';

import { InstantSearchNext } from 'react-instantsearch-nextjs';
import { PropsWithChildren } from 'react';
import { Configure } from 'react-instantsearch-core';
import { SearchProvider, useSearchContext } from '~/src/contexts/SearchContext';
import SearchInput from '~/src/components/instant-search/SearchInput';
import Hits from '~/src/components/instant-search/Hits';
import Pagination from '~/src/components/instant-search/Pagination';

const ClientSearchPage = ({ query, page }: { query?: string; page?: string }) => {
	return (
		<SearchProvider indexName={process.env.NEXT_PUBLIC_MEILISEARCH_INDEX_NAME!}>
			<ClientSearchResults query={query} page={page}>
				<SearchInput>
					<Hits />
					<Pagination />
				</SearchInput>
			</ClientSearchResults>
		</SearchProvider>
	);
};

const ClientSearchResults = ({ query, page, children }: PropsWithChildren<{ page?: string; query?: string }>) => {
	const context = useSearchContext();

	// Prevent accessing context before it exists
	if (!context) {
		return null;
	}

	const { searchClient, stateMapping, indexName } = context;

	return (
		<InstantSearchNext
			future={{
				preserveSharedStateOnUnmount: true,
			}}
			indexName={indexName}
			searchClient={searchClient}
			routing={{
				stateMapping,
				router: { cleanUrlOnDispose: false },
			}}
		>
			<Configure
				hitsPerPage={6}
				query={query}
				attributesToSnippet={['*:50']}
				snippetEllipsisText="..."
				initialState={{
					query,
					page,
				}}
			/>

			{children}
		</InstantSearchNext>
	);
};

export default ClientSearchPage;
