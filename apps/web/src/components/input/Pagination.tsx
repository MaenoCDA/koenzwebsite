'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import Icon from '../icon/Icon';
import { Pagination as PaginationInterface } from '~/types/schemas';
import { classNamesTailwind } from '~/utils/helpers';

const Pagination = ({ pagination, onChange }: { pagination: PaginationInterface; onChange?: (page: number) => void }) => {
	const { page, pageCount } = pagination;

	const pathname = usePathname();
	const searchParams = useSearchParams();
	const router = useRouter();

	const getPageNumbers = (): (number | string)[] => {
		if (pageCount <= 5) {
			return Array.from({ length: pageCount }, (_, i) => i + 1);
		}

		const pages: (number | string)[] = [1];

		if (page > 3) {
			pages.push('...');
		}

		if (page > 2) {
			pages.push(page - 1);
		}

		pages.push(page);

		if (page < pageCount - 1) {
			pages.push(page + 1);
		}

		if (page < pageCount - 2) {
			pages.push('...');
		}

		pages.push(pageCount);

		return pages;
	};

	const handlePageChange = (newPage: number) => {
		if (onChange) {
			return onChange(newPage);
		}

		const params = new URLSearchParams(searchParams.toString());

		params.set('page', newPage.toString());
		router.replace(`${pathname}?${params.toString()}`);
	};

	const ICON_CLASSES = 'size-5 fill-primary';
	const BUTTON_CLASSES =
		'flex items-center justify-center size-8 text-base no-underline transition-colors bg-white leading-none text-primary-900 disabled:hidden';

	return (
		<nav role="navigation" aria-label="Pagination" className="mt-8 lg:mt-14">
			<ul className="flex items-center justify-center gap-1.5">
				<li>
					<button
						onClick={() => handlePageChange(Math.max(1, page - 1))}
						disabled={page === 1}
						aria-label="Previous page"
						className={classNamesTailwind(BUTTON_CLASSES, 'bg-transparent')}
					>
						<Icon iconName="CHEVRON_LEFT" variant="outlined" className={ICON_CLASSES} />
					</button>
				</li>
				{getPageNumbers().map((pageNumber, index) => (
					<li key={index}>
						{pageNumber === '...' ? (
							<span className="px-4 py-2">...</span>
						) : (
							<button
								className={classNamesTailwind(BUTTON_CLASSES, {
									'bg-primary-700 text-white font-bold': pageNumber === page,
									'hover:bg-gray-100': pageNumber !== page,
								})}
								onClick={() => handlePageChange(pageNumber as number)}
								aria-current={pageNumber === page ? 'page' : undefined}
							>
								{pageNumber}
							</button>
						)}
					</li>
				))}
				<li>
					<button
						onClick={() => handlePageChange(Math.min(pageCount, page + 1))}
						disabled={page === pageCount}
						className={classNamesTailwind(BUTTON_CLASSES, 'bg-transparent')}
						aria-label="Next page"
					>
						<Icon iconName="CHEVRON_RIGHT" className={ICON_CLASSES} />
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default Pagination;
