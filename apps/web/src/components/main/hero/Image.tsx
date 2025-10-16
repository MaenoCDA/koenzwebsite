import ImageWrapper from '../../layout/ImageWrapper';
import Button from '../../input/Button';
import { classNamesTailwind } from '~/utils/helpers';
import { Hero } from '~/types/schemas/hero';

interface HeroProps extends Hero {
	variant?: 'full' | 'split';
}

const HeroImage = ({ ...props }: HeroProps) => {
	return (
		<div className="relative w-full">
			<HeroFull {...props} />
		</div>
	);
};

const HeroFull = ({ title, image, text, buttons }: HeroProps) => {
	return (
		<div
			className={classNamesTailwind('relative flex flex-col  px-4', {
				'component-margin mx-auto container glass': !image,
				'min-h-screen items-center justify-center text-center': !!image,
			})}
		>
			{image && (
				<ImageWrapper image={image} priority={true} loading="eager" classNames={{ wrapper: 'absolute inset-0', image: 'object-cover' }} />
			)}
			<div className="relative z-10 max-w-3xl space-y-4">
				<h1 className="text-5xl text-white">{title}</h1>
				<div className="wysiwyg text-white md:text-xl" dangerouslySetInnerHTML={{ __html: text }} />
				{buttons.length > 0 && RenderButtons(buttons)}
			</div>
		</div>
	);
};

const RenderButtons = (buttons: Hero['buttons']) => {
	return (
		<div className="flex flex-col gap-4 sm:flex-row sm:gap-2">
			{buttons.map((button, index) => (
				<Button key={`button-${index}`} target={button.link?.target || '_self'} href={button.link?.href || ''}>
					{button.label}
				</Button>
			))}
		</div>
	);
};

export default HeroImage;
