import React, { ElementType } from 'react';
import BoldTitle from './BoldTitle';
import { classNamesTailwind } from '~/utils/helpers';

export interface HeadingProps {
	title?: string;
	type?: ElementType | null;
	subtitle?: string;
	classNames?: {
		wrapper?: string;
		title?: string;
		subtitle?: string;
	};
}

const Heading = ({ ...props }: HeadingProps) => {
	const { title, type, subtitle, classNames } = props;

	return (
		<div className={classNamesTailwind('flex flex-col', classNames?.wrapper)}>
			<BoldTitle className={classNamesTailwind(classNames?.title)} title={title} as={type || 'h2'} />
			{subtitle && <p className={classNamesTailwind('subtitle order-first', classNames?.subtitle)}>{subtitle}</p>}
		</div>
	);
};

export default Heading;
