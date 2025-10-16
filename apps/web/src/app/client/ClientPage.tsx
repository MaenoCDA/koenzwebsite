'use client';

import { PropsWithChildren } from 'react';
import FlexContentComponents from '~/src/components/main/FlexContent';
import Hero from '~/src/components/main/Hero';
import StaticContentComponents from '~/src/components/main/StaticContent';
import { usePageContext } from '~/src/contexts/PageDataContext';

const ClientSinglePage = ({ children }: PropsWithChildren) => {
	const { hero, flexContent, preFlex, postFlex } = usePageContext();

	return (
		<>
			{hero && hero.map((record) => <Hero key={record.id} {...record} />)}
			{preFlex && <StaticContentComponents components={preFlex} />}
			{flexContent && <FlexContentComponents components={flexContent} />}
			{postFlex && <StaticContentComponents components={postFlex} />}
			{children}
		</>
	);
};

export default ClientSinglePage;
