'use server';

import { revalidateTag, revalidatePath } from 'next/cache';

export async function revalidateByTag(tag: string) {
	if (!tag) {
		console.error('No tag provided');
		return;
	}

	revalidateTag(tag);
}

export async function revalidateByPath(path: string) {
	if (!path) {
		console.error('No path provided');
		return;
	}

	revalidatePath(path);
}
