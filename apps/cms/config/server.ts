export default ({ env }) => ({
	host: env('HOST', '0.0.0.0'),
	port: env.int('PORT', 1337),
	app: {
		keys: env.array('APP_KEYS'),
	},
	url: env('STRAPI_URL', 'http://localhost:1337'),
	webhook: {
		populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
	},
	http: {
		rejectUnauthorized: env.bool('NODE_TLS_REJECT_UNAUTHORIZED', true) === false ? false : true,
	},
});
