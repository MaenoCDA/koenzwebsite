import { PropsWithChildren } from 'react';
import Heading, { HeadingProps } from '../../typography/Heading';
import Button, { ButtonColor, ButtonProps } from '../../input/Button';

const renderHeading = (heading?: HeadingProps, text?: string, button?: ButtonProps) => {
	if (!heading) {
		return null;
	}

	return (
		<div className="row mb-8">
			<div className="col-span-full flex items-center justify-between">
				<Heading {...heading} />
				{button && (
					<Button color={ButtonColor.Secondary} {...button}>
						{button.label}
					</Button>
				)}
			</div>
			<div className="col-span-full lg:col-span-8">{text && <div className="wysiwyg" dangerouslySetInnerHTML={{ __html: text }} />}</div>
		</div>
	);
};

const TeaserWrapper = ({
	heading,
	text,
	button,
	children,
}: PropsWithChildren<{ heading?: HeadingProps; text?: string; button?: ButtonProps }>) => {
	return (
		<div className="component-margin container">
			{renderHeading(heading, text, button)}
			<div className="row gap-y-5">{children}</div>
		</div>
	);
};

export default TeaserWrapper;
