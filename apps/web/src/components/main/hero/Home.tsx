/**
 * @file Home.tsx
 * @summary Hero Home component for the Home page
 */
import dynamic from 'next/dynamic';
import { Hero } from '~/types/schemas/hero';

const HeroImage = dynamic(() => import('./Image'));
const HeroVideo = dynamic(() => import('./Video'));

const HeroHome = (props: Hero) => {
	const mediaType = props.image?.mime;

	return mediaType?.includes('video') ? <HeroVideo video={props.image?.url || ''} {...props} /> : <HeroImage {...props} />;
};

export default HeroHome;
