'use client';

import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { DEBUG_MODE } from '~/config';
import { notNull } from '~/utils/helpers';
import { Resources as ResourceType } from '~/types/schemas/main';

type ComponentFunction<T> = (props: T) => ReactNode;

/**
 * Static content components + mapping
 */
const Resources = dynamic(() => import('./Resources'));

const staticContentMap = new Map<string, ComponentFunction<any>>([['resources', Resources as ComponentFunction<ResourceType>]]);

// ~~~~ Begin 🌎 Render ~~~~ //

const StaticContentComponent = ({ id, component }: { id: number; component: any }): ReactNode => {
	const Component = staticContentMap.get(component.__component);

	if (!Component) {
		if (DEBUG_MODE) {
			console.error(`❌ StaticContentComponent: %c${component.__component} not found`, `color:red`);
		}
		return <></>;
	}

	if (DEBUG_MODE) {
		console.info(`📦 StaticContentComponent: %c${component.__component}`, `color:green; font-weight:bold`, component);
	}

	return (
		<div id={`${component.__component.split('.').pop()}-${id}`}>
			<Component {...component} />
		</div>
	);
};

const StaticContentComponents = ({ components }: { components: any[] }): ReactNode => {
	return (
		<>
			{components.filter(notNull).map((component, index) => (
				<StaticContentComponent key={index} id={index} component={component} />
			))}
		</>
	);
};
// ~~~~ End 🌎 Render ~~~~ //

export default StaticContentComponents;
