/**
 * @file Quote.tsx
 * @summary Quote Flex component
 *
 */

import { Quote as QuoteProps } from 'types/schemas/main';
import ImageWrapper from '../layout/ImageWrapper';
import ArrowsSvg from '../shapes/Arrows';
import ParallaxWrapper from '../layout/ParallaxWrapper';
import { useScopedI18n } from '@/locales/client';
import { classNamesTailwind } from '~/utils/helpers';

interface QuoteContentProps extends QuoteProps {}

// ~~~~ Begin 🌎 Render ~~~~ //
const Quote = ({ ...props }: QuoteContentProps) => {
	const t = useScopedI18n('testimonials');

	if (!props) {
		return <></>;
	}

	const { quote, author, authorDescription, image } = props;

	if (!image.url) {
		return <></>;
	}

	return (
		<div className="relative isolate overflow-x-clip">
			<ParallaxWrapper className={classNamesTailwind('pointer-events-none absolute -top-24 left-12 -z-10 hidden lg:block')}>
				<ArrowsSvg isLeftAligned={false} />
			</ParallaxWrapper>
			<div className="component-margin container grid gap-8 md:my-40 md:grid-cols-[360px_1fr] lg:gap-16">
				<div className="relative max-md:grid max-md:grid-rows-[20%_80%] md:self-center">
					<div className="bg-glass rounded max-md:row-start-2 md:h-[300px]" />
					<ImageWrapper
						image={image}
						classNames={{
							wrapper: 'md:static max-md:justify-self-center',
							image: 'md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2 md:max-w-[90%] md:max-h-[140%] object-contain',
						}}
						fill={false}
						width={image.width}
						height={image.height}
					/>
				</div>
				<div className="self-center">
					<div className="flex flex-col">
						<blockquote className="virtual-h3">
							<p>"{quote}"</p>
						</blockquote>
						<p className="text-lg font-bold">{author}</p>
						<p>{authorDescription}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
// ~~~~ End 🌎 Render ~~~~ //

export default Quote;
