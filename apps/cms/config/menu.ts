export type Link = {
	uid: string;
	title: string;
	to: string;
};

export type Section = {
	id: string;
	title: string;
	links: Link[];
};

const menuItems: Section[] = [
	{
		id: 'website',
		title: 'Website',
		links: [
			{
				uid: 'api::general-setting.general-setting',
				title: 'Instellingen',
				to: '/content-manager/single-types/api::general-setting.general-setting',
			},
			{
				uid: 'api::menu.menu',
				title: 'Navigatie',
				to: '/content-manager/collection-types/api::menu.menu',
			},
			{
				uid: 'api::redirect.redirect',
				title: 'Redirects',
				to: '/content-manager/collection-types/api::redirect.redirect',
			},
			{
				uid: 'api::tag.tag',
				title: 'Tags',
				to: '/content-manager/collection-types/api::tag.tag',
			},
			{
				uid: 'api::fixed-block.fixed-block',
				title: 'Fixed blocks',
				to: '/content-manager/collection-types/api::fixed-block.fixed-block',
			},
		],
	},
	{
		id: 'forms',
		title: 'Formulieren',
		links: [
			{
				uid: 'api::api-form.form',
				title: 'Formulieren',
				to: '/plugins/api-forms',
			},
			{
				uid: 'api::api-form.submission',
				title: 'Inzendingen',
				to: '/plugins/api-forms/submissions',
			},
		],
	},

	{
		id: 'pages',
		title: "Pagina's",
		links: [
			{
				uid: 'api::page.page',
				title: "Pagina's",
				to: '/content-manager/collection-types/api::page.page',
			},
			{
				uid: 'api::home-page.home-page',
				title: 'Homepage',
				to: '/content-manager/single-types/api::home-page.home-page',
			},
			{
				uid: 'api::contact-page.contact-page',
				title: 'Contactpagina',
				to: '/content-manager/single-types/api::contact-page.contact-page',
			},
		],
	},
	{
		id: 'news',
		title: 'Nieuws',
		links: [
			{
				uid: 'api::overview.overview',
				title: 'Overzichtspagina',
				to: '/content-manager/single-types/api::overview.overview',
			},
			{
				uid: 'api::post.post',
				title: 'Nieuwsberichten',
				to: '/content-manager/collection-types/api::post.post',
			},
		],
	},
];

export default menuItems;
