'use client';

import FlexContentComponents from '~/src/components/main/FlexContent';
import HeroHome from '~/src/components/main/hero/Home';
import { usePageContext } from '~/src/contexts/PageDataContext';

const ClientHomePage = () => {
	const { hero, flexContent } = usePageContext();

	return (
		<>
			{hero.length > 0 && <HeroHome {...hero[0]} />}
			{flexContent && <FlexContentComponents components={flexContent} />}
		</>
	);
};

export default ClientHomePage;
