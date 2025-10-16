import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LocaleDropdown from '../navigation/LocaleDropdown';
import { useMenu } from '~/src/contexts/MenuContext';
import { classNamesTailwind } from '~/utils/helpers';

const Topbar = () => {
	const { menus } = useMenu();
	const topbar = menus.filter((menu) => menu.slug === 'topbar-navigation').pop();

	return (
		<div className="hidden justify-between pt-4 text-sm lg:flex lg:flex-1">
			<div className="ml-auto flex items-center gap-x-6">
				<nav aria-label={topbar?.title}>
					<ul className="hidden gap-x-6 lg:flex">
						{topbar?.menuItems?.map((item) => {
							const pathname = usePathname();
							const isCurrent = pathname === item.link?.href;

							return (
								<li key={`navigation-top-${item.id}`}>
									<Link href={item.link.href || ''} target={item.link.target} className={classNamesTailwind({ 'text-primary': isCurrent })}>
										{item.label}
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
				<LocaleDropdown />
			</div>
		</div>
	);
};

export default Topbar;
