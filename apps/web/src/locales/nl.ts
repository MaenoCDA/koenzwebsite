export default {
	breadcrumb: {
		home: 'Home',
	},
	navigation: {
		back: 'Terug',
	},
	tags: {
		clear: 'Toon alles',
	},
	teasers: {
		readMore: 'Lees meer',
	},
	search: {
		seo: {
			metaTitle: 'Zoeken',
			metaDescription: 'Zoek naar informatie op deze website',
		},
		noResults: {
			title: 'Geen resultaten gevonden',
			description: 'Er zijn geen resultaten gevonden voor `{query}`. Probeer een andere zoekterm.',
		},
		'result#zero': '',
		'result#one': '1 resultaat',
		'result#other': '{count} resultaten',
		searchLength: 'Voer minimaal {length} tekens in',
		placeholder: 'Zoeken',
		title: 'Zoeken',
	},
	notFound: {
		seo: {
			metaTitle: '404 - Pagina niet gevonden',
			metaDescription: 'Helaas, we hebben de pagina niet kunnen vinden',
		},
		title: 'Helaas, we hebben de pagina niet kunnen vinden',
		description:
			'Wellicht zit er een spel- of typfout in de URL of is de actie waarnaar u zocht al verlopen. We hopen u weer op weg te helpen met de volgende links.',
		button: 'Naar de homepage',
	},
	testimonials: {
		beforeQuote: 'What they say',
	},
	footer: {
		address: 'Adres',
	},
	form: {
		subscribe: 'Subscribe',
		required: '{field} is required',
		email: '{field} not an e-mail field',
	},
} as const;
