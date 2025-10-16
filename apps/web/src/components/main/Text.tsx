/**
 * @file Text.tsx
 * @summary Text Flex component
 */
import Heading from '../typography/Heading';
import Button from '../input/Button';
import ArrowsSvg from '../shapes/Arrows';
import { TextContent } from '~/types/schemas/main';
import { classNamesTailwind } from '~/utils/helpers';

// add custom typings here
interface TextContentProps extends TextContent {}

// ~~~~ Begin 🌎 Render ~~~~ //
const Text = ({ ...props }: TextContentProps) => {
	if (!props) {
		return <></>;
	}

	const { hasBackground, isColumnView, paragraph } = props;
	const { heading, text, buttons } = paragraph;

	if (hasBackground) {
		return (
			<div className="component-margin container">
				<div className="row">
					<div
						className={classNamesTailwind(
							'bg-glass relative isolate col-span-full rounded p-4  pb-16 md:pt-10 lg:p-20',
							isColumnView ? 'grid md:grid-cols-2' : 'md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3'
						)}
					>
						<div className="absolute inset-0 -z-10 hidden size-full overflow-hidden lg:block">
							<ArrowsSvg className="absolute -right-16 top-1/2 h-[200%] -translate-y-1/2" />
						</div>
						<Heading
							{...heading}
							classNames={{
								wrapper: ``,
							}}
						/>
						<div
							className={classNamesTailwind({ 'col-span-full md:col-span-10 lg:col-span-8 md:col-start-2 lg:col-start-3': !isColumnView })}
						>
							<div className="wysiwyg" dangerouslySetInnerHTML={{ __html: text }} />
							{buttons.length > 0 && (
								<div className="button-wrapper">
									{buttons.map((button, index) => (
										<Button key={`button-${index}`} target={button.link.target} href={button.link.href}>
											{button.label}
										</Button>
									))}
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="component-margin container">
			<div className="row">
				<Heading
					{...heading}
					classNames={{
						wrapper: `col-span-full lg:col-start-3 ${isColumnView ? 'lg:col-span-4 md:col-span-6' : 'lg:col-span-8'}`,
					}}
				/>
				<div
					className={classNamesTailwind('col-span-full', {
						'md:col-span-6 lg:col-span-4': isColumnView,
						'lg:col-span-8 lg:col-start-3': !isColumnView,
					})}
				>
					<div className="wysiwyg" dangerouslySetInnerHTML={{ __html: text }} />
					{buttons.length > 0 && (
						<div className="button-wrapper">
							{buttons.map((button, index) => (
								<Button key={`button-${index}`} target={button.link.target} href={button.link.href}>
									{button.label}
								</Button>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
// ~~~~ End 🌎 Render ~~~~ //

export default Text;
