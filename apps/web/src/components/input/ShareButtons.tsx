import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import SocialIcon, { SOCIAL_CHANNELS } from '../icon/Social';
import { classNamesTailwind } from '~/utils/helpers';

interface ShareProps {
	className?: string;
}

const socialMediaLinks = {
	LINKEDIN: 'https://www.linkedin.com/sharing/share-offsite/?url=',
	FACEBOOK: 'https://www.facebook.com/sharer/sharer.php?u=',
	TWITTER: 'https://twitter.com/intent/tweet?url=',
};

const ShareButtons = ({ className }: ShareProps) => {
	const pathname = usePathname();
	const [fullUrl, setFullUrl] = useState('');

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setFullUrl(`${window.location.origin}${pathname}`);
		}
	}, [pathname]);

	return (
		<div className={classNamesTailwind('bg-glass inline-flex flex-wrap items-center gap-1 rounded-sm px-4 py-1', className)}>
			<p>Share: </p>
			<ul className="flex gap-1">
				{Object.entries(socialMediaLinks).map(([key, value], index) => (
					<li key={index}>
						<a href={`${value}${fullUrl}`} target="_blank">
							<span className="sr-only">{key}</span>
							<SocialIcon channel={SOCIAL_CHANNELS[key as keyof typeof SOCIAL_CHANNELS]} className="size-6" />
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ShareButtons;
