import React from 'react';
import { useHits, useInstantSearch, useSearchBox } from 'react-instantsearch-core';
import NoResults from './NoResults';
import LoadingIndicator from './LoadingIndicator';
import Hit from './Hit';

const Hits = () => {
	const { items } = useHits();
	const { query } = useSearchBox();
	const { status } = useInstantSearch();

	if (items.length === 0) {
		return <NoResults />;
	}

	if (status === 'loading') {
		return <LoadingIndicator />;
	}

	return (
		<ul className="flex flex-col gap-y-6">
			{items.map((hit, index) => (
				<li key={hit._meilisearch_id}>
					<Hit hit={hit} query={query} />
				</li>
			))}
		</ul>
	);
};

export default Hits;
