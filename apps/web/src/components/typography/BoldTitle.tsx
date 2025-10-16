import { ElementType } from 'react';
import { classNamesTailwind } from '~/utils/helpers';

export interface BoldTitleProps {
	title?: string;
	as?: ElementType;
	className?: string;
}

const BoldTitle = ({ as: Tag = 'h3', ...props }: BoldTitleProps) => {
	if (!props.title) {
		return null;
	}

	return <Tag className={props.className} dangerouslySetInnerHTML={{ __html: props.title }} />;
};

export default BoldTitle;
