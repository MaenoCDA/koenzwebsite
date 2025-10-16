import { useContext } from 'react';
import LogoSvg from './LogoSvg';
import WebsiteContext from '~/src/contexts/WebsiteContext';
import ImageWrapper from '@/components/layout/ImageWrapper';

interface LogoProps {
	width?: number;
	height?: number;
	className?: string;
}

const Logo = ({ width = 70, height = 40, className }: LogoProps) => {
	const { generalSettings } = useContext(WebsiteContext);
	const logo = generalSettings?.logo;

	if (logo) {
		return <ImageWrapper unoptimized placeholder="empty" image={logo} fill={false} width={width} height={height} />;
	}

	return <LogoSvg className={className} width={width} height={height} />;
};

export default Logo;
