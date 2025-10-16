import { useContext } from 'react';
import Link from 'next/link';
import SocialIcon from '../icon/Social';
import BuiltBySvg from '../shapes/BuiltBy';
import ImageWrapper from '../layout/ImageWrapper';
import { filterMenusBySlugs } from '~/utils/helpers';
import { useScopedI18n } from '~/src/locales/client';
import WebsiteContext from '~/src/contexts/WebsiteContext';
import FixedContentComponents from '@/components/main/FixedContent';

// ~~~~ Begin 🌎 Render ~~~~ //
const Footer = () => {
	const { menus, generalSettings } = useContext(WebsiteContext);
	const t = useScopedI18n('footer');
	const footerMenu = filterMenusBySlugs(menus, ['footer-menu']);
	const bottomMenu = filterMenusBySlugs(menus, ['bottom-navigation']).pop();
	const logo = generalSettings?.logo;
	const tagline = generalSettings?.tagline;

	return (
		<footer className="bg-glass pb-6 pt-16">
			<div className="container">
				<div className="row gap-y-8">
					<div className="col-span-12 md:col-span-3">
						<div className="flex flex-col gap-y-8">
							{logo && (
								<Link href="/">
									<ImageWrapper image={logo} fill={false} width={150} height={50} />
									<span className="sr-only">Go to homepage</span>
								</Link>
							)}
							{tagline && <p dangerouslySetInnerHTML={{ __html: generalSettings?.tagline || '' }}></p>}
							{generalSettings?.socials && (
								<div className="flex items-center justify-start gap-x-4">
									{generalSettings.socials.map((social) => (
										<a key={social.id} href={social.url} target="_blank" rel="noopener noreferrer">
											<span className="sr-only">{social.channel}</span>
											<SocialIcon channel={social.channel} className="size-8" />
										</a>
									))}
								</div>
							)}
						</div>
					</div>

					<div className="col-span-12 md:col-span-3 md:col-start-5">
						{footerMenu.map((menu) => (
							<nav className="font-bold" key={menu.id} aria-label={menu.title}>
								<ul className="grid gap-y-4">
									{menu.menuItems.map((item) => (
										<li key={item.id}>
											<Link href={item.link.href || ''} target={item.link.target}>
												{item.label}
											</Link>
										</li>
									))}
								</ul>
							</nav>
						))}
					</div>
					<div className="col-span-12 md:col-span-4 md:col-start-9">
						<h3>Sign up for exlcusive content</h3>
						<FixedContentComponents uid={'footer'} />
					</div>
				</div>
			</div>

			<div className="container">
				<hr className="mt-6 border-t-stroke pt-6 md:mt-16" />
			</div>

			<div className="container text-sm">
				<div className="flex flex-wrap items-center gap-4">
					<div className="max-md:col-span-full">
						{bottomMenu && (
							<nav aria-label={bottomMenu.title}>
								<ul className="flex flex-wrap gap-x-6 gap-y-1">
									{bottomMenu.menuItems.map((menu) => (
										<li key={menu.id}>
											<Link href={menu.link.href} target={menu.link.target}>
												{menu.label}
											</Link>
										</li>
									))}
								</ul>
							</nav>
						)}
					</div>
					<div className="ml-auto max-md:col-span-full">
						<a
							href="https://www.ef2.nl"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-[1ch] no-underline"
						>
							Gebouwd door
							<span className="sr-only">EF2 Happy Horizon (opens in new tab)</span>
							<BuiltBySvg width={140} height={32} />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};
// ~~~~ End 🌎 Render ~~~~ //

export default Footer;
