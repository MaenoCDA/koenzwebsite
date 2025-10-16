/**
 * @file Cta.tsx
 * @summary CTA Flex component
 */
import { Cta as CtaBlockProps, Image, Paragraph } from 'types/schemas/main';
import ArrowsSvg from '../shapes/Arrows';
import Button from '@/components/input/Button';
import ImageWrapper from '@/components/layout/ImageWrapper';
import Heading from '@/components/typography/Heading';

// add custom typings here
interface CtaProps extends CtaBlockProps {}

const CtaBlock = ({ heading, text, buttons, image }: Paragraph & { image?: Image }) => {
	return (
		<div className="bg-glass relative isolate grid rounded p-4 pb-16 md:grid-cols-2 md:pt-10 lg:p-0">
			<div className="absolute -z-10 hidden size-full overflow-hidden lg:block">
				<ArrowsSvg className="absolute -right-16 top-1/2 h-[200%] -translate-y-1/2" />
			</div>
			<div className="relative max-md:px-8 md:pr-4 lg:-translate-y-10 lg:pr-16">
				{image && (
					<ImageWrapper
						image={image}
						classNames={{
							wrapper: 'w-full max-md:h-full max-md:-translate-y-20 ',
							image: 'object-contain w-full h-full !static',
						}}
					/>
				)}
			</div>
			<div className="grid items-center max-md:-mt-16 lg:p-20 lg:pl-0">
				{heading && <Heading {...heading} classNames={{ wrapper: 'text-balance', title: 'virtual-h3' }} />}
				<div className="wysiwyg" dangerouslySetInnerHTML={{ __html: text }} />
				{buttons.length > 0 && (
					<div className="button-wrapper">
						{buttons.map((button, index) => (
							<Button key={`button-${button.id}`} target={button.link.target} href={button.link.href}>
								{button.label}
							</Button>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

// ~~~~ Begin 🌎 Render ~~~~ //
const Cta = ({ ctaBlock, image }: CtaProps) => {
	if (!ctaBlock || !image) {
		return <></>;
	}

	return (
		<div className="component-margin container">
			<div className="row">
				<div className="col-span-full">
					<CtaBlock {...ctaBlock} image={image} />
				</div>
			</div>
		</div>
	);
};
// ~~~~ End 🌎 Render ~~~~ //

export default Cta;
