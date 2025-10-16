/**
 * Strapi seed for start foundation
 * use this file to fill in customer info
 *
 *
 * @todo ADD HERO + FLEX CONTENT COMPONENTS TO PAGES AND HOMEPAGE
 * @todo ADD POST OVERVIEW + DUMMY POSTS
 */

import slugify from 'slugify';

export const SeedData = [
	{
		uid: 'api::tag.tag',
		type: 'collectionType',
		data: [
			{
				title: 'Tag 1',
				slug: slugify('Tag 1', { lower: true }),
			},
			{
				title: 'Tag 2',
				slug: slugify('Tag 2', { lower: true }),
			},
			{
				title: 'Tag 3',
				slug: slugify('Tag 3', { lower: true }),
			},
		],
	},
	{
		uid: 'api::general-setting.general-setting',
		type: 'singleType',
		data: {
			addresses: [
				{
					title: 'Happy Horizon Arnhem',
					street: 'Nieuwe Stationsstraat',
					houseNumber: '20',
					postalCode: '6811 KS',
					place: 'Arnhem',
					email: 'arnhem@happyhorizon.com',
					phone: '088 - 044 8040',
				},
			],
			socials: [
				{
					channel: 'facebook',
					url: 'https://www.facebook.com/happyhorizon',
				},
				{
					channel: 'instagram',
					url: 'https://www.instagram.com/happyhorizon/',
				},
				{
					channel: 'linkedin',
					url: 'https://www.linkedin.com/company/happy-horizon/',
				},
			],
			SEO: {
				affixMetaTitle: '| Happy Horizon Arnhem',
				fallbackMetaTitle: 'Happy Horizon Arnhem',
				fallbackMetaDescription:
					'Ben je op zoek naar een full service online marketing bureau? Bij ons kantoor in Arnhem vind je alles onder één dak.',
				fallbackKeywords: 'Happy Horizon Arnhem',
			},
		},
	},
	{
		uid: 'api::home-page.home-page',
		type: 'singleType',
		data: {
			title: 'Home',
			hero: [
				{
					__component: 'hero.image',
					title: 'Prijswinnende Digital Creative Agency in het hart van Arnhem',
					text: 'Wij zijn een agency die werkt op het snijvlak van design en technologie.',
				},
			],
			flexContent: [],
			publishedAt: new Date(),
		},
	},
	{
		uid: 'api::contact-page.contact-page',
		type: 'singleType',
		data: {
			title: 'Contact',
			hero: [
				{
					__component: 'hero.image',
					title: 'Prijswinnende Digital Creative Agency in het hart van Arnhem',
					text: 'Wij zijn een agency die werkt op het snijvlak van design en technologie.',
				},
			],
			flexContent: [],
			publishedAt: new Date(),
		},
	},
	{
		uid: 'api::overview.overview',
		type: 'singleType',
		data: {
			title: 'Nieuws',
			slug: 'nieuws',
			flexContent: [],
			hero: [
				{
					__component: 'hero.image',
					title: 'Nieuwsoverzicht',
					text: 'Berichten en nieuws van Happy Horizon',
				},
			],
			childrenUid: 'api::post.post',
			publishedAt: new Date(),
		},
	},

	{
		uid: 'api::page.page',
		type: 'collectionType',
		data: [
			{
				title: 'Over ons',
				slug: slugify('Over ons', { lower: true }),
				hero: [
					{
						__component: 'hero.image',
						title: 'Over ons',
						text: '',
					},
				],
				flexContent: [],
				publishedAt: new Date(),
			},

			{
				title: 'Diensten',
				slug: slugify('Diensten', { lower: true }),
				hero: [
					{
						__component: 'hero.image',
						title: 'Diensten',
						text: '',
					},
				],
				flexContent: [],
				publishedAt: new Date(),
			},
		],
	},

	{
		uid: 'api::post.post',
		type: 'collectionType',
		data: [
			{
				title: 'Artikel 1',
				slug: slugify('Artikel 1', { lower: true }),
				parentUid: 'api::overview.overview',
				hero: [
					{
						__component: 'hero.image',
						title: 'Artikel 1',
						text: '',
					},
				],
				flexContent: [],
				publishedAt: new Date(),
			},
			{
				title: 'Artikel 2',
				slug: slugify('Artikel 2', { lower: true }),
				parentUid: 'api::overview.overview',
				hero: [
					{
						__component: 'hero.image',
						title: 'Artikel 2',
						text: '',
					},
				],
				flexContent: [],
				publishedAt: new Date(),
			},
			{
				title: 'Artikel 3',
				slug: slugify('Artikel 3', { lower: true }),
				parentUid: 'api::overview.overview',
				hero: [
					{
						__component: 'hero.image',
						title: 'Artikel 3',
						text: '',
					},
				],
				flexContent: [],
				publishedAt: new Date(),
			},
		],
	},
	{
		uid: 'api::menu.menu',
		type: 'collectionType',
		data: [
			{
				title: 'Topbar navigation',
				slug: slugify('Topbar navigation', { lower: true }),
				menuItems: [
					{
						label: 'Over ons',
						link: {
							link: {
								uid: 'api::page.page',
								kind: 'collectionType',
								slug: slugify('Over ons', { lower: true }),
							},
							type: 'internal',
							target: 'self',
						},
					},
				],
			},
			{
				title: 'Main navigation',
				slug: slugify('Main navigation', { lower: true }),
				menuItems: [
					{
						label: 'Home',
						link: {
							link: {
								uid: 'api::home-page.home-page',
								kind: 'singleType',
							},
							type: 'internal',
							target: 'self',
						},
					},
					{
						label: 'Diensten',
						link: {
							link: {
								uid: 'api::page.page',
								kind: 'collectionType',
								slug: slugify('Diensten', { lower: true }),
							},
							type: 'internal',
							target: 'self',
						},
					},
					{
						label: 'Nieuws',
						link: {
							link: {
								uid: 'api::overview.overview',
								kind: 'singleType',
								slug: slugify('Nieuws', { lower: true }),
							},
							type: 'internal',
							target: 'self',
						},
					},
				],
			},
			{
				title: 'Footer column 1',
				slug: slugify('Footer column 1', { lower: true }),
				menuItems: [
					{
						label: 'Lorem ipsum',
						link: {
							link: '',
							type: 'external',
							target: '_self',
						},
					},
					{
						label: 'Lorem ipsum',
						link: {
							link: '',
							type: 'external',
							target: '_self',
						},
					},
					{
						label: 'Lorem ipsum',
						link: {
							link: '',
							type: 'external',
							target: '_self',
						},
					},
				],
			},
			{
				title: 'Footer column 2',
				slug: slugify('Footer column 2', { lower: true }),
				menuItems: [
					{
						label: 'Lorem ipsum',
						link: {
							link: '',
							type: 'external',
							target: '_self',
						},
					},
					{
						label: 'Lorem ipsum',
						link: {
							link: '',
							type: 'external',
							target: '_self',
						},
					},
					{
						label: 'Lorem ipsum',
						link: {
							link: '',
							type: 'external',
							target: '_self',
						},
					},
				],
			},
			{
				title: 'Footer column 3',
				slug: slugify('Footer column 3', { lower: true }),
				menuItems: [
					{
						label: 'Lorem ipsum',
						link: {
							link: '',
							type: 'external',
							target: '_self',
						},
					},
					{
						label: 'Lorem ipsum',
						link: {
							link: '',
							type: 'external',
							target: '_self',
						},
					},
					{
						label: 'Lorem ipsum',
						link: {
							link: '',
							type: 'external',
							target: '_self',
						},
					},
				],
			},
			{
				title: 'Bottom navigation',
				slug: slugify('Bottom navigation', { lower: true }),
				menuItems: [
					{
						label: 'Terms and conditions',
						link: {
							link: '',
							type: 'external',
							target: '_self',
						},
					},
					{
						label: 'Privacy notice',
						link: {
							link: '',
							type: 'external',
							target: '_self',
						},
					},
					{
						label: 'Disclaimer',
						link: {
							link: '',
							type: 'external',
							target: '_self',
						},
					},
				],
			},
		],
	},
];
