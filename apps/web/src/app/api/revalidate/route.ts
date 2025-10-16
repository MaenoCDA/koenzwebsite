import { NextRequest, NextResponse } from 'next/server';
import { revalidateByPath, revalidateByTag } from '../../actions';

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();

		if (!body.entry) {
			return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
		}

		if (
			body.uid === 'api::general-setting.general-setting' ||
			body.uid === 'api::redirect.redirect' ||
			body.uid === 'api::menu.menu' ||
			!body.entry.slug
		) {
			const tag = `${body.uid}-${body.entry.locale}`;

			await revalidateByTag(tag);
			await revalidateByPath(body.newSlug);
			await revalidateByTag('routes');
			console.info(`Successfully revalidated tag: ${tag}`);

			return NextResponse.json({ message: `Successfully revalidated tag ${tag}` }, { status: 200 });
		}

		if (body.oldTag) {
			console.info(`Revalidating old tag: ${body.oldTag}`);
			await revalidateByTag(body.oldTag);

			if (body.oldSlug) {
				await revalidateByPath(body.oldSlug);
			}
		}

		if (body.paths) {
			for (const path of body.paths) {
				console.info(`Revalidating path: ${path}`);
				await revalidateByPath(path);
			}
		}

		await revalidateByPath(body.newSlug);
		await revalidateByTag(body.newTag);
		await revalidateByTag('routes');

		console.info(`Successfully revalidated path: ${body.newSlug}`);

		return NextResponse.json({ message: `Success` }, { status: 200 });
	} catch (error) {
		console.error('Er is iets misgegaan', JSON.stringify({ error }));

		return new Response(JSON.stringify({ error }), { status: 500 });
	}
}
