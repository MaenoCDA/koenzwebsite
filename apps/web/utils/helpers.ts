import { ImageProps } from 'next/image';
import { twMerge } from 'tailwind-merge';
import { Menu } from '~/types/schemas';
import { ImageAttributes } from '~/types/schemas/main';

export const classNamesTailwind = (...args: (string | { [key: string]: boolean } | undefined)[]): string => {
	const result: string[] = [];

	for (const arg of args) {
		if (!arg) continue;

		if (typeof arg === 'string') {
			result.push(arg);
		} else {
			for (const [key, value] of Object.entries(arg)) {
				if (value) {
					result.push(key);
				}
			}
		}
	}

	return twMerge(...result);
};

export const notNull = <T extends object>(value: T | null | undefined): value is T => {
	return value !== null && value !== undefined;
};

export const getImageProps = (image: ImageAttributes): ImageProps => {
	return {
		src: `${image.url}`,
		alt: image.alternativeText || '',
		width: image.width,
		height: image.height,
	};
};

export const getImageSize = (image: ImageAttributes): string => {
	return `${image.width}x${image.height}`;
};

export const filterMenusBySlugs = (menus: Menu[] | [], slugs: string[]) => {
	return menus.filter((menu) => slugs.includes(menu.slug));
};

export const log = (type: 'error' | 'info', message: string, isDebugMode = false) => {
	if (isDebugMode) {
		console[type](message);
	}

	if (type === 'error') {
		throw new Error(message);
	}
};

// Utility function to check if a response prop is valid
export const isValidResponse = (data: any): boolean => {
	return data && typeof data === 'object' && (Array.isArray(data) ? data.length > 0 : Object.keys(data).length > 0);
};

export const getColSpanClass = (rowCount: number): string => {
	const spanMap: { [key: number]: string } = {
		1: 'col-span-12',
		2: 'col-span-6',
		3: 'col-span-4',
		4: 'col-span-3',
		6: 'col-span-2',
		12: 'col-span-1',
	};

	return spanMap[rowCount] || 'col-span-12';
};

export const stringifyHit = (value: any, query: string): string => {
	if (Array.isArray(value)) {
		const foundValue = value.filter((v: { value: string }) => {
			if (v.value.toLowerCase().includes(query)) {
				return v.value;
			}
		});

		return foundValue.length > 0 ? foundValue.pop().value : value[0] ? value[0].value : '';
	} else if (typeof value === 'object' && value !== null) {
		return value.value || '';
	}

	return value as string;
};
