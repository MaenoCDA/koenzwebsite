import { DefaultFields } from './common';
import { FlexContent } from './main';
import { Hero } from './hero';

export interface Homepage extends DefaultFields {
	id: number;
	flexContent: FlexContent[];
	hero: Hero;
}

export interface Overview extends DefaultFields {
	id: number;
	flexContent: FlexContent[];
	hero: Hero;
}
