import { Svg } from '~/types/schemas';

interface SvgProps extends Svg {
	isLeftAligned?: boolean;
}

const ArrowsSvg = ({ className, isLeftAligned = true }: SvgProps) => {
	if (!isLeftAligned) {
		return (
			<svg width="615" height="701" viewBox="0 0 615 701" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
				<path
					opacity="0.1"
					d="M307.52 176.141V263.347L461.127 352.104L615 263.197V175.991L461.127 264.541L307.52 176.141Z"
					fill="url(#paint0_linear_385_71625)"
				/>
				<path
					opacity="0.1"
					d="M307.48 175.963V88.7516L153.867 0L0 88.9017V176.113L153.867 87.563L307.48 175.963Z"
					fill="url(#paint1_linear_385_71625)"
				/>
				<path
					opacity="0.1"
					d="M307.52 1.6388V88.844L461.127 177.601L615 88.694V1.48877L461.127 90.0384L307.52 1.6388Z"
					fill="url(#paint2_linear_385_71625)"
				/>
				<path
					opacity="0.1"
					d="M307.52 350.558V263.352L153.907 174.601L0.0402832 263.502V350.708L153.907 262.158L307.52 350.558Z"
					fill="url(#paint3_linear_385_71625)"
				/>
				<path
					opacity="0.1"
					d="M307.52 525.038V612.243L461.127 701L615 612.099V524.888L461.127 613.437L307.52 525.038Z"
					fill="url(#paint4_linear_385_71625)"
				/>
				<path
					opacity="0.1"
					d="M307.48 524.859V437.653L153.867 348.896L0 437.803V525.009L153.867 436.459L307.48 524.859Z"
					fill="url(#paint5_linear_385_71625)"
				/>
				<path
					opacity="0.1"
					d="M307.52 350.54V437.745L461.127 526.497L615 437.595V350.39L461.127 438.94L307.52 350.54Z"
					fill="url(#paint6_linear_385_71625)"
				/>
				<path
					opacity="0.1"
					d="M307.52 699.459V612.248L153.907 523.497L0.0402832 612.398V699.603L153.907 611.06L307.52 699.459Z"
					fill="url(#paint7_linear_385_71625)"
				/>
				<defs>
					<linearGradient id="paint0_linear_385_71625" x1="328.11" y1="352.923" x2="706.711" y2="-25.3952" gradientUnits="userSpaceOnUse">
						<stop stopColor="#009933" />
						<stop offset="1" stopColor="#0F0F3B" />
					</linearGradient>
					<linearGradient id="paint1_linear_385_71625" x1="286.89" y1="-0.813602" x2="-91.7165" y2="377.499" gradientUnits="userSpaceOnUse">
						<stop stopColor="#009933" />
						<stop offset="1" stopColor="#0F0F3B" />
					</linearGradient>
					<linearGradient id="paint2_linear_385_71625" x1="328.11" y1="178.421" x2="706.711" y2="-199.892" gradientUnits="userSpaceOnUse">
						<stop stopColor="#009933" />
						<stop offset="1" stopColor="#0F0F3B" />
					</linearGradient>
					<linearGradient id="paint3_linear_385_71625" x1="286.925" y1="173.781" x2="-91.6763" y2="552.094" gradientUnits="userSpaceOnUse">
						<stop stopColor="#009933" />
						<stop offset="1" stopColor="#0F0F3B" />
					</linearGradient>
					<linearGradient id="paint4_linear_385_71625" x1="328.11" y1="701.82" x2="706.711" y2="323.507" gradientUnits="userSpaceOnUse">
						<stop stopColor="#009933" />
						<stop offset="1" stopColor="#0F0F3B" />
					</linearGradient>
					<linearGradient id="paint5_linear_385_71625" x1="286.89" y1="348.082" x2="-91.7165" y2="726.395" gradientUnits="userSpaceOnUse">
						<stop stopColor="#009933" />
						<stop offset="1" stopColor="#0F0F3B" />
					</linearGradient>
					<linearGradient id="paint6_linear_385_71625" x1="328.11" y1="527.316" x2="706.711" y2="149.004" gradientUnits="userSpaceOnUse">
						<stop stopColor="#009933" />
						<stop offset="1" stopColor="#0F0F3B" />
					</linearGradient>
					<linearGradient id="paint7_linear_385_71625" x1="286.925" y1="522.677" x2="-91.6762" y2="900.996" gradientUnits="userSpaceOnUse">
						<stop stopColor="#009933" />
						<stop offset="1" stopColor="#0F0F3B" />
					</linearGradient>
				</defs>
			</svg>
		);
	}

	return (
		<svg width="489" height="701" viewBox="0 0 489 701" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
			<path
				opacity="0.1"
				d="M307.521 176.141V263.347L461.128 352.104L615 263.197V175.991L461.128 264.541L307.521 176.141Z"
				fill="url(#paint0_linear_572_3706)"
			/>
			<path
				opacity="0.1"
				d="M307.48 175.963V88.7516L153.867 0L0 88.9017V176.113L153.867 87.563L307.48 175.963Z"
				fill="url(#paint1_linear_572_3706)"
			/>
			<path
				opacity="0.1"
				d="M307.521 1.6388V88.844L461.128 177.601L615 88.694V1.48877L461.128 90.0384L307.521 1.6388Z"
				fill="url(#paint2_linear_572_3706)"
			/>
			<path
				opacity="0.1"
				d="M307.52 350.558V263.352L153.907 174.601L0.0405273 263.502V350.708L153.907 262.158L307.52 350.558Z"
				fill="url(#paint3_linear_572_3706)"
			/>
			<path
				opacity="0.1"
				d="M307.521 525.037V612.243L461.128 701L615 612.098V524.887L461.128 613.437L307.521 525.037Z"
				fill="url(#paint4_linear_572_3706)"
			/>
			<path
				opacity="0.1"
				d="M307.48 524.859V437.653L153.867 348.896L0 437.803V525.009L153.867 436.459L307.48 524.859Z"
				fill="url(#paint5_linear_572_3706)"
			/>
			<path
				opacity="0.1"
				d="M307.521 350.54V437.746L461.128 526.497L615 437.596V350.39L461.128 438.94L307.521 350.54Z"
				fill="url(#paint6_linear_572_3706)"
			/>
			<path
				opacity="0.1"
				d="M307.52 699.459V612.248L153.907 523.497L0.0405273 612.399V699.604L153.907 611.06L307.52 699.459Z"
				fill="url(#paint7_linear_572_3706)"
			/>
			<defs>
				<linearGradient id="paint0_linear_572_3706" x1="328.11" y1="352.923" x2="706.711" y2="-25.3952" gradientUnits="userSpaceOnUse">
					<stop stopColor="#009933" />
					<stop offset="1" stopColor="#0F0F3B" />
				</linearGradient>
				<linearGradient id="paint1_linear_572_3706" x1="286.89" y1="-0.813602" x2="-91.7165" y2="377.499" gradientUnits="userSpaceOnUse">
					<stop stopColor="#009933" />
					<stop offset="1" stopColor="#0F0F3B" />
				</linearGradient>
				<linearGradient id="paint2_linear_572_3706" x1="328.11" y1="178.421" x2="706.711" y2="-199.892" gradientUnits="userSpaceOnUse">
					<stop stopColor="#009933" />
					<stop offset="1" stopColor="#0F0F3B" />
				</linearGradient>
				<linearGradient id="paint3_linear_572_3706" x1="286.925" y1="173.781" x2="-91.676" y2="552.094" gradientUnits="userSpaceOnUse">
					<stop stopColor="#009933" />
					<stop offset="1" stopColor="#0F0F3B" />
				</linearGradient>
				<linearGradient id="paint4_linear_572_3706" x1="328.11" y1="701.819" x2="706.711" y2="323.507" gradientUnits="userSpaceOnUse">
					<stop stopColor="#009933" />
					<stop offset="1" stopColor="#0F0F3B" />
				</linearGradient>
				<linearGradient id="paint5_linear_572_3706" x1="286.89" y1="348.082" x2="-91.7165" y2="726.395" gradientUnits="userSpaceOnUse">
					<stop stopColor="#009933" />
					<stop offset="1" stopColor="#0F0F3B" />
				</linearGradient>
				<linearGradient id="paint6_linear_572_3706" x1="328.11" y1="527.317" x2="706.711" y2="149.004" gradientUnits="userSpaceOnUse">
					<stop stopColor="#009933" />
					<stop offset="1" stopColor="#0F0F3B" />
				</linearGradient>
				<linearGradient id="paint7_linear_572_3706" x1="286.925" y1="522.677" x2="-91.676" y2="900.996" gradientUnits="userSpaceOnUse">
					<stop stopColor="#009933" />
					<stop offset="1" stopColor="#0F0F3B" />
				</linearGradient>
			</defs>
		</svg>
	);
};

export default ArrowsSvg;
