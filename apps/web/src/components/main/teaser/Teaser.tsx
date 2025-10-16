'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import ImageWrapper from '../../layout/ImageWrapper';
import { Button as ButtonType } from '~/types/schemas/input';
import { ImageAttributes } from '~/types/schemas/main';
import { classNamesTailwind } from '~/utils/helpers';
import { Tag } from '~/types/schemas';

interface TeaserProps {
	title: string;
	text?: string;
	image?: ImageAttributes;
	button: ButtonType;
	uid?: string;
	slug?: string;
	className?: string;
	tags?: Tag[];
}

const Teaser = ({ ...props }: TeaserProps) => {
	const router = useRouter();
	const { title, text, image, button, tags } = props;

	const handleOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
		e.preventDefault();

		router.push(button.link.href);
	};

	return (
		<div
			className={classNamesTailwind(
				'bg-glass group flex h-full cursor-pointer flex-col rounded p-4 pb-14 transition-all duration-300 hocus:bg-white/15 md:border md:border-stroke'
			)}
			onClick={(e) => handleOnClick(e)}
		>
			<div className="flex flex-col px-3">
				<h3 className="mb-0">
					{button?.link ? (
						<Link
							dangerouslySetInnerHTML={{ __html: title }}
							href={button.link.href || ''}
							target={button.link.target}
							className="no-underline hocus:text-current"
						></Link>
					) : (
						<span dangerouslySetInnerHTML={{ __html: title }} />
					)}
				</h3>
				{tags && (
					<ul className="order-first mb-3 flex flex-wrap gap-2 font-bold">
						{tags.map((tag, index) => {
							return (
								<li key={index} className="bg-glass px-4 py-1">
									{tag.title}
								</li>
							);
						})}
					</ul>
				)}
				{text && <div className="wysiwyg" dangerouslySetInnerHTML={{ __html: text }} />}
			</div>
			{image && (
				<ImageWrapper
					image={image}
					classNames={{
						wrapper: 'order-first aspect-video rounded overflow-hidden mb-8',
						image: 'w-full h-full object-cover',
					}}
				/>
			)}
		</div>
	);
};

export default Teaser;
