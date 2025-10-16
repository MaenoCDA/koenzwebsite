import { Image } from './common';

export interface Seo {
	id: number;
	metaTitle?: string;
	metaDescription?: string;
	metaImage?: Image;
	metaRobots?: string;
	canonicalURL?: string;
	keywords?: string;
}
