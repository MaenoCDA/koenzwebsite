// import { getScopedI18n } from '~/src/locales/server';
// import ClientSearchPage from '~/src/app/client/ClientSearchPage';
// import { fetchGeneralMetadata } from '~/utils/seo';

// export const dynamic = 'force-dynamic';

// export async function generateMetadata({ locale }: { locale: string }) {
// 	const SEO = await fetchGeneralMetadata(locale);
// 	const scopedT = await getScopedI18n('search.seo');

// 	return {
// 		title: `${scopedT('metaTitle')} ${SEO?.affixMetaTitle}`,
// 		description: scopedT('metaDescription'),
// 	};
// }

// const Page = async (props: {
// 	params: Promise<{ locale: string }>;
// 	searchParams?: Promise<{
// 		query?: string;
// 		page?: string;
// 	}>;
// }) => {
// 	const searchParams = await props.searchParams;

// 	if (!process.env.NEXT_PUBLIC_MEILISEARCH_HOST! || !process.env.NEXT_PUBLIC_MEILISEARCH_API_KEY) {
// 		throw new Error('MEILISEARCH_URL and MEILISEARCH_API_KEY must be set in the environment');
// 	}

// 	return <ClientSearchPage {...searchParams} />;
// };

// export default Page;
