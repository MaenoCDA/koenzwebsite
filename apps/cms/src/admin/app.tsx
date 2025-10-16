import Logo from './extensions/logo.svg';
import LogoWhite from './extensions/logo-white.svg';
import favicon from './extensions/favicon.ico';
import { InternalPageLink } from './plugins/InternalPageLink';

import {
	Bold,
	Italic,
	Essentials,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Link,
	List,
	Paragraph,
	SourceEditing,
} from 'ckeditor5';

import { setPluginConfig, StrapiMediaLib, StrapiUploadAdapter } from '@_sh/strapi-plugin-ckeditor';
import LeftMenuItems from './components/LeftMenuItems';

const myCustomPreset = {
	name: 'custom',
	description: 'myCustomPreset description',
	editorConfig: {
		licenseKey: 'GPL',
		plugins: [
			Bold,
			Italic,
			Essentials,
			Heading,
			Image,
			ImageCaption,
			ImageStyle,
			ImageToolbar,
			ImageUpload,

			Link,
			List,
			Paragraph,
			StrapiMediaLib,
			StrapiUploadAdapter,
			SourceEditing,
			InternalPageLink,
		],
		toolbar: [
			'heading',
			'|',
			'bold',
			'italic',
			'internalPageLink',
			'link',
			'bulletedList',
			'numberedList',
			'|',
			'strapiMediaLib',
			'|',
			'undo',
			'redo',
		],
		link: {
			decorators: {
				isExternal: {
					mode: 'manual',
					label: 'Open in a new tab',
					attributes: {
						target: '_blank',
					},
				},
				isButtonPrimary: {
					mode: 'manual',
					label: 'Show link as primary button',
					attributes: {
						class: 'button default',
					},
				},
				isButtonSecondary: {
					mode: 'manual',
					label: 'Show link as secondary button',
					attributes: {
						class: 'button secondary',
					},
				},
			},
		},
		heading: {
			options: [
				{ model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
				{ model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
				{ model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
				{ model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
				{ model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
			],
		},
		image: {
			toolbar: ['imageStyle:inline', 'imageStyle:block', 'imageStyle:side', '|', 'toggleImageCaption', 'imageTextAlternative'],
		},
		table: {
			contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', '|', 'toggleTableCaption'],
		},
	},
};

const myConfig = {
	presets: [myCustomPreset],
};

const THEME = localStorage.getItem('STRAPI_THEME');
const isDarkTheme = THEME !== 'light';

export default {
	config: {
		auth: {
			logo: isDarkTheme ? LogoWhite : Logo,
		},
		head: {
			favicon,
		},
		menu: {
			logo: isDarkTheme ? LogoWhite : Logo,
		},
		locales: ['nl', 'en'],
		translations: {
			nl: {
				'app.components.LeftMenu.navbrand.title': 'Happy Horizon CMS',
				'app.components.LeftMenu.navbrand.workplace': 'Beheer je content',
			},
		},
		theme: {
			dark: {
				colors: {
					danger100: '#282A36', // TOGGLE OFF BG
					danger700: '#f59e0b', // TOGGLE OFF COLOR
					neutral0: '#44475a', // BACKGROUND SIDEBAR
					neutral100: '#282A36', // BACKGROUND CONTENT
					neutral150: '#44475a', // DISABLED BUTTON BG
					neutral200: '#343746', // LINE THROUGH MIDDLE
					neutral500: '#f8f8f2', // MENU IDLE COLOR
					neutral600: '#f8f8f2', // MENU HOVER COLOR
					neutral700: '#f8f8f2', // MENU ACTIVE ICON COLOR
					neutral800: '#ffffff', // TITLE COLORS
					neutral900: '#282A36', // TOOLTIP BG
					primary100: '#282A36', // MENU ACTIVE BG
					primary200: '#44475a', // PLUS SIGN BG
					primary500: '#fcd34d', // PRIMARY BUTTON HOVER
					primary600: '#fbbf24', // PRIMARY BUTTON COLOR
					primary700: '#f59e0b', // HIGHLIGHT COLOR
					secondary100: '#44475a', // INFO BOX COLOR
					success100: '#44475a', // SUCCESS BOX BG
				},
			},
			light: {
				colors: {
					alternative100: '#f6ecfc',
					alternative200: '#e0c1f4',
					alternative500: '#020617',
					alternative600: '#020617',
					alternative700: '#020617',
					buttonNeutral0: '#ffffff',
					buttonPrimary500: '#171717',
					buttonPrimary600: '#020617',
					danger100: '#fcecea',
					danger200: '#f5c0b8',
					danger500: '#ee5e52',
					danger600: '#d02b20',
					danger700: '#b72b1a',
					neutral0: '#ffffff',
					neutral100: '#f6f6f9',
					neutral1000: '#181826',
					neutral150: '#eaeaef',
					neutral200: '#dcdce4',
					neutral300: '#c0c0cf',
					neutral400: '#a5a5ba',
					neutral500: '#8e8ea9',
					neutral600: '#666687',
					neutral700: '#4a4a6a',
					neutral800: '#32324d',
					neutral900: '#212134',
					primary100: '#fff',
					primary200: '#eaeaef',
					primary500: '#dcdce4',
					primary600: '#171717',
					primary700: '#020617',
					secondary100: '#eaf5ff',
					secondary200: '#b8e1ff',
					secondary500: '#66b7f1',
					secondary600: '#0c75af',
					secondary700: '#006096',
					success100: '#eafbe7',
					success200: '#c6f0c2',
					success500: '#5cb176',
					success600: '#328048',
					success700: '#2f6846',
					warning100: '#fcd34d',
					warning200: '#fbbf24',
					warning500: '#f59e0b',
					warning600: '#d97706',
					warning700: '#b45309',
				},
			},
		},
		// Disable video tutorials
		tutorials: false,
		// Disable notifications about new Strapi releases
		notifications: { release: false },
	},
	bootstrap(app) {
		app.getPlugin('content-manager').injectComponent('menu', 'left-menu', {
			name: 'customMenu',
			Component: ({ props }) => <LeftMenuItems props={props} />,
		});
	},
	register() {
		setPluginConfig(myConfig);
	},
};
