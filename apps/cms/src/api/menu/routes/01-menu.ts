export default {
	routes: [
		{
			method: 'GET',
			path: '/menu/slugs',
			handler: 'menu.findWithSlugs',
		},
		{
			method: 'GET',
			path: '/layout',
			handler: 'menu.layout',
		},
		{
			method: 'GET',
			path: '/routes',
			handler: 'menu.routes',
		},
	],
};
