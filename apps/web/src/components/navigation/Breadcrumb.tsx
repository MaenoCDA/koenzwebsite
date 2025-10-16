import Link from 'next/link';
import { useContext } from 'react';
import Icon from '../icon/Icon';
import RouteContext from '~/src/contexts/RouteContext';
import WebsiteContext from '~/src/contexts/WebsiteContext';
import { useScopedI18n } from '~/src/locales/client';

const Breadcrumb = () => {
	const { currentRoute, isHome } = useContext(RouteContext);
	const t = useScopedI18n('breadcrumb');
	const { locale } = useContext(WebsiteContext);

	if (isHome || !currentRoute) {
		return null;
	}

	const trail = [
		{
			title: t('home'),
			route: '/',
		},
	];

	if (currentRoute.parent) {
		trail.push({
			title: currentRoute.parent.title,
			route: currentRoute.parent.route!,
		});
	}

	trail.push({
		title: currentRoute.title!,
		route: currentRoute.route,
	});

	return (
		<nav className="col-span-12" aria-label="Breadcrumb">
			<ol className="flex items-center gap-1">
				{trail.map((breadcrumb, index) => (
					<li key={index}>
						<Link
							className="flex items-center gap-2"
							href={breadcrumb.route}
							target="_self"
							aria-current={index === trail.length - 1 ? 'page' : undefined}
						>
							{index === 0 ? (
								<Icon iconName="OTHER_HOUSES" className="size-4 fill-white hover:fill-white/70" />
							) : (
								<span className="max-w-xs truncate text-sm hover:underline hover:underline-offset-2">{breadcrumb?.title}</span>
							)}
							{index < trail.length - 1 && <Icon iconName="CHEVRON_RIGHT" weight="700" variant="outlined" className="size-4 fill-white" />}
						</Link>
					</li>
				))}
			</ol>
		</nav>
	);
};

export default Breadcrumb;
