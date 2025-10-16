import TeaserWrapper from './teaser/TeaserWrapper';
import Teaser from './teaser/Teaser';
import { Image, TeaserLatest as TeaserLatestInterface } from '~/types/schemas/main';
import { useScopedI18n } from '~/src/locales/client';

interface TeaserLatestProps extends TeaserLatestInterface {
	latestTeasers: LatestTeaserItem[];
}

interface LatestTeaserItem {
	uid: string;
	id: string;
	image: Image;
	title: string;
	text: string;
	slug: string;
}

const TeaserLatest = ({ ...props }: TeaserLatestProps) => {
	const t = useScopedI18n('teasers');

	const { heading, text, className, latestTeasers } = props;

	return (
		<div className={className}>
			<TeaserWrapper heading={heading} text={text}>
				{latestTeasers.map((teaser) => {
					return (
						<div key={teaser.id} className="col-span-full md:col-span-6 lg:col-span-4">
							<Teaser
								{...teaser}
								image={teaser.image}
								button={{
									label: t('readMore'),
									link: { href: teaser.slug, target: '_self' },
								}}
							/>
						</div>
					);
				})}
			</TeaserWrapper>
		</div>
	);
};

export default TeaserLatest;
