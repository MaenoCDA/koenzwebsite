import { Svg } from '~/types/schemas';
import { classNamesTailwind } from '~/utils/helpers';

const Mail = ({ className, width, height }: Svg) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width ?? 100}
			height={height ?? 100}
			viewBox="0 0 23 22"
			fill="none"
			className={classNamesTailwind('fill-current', className)}
		>
			<g clip-path="url(#clip0_1081_15405)">
				<path d="M2.3345 3.125C1.16212 3.125 0.210938 4.02131 0.210938 5.12605C0.210938 5.75555 0.525048 6.34753 1.06036 6.7269L10.6872 13.5305C11.1915 13.8848 11.8817 13.8848 12.3861 13.5305L22.0129 6.7269C22.5482 6.34753 22.8623 5.75555 22.8623 5.12605C22.8623 4.02131 21.9111 3.125 20.7388 3.125H2.3345ZM0.210938 7.79412V16.4654C0.210938 17.937 1.48065 19.1334 3.04236 19.1334H20.0309C21.5926 19.1334 22.8623 17.937 22.8623 16.4654V7.79412L13.2355 14.5977C12.2268 15.3106 10.8465 15.3106 9.83777 14.5977L0.210938 7.79412Z" />
			</g>
			<defs>
				<clipPath id="clip0_1081_15405">
					<rect width="22.6514" height="21.3446" transform="translate(0.211914 0.453125)" />
				</clipPath>
			</defs>
		</svg>
	);
};

export default Mail;
