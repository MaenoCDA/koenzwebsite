'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useScopedI18n } from '~/src/locales/client';
import { Tag } from '~/types/schemas';
import { classNamesTailwind } from '~/utils/helpers';

const Tags = ({ tags }: { tags: Tag[] }) => {
	const t = useScopedI18n('tags');
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const router = useRouter();
	const params = new URLSearchParams(searchParams.toString());
	const currentTag = params.get('tag');

	const handleTagsClick = (event: React.MouseEvent<HTMLButtonElement>, tag: Tag) => {
		event.preventDefault();

		const params = new URLSearchParams(searchParams.toString());
		const pagination = searchParams.get('page');

		if (pagination) {
			params.delete('page');
		}

		params.set('tag', tag.slug);
		router.replace(`${pathname}?${params.toString()}`);
	};

	const clearTags = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();

		const params = new URLSearchParams(searchParams.toString());

		params.delete('tag');
		router.replace(`${pathname}?${params.toString()}`);
	};

	const BUTTON_CLASSES =
		'no-underline bg-text transition-all duration-300 text-primary-800 font-bold px-4 py-1 border border-transparent hocus:border-text hocus:bg-primary-900 hocus:!text-text';

	return (
		<>
			<button onClick={(e) => clearTags(e)} className={BUTTON_CLASSES}>
				{t('clear')}
			</button>
			{tags.map((tag) => (
				<button
					key={tag.id}
					onClick={(e) => handleTagsClick(e, tag)}
					className={classNamesTailwind(BUTTON_CLASSES, { 'bg-primary-700 text-text': currentTag === tag.slug })}
				>
					{tag.title}
				</button>
			))}
		</>
	);
};

export default Tags;
