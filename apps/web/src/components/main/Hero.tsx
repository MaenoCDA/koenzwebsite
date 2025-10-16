/**
 * @file Hero.tsx
 * @summary Hero component
 *
 */
import dynamic from 'next/dynamic';
import { useContext } from 'react';
import { DEBUG_MODE } from '~/config';
import RouteContext from '~/src/contexts/RouteContext';
import { Hero as HeroProps } from '~/types/schemas/hero';

const HeroHome = dynamic(() => import('./hero/Home'));
const HeroText = dynamic(() => import('./hero/Text'));

// ~~~~ Begin 🌎 Render ~~~~ //
const Hero = (props: HeroProps) => {
	const { isHome } = useContext(RouteContext);

	if (DEBUG_MODE) {
		console.info(`🦸‍♂️ Hero component: %c${props.__component}`, `color:green; font-weight:bold`, props);
	}

	return isHome ? <HeroHome {...props} /> : <HeroText {...props} />;
};
// ~~~~ End 🌎 Render ~~~~ //

export default Hero;
