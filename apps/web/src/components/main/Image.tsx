/**
 * @file Image.tsx
 * @summary Image Flex component
 *
 */

import ImageWrapper from '../layout/ImageWrapper';
import Heading from '@/components/typography/Heading';
import { ImageContent } from '~/types/schemas/main';
import { classNamesTailwind } from '~/utils/helpers';

interface ImageContentProps extends ImageContent {
	caption?: string;
	isNarrow: boolean;
}

// ~~~~ Begin 🌎 Render ~~~~ //
const Image = ({ ...props }: ImageContentProps) => {
	if (!props) {
		return <></>;
	}

	const { isNarrow, image, caption } = props;

	if (!image.url) {
		return <></>;
	}

	return (
		<div className="component-margin container">
			<div className="row">
				<div className={classNamesTailwind('col-span-full', isNarrow ? 'lg:col-span-6 lg:col-start-4' : 'lg:col-span-10 lg:col-start-2')}>
					<figure>
						<ImageWrapper
							image={image}
							classNames={{
								wrapper: 'rounded-xl overflow-hidden',
								image: 'object-cover !static',
							}}
						/>
						{caption && <figcaption className="mt-4 italic">{caption}</figcaption>}
					</figure>
				</div>
			</div>
		</div>
	);
};
// ~~~~ End 🌎 Render ~~~~ //

export default Image;
