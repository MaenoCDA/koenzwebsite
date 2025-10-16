import { Svg } from '~/types/schemas';

const HeartIcon = ({ className }: Svg) => {
	return (
		<svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.79 10.67">
			<g>
				<g>
					<path d="m6.22,10.67c-.32,0-.62-.06-.92-.18-.3-.12-.56-.3-.78-.53L.22,5.66c-.3-.3-.3-.78,0-1.08s.78-.3,1.08,0l4.3,4.3c.08.08.18.15.28.19.21.09.45.09.67,0,.1-.04.2-.11.28-.19L15.49.22c.3-.3.78-.3,1.08,0,.3.3.3.78,0,1.08L7.91,9.96c-.22.22-.48.4-.78.52-.3.12-.6.18-.92.18Z" />
				</g>
			</g>
		</svg>
	);
};

export default HeartIcon;
