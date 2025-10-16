import Button, { ButtonColor } from '../../input/Button';
import { Hero } from '~/types/schemas/hero';
import { classNamesTailwind } from '~/utils/helpers';

interface VideoProps extends Hero {
	className?: string;
	video: string;
}

const HeroVideo = ({ video, className, ...props }: VideoProps) => {
	const { title, text, buttons } = props;

	if (!video) {
		return <></>;
	}

	return (
		<div className={classNamesTailwind('relative isolate flex min-h-screen', className)}>
			<div className="absolute bottom-0 left-0 top-[20%] -z-10 w-full bg-gradient-to-b from-transparent to-primary-900" />
			<video width="1920" height="1080" preload="none" autoPlay muted loop className="absolute -z-20 size-full object-cover object-center">
				<source src={video} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<div className="container flex flex-col justify-end py-24">
				<div className="row">
					<div className="col-span-full md:col-span-8 xl:col-span-5">
						{title && <h1 className="max-md:uppercase">{title}</h1>}
						{text && <div dangerouslySetInnerHTML={{ __html: text }} className="prose text-lg md:text-3xl" />}
						{buttons.length > 0 && (
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

export default HeroVideo;
