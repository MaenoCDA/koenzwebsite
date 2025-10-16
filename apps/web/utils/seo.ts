import { Metadata } from 'next';
import { getLayoutData } from './api/getters';
import { DefaultFields } from '~/types/schemas/common';

export const getSeoMetadata = async (locale: string, data?: DefaultFields): Promise<Metadata> => {
	const SEO = await fetchGeneralMetadata(locale);
	const { seo, title } = data || {};

	const metaTitle = seo?.metaTitle ?? title ?? SEO?.fallbackMetaTitle;
	const metaDescription = seo?.metaDescription ?? SEO?.fallbackMetaDescription;
	const metaImage = seo?.metaImage ? `${process.env.NEXT_PUBLIC_CMS_URL}${seo.metaImage?.url}?resize=1200x630` : null;

	return {
		title: `${metaTitle} ${SEO?.affixMetaTitle}`,
		description: metaDescription,
		robots: seo?.metaRobots,
		keywords: seo?.keywords,
		...(seo?.canonicalURL ? { alternates: { canonical: seo.canonicalURL } } : {}),
		openGraph: {
			title: metaTitle,
			images: [
				...(metaImage
					? [
							{
								url: metaImage,
								alt: seo?.metaImage ? seo?.metaImage?.alternativeText : metaTitle,
								width: 1200,
								height: 630,
							},
						]
					: []),
			],
		},
	};
};

export const fetchGeneralMetadata = async (locale: string) => {
	const { generalSettings } = await getLayoutData(locale);

	return generalSettings?.SEO;
};
