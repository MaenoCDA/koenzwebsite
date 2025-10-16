import { Image } from './main';
import { Button } from './input';

export interface Hero {
	__component: string;
	id: number;
	title: string;
	subtitle: string;
	text: string;
	image: Image | null;
	buttons: Button[];
	isHome: boolean;
}
