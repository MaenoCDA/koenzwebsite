/**
 * ImageWrapper.tsx
 * @file ImageWrapper.tsx
 * @summary Image Wrapper component
 *
 * @property {object} classNames - The class names for the wrapper and image
 * @property {ImageAttributes} image - The image attributes
 * @property {IMAGE_PREFIX} prefix - The image prefix
 * @property {boolean} priority - The image priority
 * @property {string} loading - The image loading
 * @property {boolean} fill - The image fill
 * @property {boolean} unoptimized - The image unoptimized
 *
 * For example, if you know your styling will cause an image to be full-width on mobile devices,
 * in a 2-column layout on tablets, and a 3-column layout on desktop displays,
 * you should include a sizes property such as the following: (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw
 * @property {string} sizes - The image sizes

 * @property {ReactNode} children - The children of the component, usefull for adding overlay content
 * @property {number} width - The image width - only needed when @fill is false
 * @property {number} height - The image height - only needed when @fill is false
 *
 * @returns {ReactNode} - The ImageWrapper component
 */

import { PropsWithChildren } from 'react';
import Image from 'next/image';
import { classNamesTailwind, log } from '~/utils/helpers';
import { ImageAttributes } from '~/types/schemas/main';

type ImageWrapperProps = {
	image: ImageAttributes;
	classNames?: {
		wrapper?: string;
		image?: string;
	};
	prefix?: IMAGE_PREFIX;
	priority?: boolean;
	loading?: 'eager' | 'lazy';
	fill?: boolean;
	unoptimized?: boolean;
	sizes?: string;
	width?: number;
	height?: number;
};

export enum IMAGE_PREFIX {
	ORIGINAL = '',
	SOCIAL_MEDIA = 'social',
	LARGE = 'large',
	MEDIUM = 'medium',
	SMALL = 'small',
}

const getImageUrl = (url: string, prefix: IMAGE_PREFIX) => {
	if (!url) {
		return '';
	}

	const urlObj = new URL(url);
	const parts = urlObj.pathname.split('/');
	const fileName = parts.pop();

	const newPathname = `${parts.join('/')}/${prefix ? `${prefix}_` : ''}${fileName}`;

	return `${urlObj.origin}${newPathname}`;
};

const ImageWrapper = ({
	classNames,
	image,
	prefix,
	priority = false,
	loading = 'lazy',
	fill = true,
	unoptimized = false,
	sizes = '(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw',
	width,
	height,
	children,
}: PropsWithChildren<ImageWrapperProps>) => {
	if (height && width && sizes && fill) {
		log('error', 'You should not pass width, height and sizes when fill is true');
	}

	if (!image) {
		return null;
	}

	return (
		<div className={classNamesTailwind('relative', classNames?.wrapper)}>
			<Image
				fetchPriority={priority ? 'high' : 'auto'}
				className={classNamesTailwind(classNames?.image)}
				src={getImageUrl(image.url, prefix ?? IMAGE_PREFIX.ORIGINAL)}
				loading={loading}
				priority={priority}
				placeholder={'blur'}
				blurDataURL={image.placeholder ?? undefined}
				sizes={`${fill ? sizes : null}`}
				alt={image.alternativeText ?? ''}
				fill={fill}
				unoptimized={unoptimized}
				width={width}
				height={height}
			/>
			{children}
		</div>
	);
};

export default ImageWrapper;
