import Button, { ButtonColor } from '../../input/Button';
import Breadcrumb from '../../navigation/Breadcrumb';
import ArrowsSvg from '../../shapes/Arrows';
import BoldTitle from '../../typography/BoldTitle';
import { Hero } from '~/types/schemas/hero';
import { classNamesTailwind } from '~/utils/helpers';
import { Tag } from '~/types/schemas';

interface TextProps extends Hero {
	className?: string;
	tags?: Tag[];
}

const HeroText = ({ className, tags, ...props }: TextProps) => {
	const { title, text, buttons } = props;

	return (
		<div className={classNamesTailwind('bg-glass relative isolate overflow-hidden pb-12 pt-28 lg:pt-32', className)}>
			<ArrowsSvg className="absolute right-0 top-0 -z-10 hidden lg:block" />
			<div className="container mb-6 lg:mb-10">
				<Breadcrumb />
			</div>

			<div className="container flex flex-col justify-end">
				<div className="row">
					<div className="col-span-full lg:col-span-8">
						{title && <BoldTitle title={title} as="h1" />}
						{tags && (
							<ul className="order-first mb-3 flex flex-wrap gap-2 font-bold">
								{tags.map((tag, index) => {
									return (
										<li key={index} className="bg-glass px-4 py-1">
											{tag.title}
										</li>
									);
								})}
							</ul>
						)}
						{text && <div dangerouslySetInnerHTML={{ __html: text }} className="prose text-lg lg:text-3xl" />}
						{buttons && buttons.length > 0 && (
							<div className="button-wrapper">
								{buttons.map((button, index) => (
									<Button
										key={`button-${index}`}
										target={button.link.target}
										href={button.link.href || ''}
										color={index === 0 ? ButtonColor.Primary : ButtonColor.Secondary}
									>
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
};

export default HeroText;
