import TeaserWrapper from './teaser/TeaserWrapper';
import Teaser from './teaser/Teaser';
import { ImageAttributes, TeaserDynamic as TeaserDynamicInterface } from '~/types/schemas/main';
import { useScopedI18n } from '~/src/locales/client';

interface TeaserDynamicProps extends TeaserDynamicInterface {
	dynamicTeasers: DynamicTeaserItem[];
}

interface DynamicTeaserItem {
	uid: string;
	id: string;
	image: ImageAttributes;
	title: string;
	text: string;
	slug: string;
}

const TeaserDynamic = ({ ...props }: TeaserDynamicProps) => {
	const t = useScopedI18n('teasers');

	const { heading, text, className, dynamicTeasers } = props;

	return (
		<div className={className}>
			<TeaserWrapper heading={{ ...heading }} text={text}>
				{dynamicTeasers.map((teaser) => {
					return (
						<Teaser
							key={teaser.id}
							text={teaser.text}
							image={teaser.image}
							title={teaser.title}
							button={{
								label: t('readMore'),
								link: { href: teaser.slug ?? '', target: '_self' },
							}}
						/>
					);
				})}
			</TeaserWrapper>
		</div>
	);
};

export default TeaserDynamic;
