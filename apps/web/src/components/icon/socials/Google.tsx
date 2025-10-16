import { Svg } from '~/types/schemas';
import { classNamesTailwind } from '~/utils/helpers';

const Google = ({ className, width, height }: Svg) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width ?? 100}
			height={height ?? 100}
			className={classNamesTailwind('fill-current', className)}
			viewBox="0 0 31 27"
		>
			<g clip-path="url(#clip0_1081_15411)">
				<path d="M18.7379 12.3736C18.8266 12.8684 18.8898 13.3631 18.8898 14.0049C18.8898 19.6075 15.3329 23.5787 9.97855 23.5787C4.85207 23.5787 0.700195 19.193 0.700195 13.7776C0.700195 8.36229 4.85207 3.97656 9.97855 3.97656C12.4849 3.97656 14.5734 4.93926 16.1936 6.54383L13.6747 9.09773C12.9911 8.40241 11.7886 7.58678 9.97855 7.58678C6.81405 7.58678 4.23177 10.3546 4.23177 13.7776C4.23177 17.2007 6.81405 19.9685 9.97855 19.9685C13.6493 19.9685 15.0291 17.1739 15.2443 15.7432H9.97855V12.3736H18.7379V12.3736ZM27.6976 12.7022V9.85721H24.9914V12.7022H22.2981V15.5609H24.9914V18.4059H27.6976V15.5609H30.3909V12.7022H27.6976Z" />
			</g>
			<defs>
				<clipPath id="clip0_1081_15411">
					<rect width="30.9278" height="26.1362" transform="translate(0.0820312 0.710938)" />
				</clipPath>
			</defs>
		</svg>
	);
};

export default Google;
