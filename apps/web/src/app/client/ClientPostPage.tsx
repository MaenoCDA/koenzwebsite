'use client';

import ClientSinglePage from './ClientPage';
import FlexContentComponents from '~/src/components/main/FlexContent';
import Hero from '~/src/components/main/Hero';
import StaticContentComponents from '~/src/components/main/StaticContent';
import Teaser from '~/src/components/main/teaser/Teaser';
import { usePageContext } from '~/src/contexts/PageDataContext';

const ClientPostPage = () => {
	const { hero, flexContent, preFlex, postFlex, latest } = usePageContext();

	return <ClientSinglePage>{latest && latest.map((record, index) => <Teaser key={index} title={record.title} />)}</ClientSinglePage>;
};

export default ClientPostPage;
