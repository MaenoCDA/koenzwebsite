import { createI18nMiddleware } from 'next-international/middleware';
import { DEFAULT_LOCALE, DEFAULT_LOCALES } from '~/config';

type Environment = 'production' | 'development' | 'other';

const I18nMiddleware = createI18nMiddleware({
	locales: DEFAULT_LOCALES,
	defaultLocale: DEFAULT_LOCALE,
	resolveLocaleFromRequest: (request) => {
		return DEFAULT_LOCALE;
	},
});

function withHostFromHeaders(middleware) {
	return (...args) => {
		const currentEnv = process.env.NODE_ENV as Environment;

		if (currentEnv !== 'production') {
			return middleware(...args);
		}

		const { nextUrl, headers } = args[0];
		let { url } = args[0];

		nextUrl.host = headers.get('Host') ?? nextUrl.host;
		nextUrl.protocol = 'https';
		nextUrl.port = '';

		url = nextUrl.href;

		return middleware(...args);
	};
}

export default withHostFromHeaders((req) => {
	const response = I18nMiddleware(req);

	return response;
});

export const config = {
	matcher: ['/((?!api|static|.*\\..*|_next|!favicon.ico|robots.txt).*)'],
};
