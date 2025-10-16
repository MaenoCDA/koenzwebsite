import ClientNotFound from '../client/ClientNotFound';
import { getCurrentLocale, getScopedI18n } from '@/locales/server';
import { fetchGeneralMetadata } from '~/utils/seo';

export async function generateMetadata() {
	const locale = await getCurrentLocale();
	const scopedT = await getScopedI18n('notFound.seo');
	const SEO = await fetchGeneralMetadata(locale);

	return {
		title: `${scopedT('metaTitle')} ${SEO?.affixMetaTitle}`,
		description: scopedT('metaDescription'),
	};
}

export default function NotFoundPage() {
	return <ClientNotFound />;
}
