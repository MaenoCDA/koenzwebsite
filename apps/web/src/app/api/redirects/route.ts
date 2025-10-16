import { CMS_BASE_URL } from '~/config';
import { notNull } from '~/utils/helpers';

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const pathname = searchParams.get('pathname');

	if (!pathname) {
		return new Response(JSON.stringify({ results: {}, message: 'No pathname found' }), { status: 200 });
	}

	const locale = pathname?.split('/')[1];
	const path = pathname?.split('/').slice(2).join('/');

	try {
		const redirects = await fetch(`${CMS_BASE_URL}/api/redirects/${locale}`, {
			next: { revalidate: 86400, tags: [`api::redirect.redirect-${locale}`] },
		});
		const redirect = await redirects.json();

		if (redirect.length > 0) {
			const filteredRedirect = redirect
				.map((item: any) => {
					return item.locale === locale && item.source === `/${path}` ? item : null;
				})
				.filter(notNull);

			if (filteredRedirect.length === 0) {
				return new Response(JSON.stringify({ results: {}, message: 'No redirect found' }), { status: 200 });
			}

			return Response.json(filteredRedirect.pop());
		}

		return new Response(JSON.stringify({ results: {}, message: 'No redirect found' }), { status: 200 });
	} catch (error) {
		return new Response(JSON.stringify({ results: {}, message: 'No redirect found' }), { status: 200 });
	}
}
