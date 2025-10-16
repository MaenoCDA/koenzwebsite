'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { PageFields } from '~/types/schemas';
import { Hero } from '~/types/schemas/hero';
import { FlexContent, Teaser } from '~/types/schemas/main';

type PageContextProps<T = Record<string, any>> = {
	hero: Hero[];
	flexContent: FlexContent[];
	preFlex: any[];
	postFlex: any[];
	related: Teaser[] | [];
	latest: Teaser[] | [];
} & T;

const PageContext = createContext<PageContextProps | undefined>(undefined);

export const PageDataProvider = ({ pageData, children }: { pageData: PageFields; children: ReactNode }) => {
	const { hero, related = [], latest = [], ...otherProps }: { [key: string]: any } = pageData;

	const blocks: any[] = [];

	// Loop through all keys in pageData
	Object.entries(pageData).forEach(([key, value]) => {
		if (['hero', 'related', 'latest', 'tags', 'image', 'seo'].includes(key)) {
			return;
		}

		if (!value || (!Array.isArray(value) && typeof value !== 'object') || (Array.isArray(value) && value.length === 0)) {
			return;
		}

		delete otherProps[key];

		// Push each valid block into the blocks array
		blocks.push({
			__component: key,
			props: value,
		});
	});

	const flexContentIndex = blocks.findIndex((block: any) => block.__component === 'flexContent');
	const preFlex = flexContentIndex !== -1 ? blocks.slice(0, flexContentIndex) : blocks;
	const postFlex = flexContentIndex !== -1 ? blocks.slice(flexContentIndex + 1) : [];
	const flexContent =
		flexContentIndex !== -1
			? blocks[flexContentIndex].props.map((block: any, index: number) => {
					const title =
						block.paragraph?.heading?.title ??
						block.ctaBlock?.heading?.title ??
						block.quote ??
						block.heading?.title ??
						block.caption ??
						block.title ??
						'';

					return {
						...block,
						anchor: `${block.__component.split('.').pop()}-${index}`,
						title,
					};
				})
			: [];

	return (
		<PageContext.Provider
			value={{
				...otherProps,
				hero: pageData.hero,
				flexContent: flexContent,
				postFlex,
				preFlex,
				latest,
				related,
			}}
		>
			{children}
		</PageContext.Provider>
	);
};

export const usePageContext = () => {
	const context = useContext(PageContext);

	if (context === undefined) {
		throw new Error('usePageData must be used within a PageDataProvider');
	}

	return context;
};
