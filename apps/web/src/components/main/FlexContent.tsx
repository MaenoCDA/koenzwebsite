'use client';

import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { DEBUG_MODE } from '~/config';
import { notNull } from '~/utils/helpers';

import { FlexContent as FlexContentInterface } from '~/types/schemas/main';

type ComponentFunction<T extends FlexContentInterface> = (props: T) => ReactNode;

/**
 * Flex content components + mapping
 */
const Text = dynamic(() => import('./Text'));
const ImageText = dynamic(() => import('./ImageText'));
const Image = dynamic(() => import('./Image'));
const Video = dynamic(() => import('./Video'));
const TeaserDynamic = dynamic(() => import('./TeaserDynamic'));
const TeaserManual = dynamic(() => import('./TeaserManual'));
const TeaserLatest = dynamic(() => import('./TeaserLatest'));
const Cta = dynamic(() => import('./Cta'));
const Quote = dynamic(() => import('./Quote'));
const Accordion = dynamic(() => import('./Accordion'));
const Brands = dynamic(() => import('./Brands'));
const NewsletterForm = dynamic(() => import('./NewsletterForm'));

const flexContentMap = new Map<string, ComponentFunction<FlexContentInterface>>([
	['content.accordion', Accordion as ComponentFunction<FlexContentInterface>],
	['content.image-text', ImageText as ComponentFunction<FlexContentInterface>],
	['content.text', Text as ComponentFunction<FlexContentInterface>],
	['content.image', Image as ComponentFunction<FlexContentInterface>],
	['content.cta', Cta as ComponentFunction<FlexContentInterface>],
	['content.quote', Quote as ComponentFunction<FlexContentInterface>],
	['content.video', Video as ComponentFunction<FlexContentInterface>],
	['teaser.dynamic-teaser', TeaserDynamic as ComponentFunction<FlexContentInterface>],
	['teaser.manual-teaser', TeaserManual as ComponentFunction<FlexContentInterface>],
	['teaser.latest-teaser', TeaserLatest as ComponentFunction<FlexContentInterface>],
	['content.brands', Brands as ComponentFunction<FlexContentInterface>],
	['form.newsletter', NewsletterForm as ComponentFunction<FlexContentInterface>],
]);

// ~~~~ Begin 🌎 Render ~~~~ //
const FlexContentComponent = ({ id, component }: { id: number; component: FlexContentInterface }): ReactNode => {
	const Component = flexContentMap.get(component.__component);

	if (!Component) {
		if (DEBUG_MODE) {
			console.error(`❌ FlexContentComponent: %c${component.__component} not found`, `color:red`);
		}
		return <></>;
	}

	if (DEBUG_MODE) {
		console.info(`📦 FlexContentComponent: %c${component.__component}`, `color:green; font-weight:bold`, component);
	}

	return (
		<div id={`${component.__component.split('.').pop()}-${id}`}>
			<Component {...component} />
		</div>
	);
};

const FlexContentComponents = ({ components }: { components: FlexContentInterface[] }): ReactNode => {
	return (
		<>
			{components.filter(notNull).map((component, index) => (
				<FlexContentComponent key={index} id={index} component={component} />
			))}
		</>
	);
};
// ~~~~ End 🌎 Render ~~~~ //

export default FlexContentComponents;
