import { Brands as BrandCarouselProps } from 'types/schemas/main';
import Marquee from 'react-fast-marquee';
import ImageWrapper from '@/components/layout/ImageWrapper';

interface BrandsProps extends BrandCarouselProps {}

const Brands = ({ className, logos }: BrandsProps) => {
	if (!logos || !(logos.length > 0)) {
		return null;
	}

	return (
		<div className="component-margin container overflow-hidden [mask-image:linear-gradient(to_right,transparent_5%,black_10%,black_90%,transparent_95%)]">
			<div className="row">
				<div className="col-span-full">
					<div className=" relative isolate w-full">
						<Marquee autoFill>
							<div className="flex w-full items-center gap-16 px-8">
								{logos.map((logo, index) => (
									<div className="relative block" key={index}>
										{logo && (
											<ImageWrapper
												image={logo}
												fill={false}
												width={250}
												height={150}
												classNames={{ wrapper: '', image: 'max-md:max-w-[180px] max-h-[50px] md:max-h-[70px] object-contain' }}
											/>
										)}
									</div>
								))}
							</div>
						</Marquee>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Brands;
