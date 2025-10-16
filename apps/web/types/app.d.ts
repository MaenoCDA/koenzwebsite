import { PropsWithChildren } from 'react';
import { Overview, Page, PageFields, Route, RouteResult } from './schemas';

/**
 * Types
 */
export interface BreadcrumbsItem {
	label?: string;
	href?: string;
}

export interface LocaleLayoutProps<T extends object = object> {
	params: { locale: string } & T;
	searchParams: SearchParams;
}

export type SearchParams = Record<string, string | string[] | undefined>;

export interface ClientPageProps extends PropsWithChildren {
	isHome?: boolean;
	pageData: Home | PageFields | Overview | Page;
	route?: Route | RouteResult;
}
