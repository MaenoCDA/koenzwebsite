import { Button } from './input';

interface BaseContent {
	id: number;
	__component: string;
	className?: string;
}

interface Image extends ImageAttributes {}

interface ImageData extends ImageAttributes {
	id: number;
}

export interface ImageAttributes {
	name: string;
	alternativeText: string | null;
	caption: string | null;
	width: number;
	height: number;
	formats: Formats;
	hash: string;
	ext: string;
	mime: string;
	size: number;
	url: string;
	previewUrl: string | null;
	provider: string;
	createdAt: string;
	updatedAt: string;
	placeholder: string;
}

interface Formats {
	thumbnail: Thumbnail;
}

interface Thumbnail {
	ext: string;
	url: string;
	hash: string;
	mime: string;
	name: string;
	path: string | null;
	size: number;
	width: number;
	height: number;
	sizeInBytes: number;
}

interface Paragraph {
	id: number;
	text: string;
	heading: Heading;
	buttons: Button[];
}

interface Heading {
	id: number;
	title: string;
	subtitle: string;
}

interface AccordionItem {
	id: number;
	title: string;
	text: string;
}

interface ImageContent extends BaseContent {
	__component: 'content.image';
	heading: Heading;
	caption?: string;
	image: Image;
	isNarrow?: boolean;
}

interface ImageTextContent extends BaseContent {
	__component: 'content.image-text';
	textLeft: boolean;
	image: Image;
	paragraph: Paragraph;
}

interface TextContent extends BaseContent {
	__component: 'content.text';
	hasBackground: boolean;
	isColumnView: boolean;
	paragraph: Paragraph;
}

interface AccordionContent extends BaseContent {
	__component: 'content.accordion';
	heading: Heading;
	items: AccordionItem[];
}

interface TeaserDynamic extends BaseContent {
	__compnent: 'teaser.dynamic-teaser';
	heading: Heading;
	text: string;
}

interface TeaserManual extends BaseContent {
	__component: 'teaser.manual-teaser';
	heading: Heading;
	text: string;
	manualTeasers: Teaser[];
}

interface TeaserLatest extends BaseContent {
	__component: 'teaser.latest-teaser';
	heading: Heading;
	text: string;
	button?: Button;
}

interface Teaser {
	id: number;
	title: string;
	text: string;
	button: Button;
	image: Image;
	slug?: string;
}

interface Cta extends BaseContent {
	__component: 'content.cta';
	image: Image;
	ctaBlock: Paragraph;
}

interface Quote extends BaseContent {
	__component: 'content.quote';
	quote: string;
	author: string;
	authorDescription?: string;
	image: Image;
}

interface Video {
	id: number;
	__component: 'content.video';
	video: {
		url: string;
		provider: string;
		providerUid: string;
	};
	placeholder: Image;
	caption: string;
}

interface Brands extends BaseContent {
	__component: 'content.brands';
	logos: ImageData[];
}

interface Resources extends BaseContent {
	id: number;
	summary?: Paragraph;
	resources?: ImageData[];
}

export type FlexContent =
	| ImageTextContent
	| TextContent
	| ImageContent
	| AccordionContent
	| TeaserDynamic
	| TeaserCustom
	| TeaserLatest
	| Cta
	| Quote
	| Video
	| Brands
