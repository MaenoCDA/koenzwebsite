import React from 'react';
import { useSearchBox } from 'react-instantsearch-core';
import { useScopedI18n } from '~/src/locales/client';

const NoResults = () => {
	const t = useScopedI18n('search.noResults');
	const { query } = useSearchBox();

	return (
		<div className="py-6 text-center">
			<h2 className="virtual-h3">{t('title')}</h2>
			<p>{t('description', { query })}</p>
		</div>
	);
};

export default NoResults;
