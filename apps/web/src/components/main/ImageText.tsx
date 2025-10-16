/**
 * @file ImageText.tsx
 * @summary ImageText Flex component
 * @todo Implement ImageText
 *
 */
import Button, { ButtonColor } from '../input/Button';
import ImageWrapper from '../layout/ImageWrapper';
import Heading from '../typography/Heading';
import ArrowsSvg from '../shapes/Arrows';
import ParallaxWrapper from '../layout/ParallaxWrapper';
import { classNamesTailwind } from '~/utils/helpers';
import { ImageTextContent } from '~/types/schemas/main';

interface ImageTextContentProps extends ImageTextContent {}

// ~~~~ Begin 🌎 Render ~~~~ //
const ImageText = ({ ...props }: ImageTextContentProps) => {
	if (!props) {
		return <></>;
	}

	const { textLeft = false, image, paragraph } = props;

	return (
		<div className="relative isolate overflow-x-clip">
			<ParallaxWrapper
				className={classNamesTailwind('pointer-events-none absolute top-1/3 -z-10 hidden lg:block', textLeft ? 'right-0' : 'left-12')}
			>
				<ArrowsSvg isLeftAligned={textLeft} />
			</ParallaxWrapper>

			<div className="component-margin container">
				<div className="row">
					<div
						className={classNamesTailwind('order-first col-span-full grid items-center max-lg:mb-8 lg:col-span-6', {
							'lg:order-first': textLeft,
							'lg:order-2 lg:col-start-7': !textLeft,
						})}
					>
						<div>
							<Heading {...paragraph.heading} />
							<div className="wysiwyg" dangerouslySetInnerHTML={{ __html: paragraph.text }} />
							{paragraph.buttons.length > 0 && (
								<div className="button-wrapper">
									{paragraph.buttons.map((button, index) => (
										<Button
											key={`button-${index}`}
											target={button.link.target}
											href={button.link.href}
											color={index !== 0 ? ButtonColor.Secondary : undefined}
										>
											{button.label}
										</Button>
									))}
								</div>
							)}
						</div>
					</div>

					<div
						className={classNamesTailwind('col-span-full flex lg:col-span-5', {
							'lg:order-2 lg:col-start-8': textLeft,
							'lg:order-first': !textLeft,
						})}
					>
						<div className="relative w-full overflow-hidden">
							<ImageWrapper image={image} classNames={{ wrapper: 'h-full rounded-xl overflow-hidden', image: 'object-cover !static' }} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
// ~~~~ End 🌎 Render ~~~~ /

export default ImageText;
