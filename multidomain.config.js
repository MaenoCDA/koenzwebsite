const MAIN_DATABASE_NAME = 'strapi';

/**
 * @type {import('./types/domain').Domain[]}
 **/
const domains = [
	{
		name: 'Main domain',
		web: ['main.localhost', 'staging.main.example.com', 'main.example.com'],
		cms: 'https://cms.main.wolf.ef2.builders',
		locales: ['nl', 'en'],
		defaultLocale: 'nl',
		isMainDomain: true,
		port: 1337,
		databaseName: MAIN_DATABASE_NAME,
	},
	// {
	// 	name: 'Other domain',
	// 	web: ['other.localhost', 'staging.other.example.com', 'other.example.com'],
	// 	cms: 'https://cms.other.wolf.ef2.builders',
	// 	locales: ['fr', 'en'],
	// 	defaultLocale: 'fr',
	// 	port: 1338,
	// 	databaseName: MAIN_DATABASE_NAME + '_other',
	// },
	// {
	// 	name: 'Another domain',
	// 	web: ['another.localhost', 'staging.another.example.com', 'another.example.com'],
	// 	cms: 'https://cms.another.wolf.ef2.builders',
	// 	locales: ['en', 'es', 'it'],
	// 	defaultLocale: 'en',
	// 	port: 1339,
	// 	databaseName: MAIN_DATABASE_NAME + '_another',
	// },
];

/**
 * @param {import('./types/domain').Domain['cms']} cms
 * @returns {string}
 **/
const parseCms = (cms) => {
	return typeof cms === 'string' ? cms : cms[process.env.VERCEL_ENV || process.env.NODE_ENV || 'development'];
};

/**
 * @type {import('./types/domain').MultiDomainConfig}
 */
module.exports = {
	domains,
	parseCms,
	MAIN_DATABASE_NAME,
};
