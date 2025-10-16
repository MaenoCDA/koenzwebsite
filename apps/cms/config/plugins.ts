const getBucket = (env?) => {
	const hasBucket = env('AWS_BUCKET', false);

	if (!hasBucket) {
		return {
			breakpoints: {
				xxlarge: 2560,
				xlarge: 1920,
				large: 1440,
				medium: 1024,
				small: 768,
				social: 1200,
			},
		};
	}

	return {
		breakpoints: {
			xxlarge: 2560,
			xlarge: 1920,
			large: 1440,
			medium: 1024,
			small: 768,
			social: 1200,
		},
		provider: 'aws-s3',
		providerOptions: {
			s3Options: {
				credentials: {
					accessKeyId: env('AWS_ACCESS_KEY_ID'),
					secretAccessKey: env('AWS_ACCESS_SECRET'),
				},
				region: 'eu-central-1',
				params: {
					ACL: env('AWS_ACL', ''),
					signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 15 * 60),
					Bucket: env('AWS_BUCKET'),
				},
			},
		},
		actionOptions: {
			upload: {
				CacheControl: 'max-age=31536000',
			},
			uploadStream: {
				CacheControl: 'max-age=31536000',
			},
			delete: {},
		},
	};
};

export default ({ env }) => ({
	email: {
		enabled: env('EMAIL_ENABLED', true),
		config: {
			provider: 'mailgun',
			providerOptions: {
				key: env('MAILGUN_SECRET_KEY', '1234'),
				domain: env('MAILGUN_DOMAIN', 'content.'), //Required if you have an account with multiple domains
				host: env('MAILGUN_HOST', 'api.eu.mailgun.net'), // we have only 2 options here. api.mailgun.net for US servers, api.eu.mailgun.net for EU Servers.
			},
			settings: {
				recipients: env('EMAIL_RECIPIENTS', ['info@ef2.builders']),
				defaultFrom: env('EMAIL_FROM', 'Foundation TEST <info@ef2.builders>'),
				defaultReplyTo: env('EMAIL_REPLY', 'Foundation TEST <info@ef2.builders>'),
				testAddress: 'hosting@ef2.nl',
			},
		},
	},
	'api-forms': {
		enabled: true,
		// config: {
		// 	ai: {
		// 		enabled: true,
		// 		apiEndpoint: env('OPEN_AI_API_ENDPOINT', 'https://api.openai.com/v1/chat/completions'),
		// 		apiKey: env('OPEN_AI_SECRET_KEY', ''),
		// 		model: 'gpt-4',
		// 		temperature: 0.3,
		//
		// 	}
		//}
	},
	'users-permissions': { enabled: true },
	i18n: { enabled: true },
	'video-field': {
		enabled: true,
	},
	ckeditor5: {
		enabled: true,
	},
	'bold-title-editor': {
		enabled: true,
	},
	link: {
		enabled: true,
		resolve: './src/plugins/link',
	},
	'content-type-teaser': {
		enabled: true,
		resolve: './src/plugins/content-type-teaser',
	},
	'collection-type-select': {
		enabled: true,
		resolve: './src/plugins/collection-type-select',
	},
	webhook: {
		enabled: true,
		resolve: './src/plugins/webhook',
		config: {
			endpoint: `${env('CLIENT_URL')}/api/revalidate`,
		},
	},
	upload: {
		enabled: true,
		config: getBucket(env),
	},
	'drag-drop-content-types': {
		enabled: true,
		resolve: './src/plugins/drag-drop-content-types',
	},
});
