import { PropsWithChildren, useEffect, useState } from 'react';
import { useHits, useSearchBox } from 'react-instantsearch-core';
import { useScopedI18n } from '~/src/locales/client';
import { useSearchContext } from '~/src/contexts/SearchContext';
import Heading from '@/components/typography/Heading';
import InputGroup from '@/components/input/InputGroup';
import Icon from '@/components/icon/Icon';
import Input from '@/components/input/Input';

const SearchInput = ({ children }: PropsWithChildren) => {
	const { results } = useHits();
	const { params } = useSearchContext();
	const { query, refine } = useSearchBox();
	const [hasSearched, setHasSearched] = useState(false);
	const [localQuery, setLocalQuery] = useState('');

	const handleSearch = () => {
		if (localQuery.length >= minSearchLength) {
			setHasSearched(true);
			refine(localQuery);
		}
	};

	const t = useScopedI18n('search');
	const minSearchLength = 3;

	return (
		<div className="container">
			<div className="row">
				<div className="col-span-12 text-center">
					<Heading
						title={t('title')}
						subtitle={results?.nbHits && hasSearched ? t('result', { count: results?.nbHits || 0 }) : ''}
						type="h1"
					/>
					<InputGroup className="mx-auto mt-4 flex w-full gap-x-2 pl-1 lg:w-1/3">
						<button onClick={() => handleSearch()} className="rounded bg-primary p-1 text-white">
							<Icon iconName="SEARCH" className="size-5 fill-white" />
						</button>
						<Input
							type="text"
							name="search"
							value={localQuery}
							onChange={(e) => setLocalQuery(e.target.value)}
							placeholder={t('placeholder')}
							aria-label={t('placeholder')}
							className="mr-4 w-full focus-visible:outline-none"
						/>
					</InputGroup>

					{localQuery.length > 0 && localQuery.length < minSearchLength && (
						<p className="py-3 text-sm">{t('searchLength', { length: minSearchLength })}</p>
					)}
				</div>
				<div className="col-span-12">{query ? children : null}</div>
			</div>
		</div>
	);
};

export default SearchInput;
