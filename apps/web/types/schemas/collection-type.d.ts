import { DefaultFields } from './common';
import { FlexContent, Teaser } from './main';
import { Hero } from './hero';

export interface Page extends PageFields {
	id: number;
}

export interface Post extends PageFields {
	id: number;
	tags?: Tag[];
	image: ImageAttributes;
}

export interface Tag {
	id: number;
	title: string;
	slug: string;
}

interface PageFields extends DefaultFields {
	resources?: Resources;
	flexContent: FlexContent[];
	hero: Hero[];
	title;
	parent?: { data: Page };
	latest?: Teaser[] | [];
	related?: Teaser[] | [];
}

interface Pagination {
	page: number;
	pageSize?: number;
	pageCount: number;
	total?: number;
}

interface Meta {
	pagination: Pagination;
	tags?: Tag[];
}
