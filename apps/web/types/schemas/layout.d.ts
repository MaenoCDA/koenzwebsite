import { SOCIAL_CHANNELS } from '~/src/components/icon/Social';
import { ImageAttributes, } from './main';
import { ROUTES_ENUM } from '~/src/app/server/ServerPage';

export interface Address {
	id: number;
	title: string;
	street: string;
	houseNumber: string;
	houseNumberAddition: string | null;
	postalCode: string;
	place: string;
	email: string;
	phone: string;
	phoneHref: string | null;
}

export interface Social {
	id: number;
	channel: SOCIAL_CHANNELS;
	url: string;
}

export interface SEO {
	id: number;
	googleTagManager: string;
	affixMetaTitle: string;
	fallbackMetaTitle: string;
	fallbackMetaDescription: string;
	fallbackKeywords: string;
}

export interface MenuItem {
	id: string | undefined;
	label: string;
	link: {
		type: string;
		target: string;
		href: string;
	};
	isButton?: boolean;
	subItems: MenuItem[];
}

export interface Menu {
	id: number;
	createdAt: string;
	updatedAt: string;
	locale: string;
	title: string;
	slug: string;
	menuItems: MenuItem[];
	localizations: any[];
}

export interface GeneralSettings {
	id: number;
	createdAt: string;
	updatedAt: string;
	locale: string;
	addresses: Address[];
	socials: Social[];
	SEO: SEO;
	favicon: ImageAttributes;
	logo: ImageAttributes;
	tagline?: string;
}

export interface FixedBlocks {
	id: number;
	title: string;
	relation: ROUTES_ENUM;
	blocks: FlexContent[];
}

export interface Layout {
	generalSettings: GeneralSettings;
	menus: Menu[];
	fixedBlocks?: FixedBlocks[];
}

export interface Svg {
	className?: string;
	width?: number;
	height?: number;
}
