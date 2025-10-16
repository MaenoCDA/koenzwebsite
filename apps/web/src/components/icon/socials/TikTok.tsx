import { Svg } from '~/types/schemas';
import { classNamesTailwind } from '~/utils/helpers';

const TikTok = ({ className, width, height }: Svg) => {
	return (
		<svg
			className={classNamesTailwind('fill-current', className)}
			x="0px"
			y="0px"
			width={width ?? 100}
			height={height ?? 100}
			viewBox="0 0 24 24"
		>
			<path
				fill="currentColor"
				d="M 6 3 C 4.3550302 3 3 4.3550302 3 6 L 3 18 C 3 19.64497 4.3550302 21 6 21 L 18 21 C 19.64497 21 21 19.64497 21 18 L 21 6 C 21 4.3550302 19.64497 3 18 3 L 6 3 z M 12 7 L 14 7 C 14 8.005 15.471 9 16 9 L 16 11 C 15.395 11 14.668 10.734156 14 10.285156 L 14 14 C 14 15.654 12.654 17 11 17 C 9.346 17 8 15.654 8 14 C 8 12.346 9.346 11 11 11 L 11 13 C 10.448 13 10 13.449 10 14 C 10 14.551 10.448 15 11 15 C 11.552 15 12 14.551 12 14 L 12 7 z"
			></path>
		</svg>
	);
};

export default TikTok;
