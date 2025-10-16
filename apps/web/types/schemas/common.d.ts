import { Seo } from './seo';

export interface DefaultFields {
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	title: string;
	slug: string;
	seo?: Seo;
	documentId: string;
}

export interface Meta {}
