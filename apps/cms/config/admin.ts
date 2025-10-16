export default ({ env }) => ({
	preview: {
		enabled: true,
		config: {
			allowedOrigins: [env('CLIENT_URL')], // Usually your frontend application URL
			async handler(uid, { documentId, locale, status }) {
				const document = await strapi.documents(uid).findOne({ documentId });
				const pathname = await getPreviewPathname(uid, { locale, document, status });

				// Disable preview if the pathname is not found
				if (!pathname) {
					return null;
				}

				const urlSearchParams = new URLSearchParams({
					url: pathname,
					secret: env('PREVIEW_SECRET'),
					status,
				});

				return `${env('CLIENT_URL')}/api/preview?${urlSearchParams}`;
			},
		},
	},
	auth: {
		secret: env('ADMIN_JWT_SECRET'),
	},
	apiToken: {
		salt: env('API_TOKEN_SALT'),
	},
	transfer: {
		token: {
			salt: env('TRANSFER_TOKEN_SALT'),
		},
	},
	flags: {
		nps: env.bool('FLAG_NPS', true),
		promoteEE: env.bool('FLAG_PROMOTE_EE', true),
	},
});

const getPreviewPathname = async (uid, { locale, document, status }): Promise<string | null> => {
	if (strapi.config.EXCLUDED_CONTENT_TYPES.includes(uid)) {
		return null;
	}

	const { documentId } = document;
	const routes = await strapi
		.plugin('link')
		.service('service')
		.routes({ request: { query: { locale, status } } });

	if (!routes || !routes[locale]) {
		return null;
	}

	return routes[locale].find((route) => route.documentId === documentId).route;
};
