/**
 * @file Home page
 * Default landing page for the website
 * @route /[locale]/
 */
import { notFound } from 'next/navigation';
import { setStaticParamsLocale } from 'next-international/server';
import ClientHomePage from '../client/ClientHomePage';
import ClientPageProviders from '../client/ClientPageProviders';
import type { LocaleLayoutProps } from '~/types/app';
import { getSeoMetadata } from '~/utils/seo';
import { getStaticParams } from '@/locales/server';
import { getRoutes } from '~/utils/api/routes';
import { getHomePageData } from '~/utils/api/getters';

export const fetchCache = 'default-cache';

// ~~~~ Start 🚀 generating static routes ~~~~ //
export function generateStaticParams() {
	return getStaticParams();
}
// ~~~~ End 🚀 generating static routes ~~~~ //

// ~~~~ Start 🕸️ generating metadata ~~~~ //
export async function generateMetadata(props: LocaleLayoutProps) {
	const params = await props.params;
	const { locale } = params;

	const data = await getHomePageData(locale);

	return getSeoMetadata(locale, data);
}
// ~~~~ End 🕸️ generating metadata ~~~~ //

// ~~~~ Begin 🌎 Render ~~~~ //
const HomePage = async (props: LocaleLayoutProps) => {
	const params = await props.params;
	const { locale } = params;

	setStaticParamsLocale(locale);
	const data = await getHomePageData(locale);
	const route = await getRoutes(locale, [], data?.documentId);

	if (!data) {
		notFound();
	}

	return (
		//@ts-ignore
		<ClientPageProviders pageData={data} route={route}>
			<ClientHomePage />
		</ClientPageProviders>
	);
};
// ~~~~ End 🌎 Render ~~~~ //

export default HomePage;
