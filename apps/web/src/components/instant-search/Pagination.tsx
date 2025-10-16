import React from 'react';
import { useHits, usePagination } from 'react-instantsearch-core';
import { default as DefaultPagination } from '../input/Pagination';

const Pagination = () => {
	const { pages, currentRefinement, refine } = usePagination();
	const { items } = useHits();

	if (items.length === 0) {
		return <></>;
	}
	const setPage = (page: any) => {
		const instantSearchPage = page - 1;

		return refine(instantSearchPage);
	};

	return <DefaultPagination pagination={{ page: currentRefinement + 1, pageCount: pages.length }} onChange={setPage} />;
};

export default Pagination;
