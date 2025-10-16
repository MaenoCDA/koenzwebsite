import { ButtonProps } from '../input/Button';
import TeaserWrapper from './teaser/TeaserWrapper';
import Teaser from './teaser/Teaser';
import { TeaserManual as TeaserManualInterface } from '~/types/schemas/main';

interface TeaserManualProps extends TeaserManualInterface {
	button?: ButtonProps;
}

const TeaserManual = ({ ...props }: TeaserManualProps) => {
	const { heading, text, className, manualTeasers, button } = props;

	return (
		<div className={className}>
			<TeaserWrapper heading={heading} text={text} button={button}>
				{manualTeasers.map((teaser) => (
					<div key={teaser.id} className="col-span-full md:col-span-6 lg:col-span-4">
						<Teaser {...teaser} image={teaser.image} />
					</div>
				))}
			</TeaserWrapper>
		</div>
	);
};

export default TeaserManual;
