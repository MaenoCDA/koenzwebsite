'use client';

import { LayoutGroup } from 'framer-motion';
import Link from 'next/link';
import React, { useId, useContext } from 'react';
import ImageWrapper from '../layout/ImageWrapper';
import { classNamesTailwind } from '~/utils/helpers';
import NavToggle from '@/components/navigation/navToggle';
import { useMenu } from '~/src/contexts/MenuContext';
import NavbarItem from '@/components/navigation/NavbarItem';
import WebsiteContext from '~/src/contexts/WebsiteContext';

export const NavbarSection = ({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) => {
	const id = useId();

	return (
		<LayoutGroup id={id}>
			<div {...props} className={classNamesTailwind(className)} />
		</LayoutGroup>
	);
};

const Navbar = () => {
	const { menus } = useMenu();
	const navbar = menus.filter((menu) => menu.slug === 'main-navigation').pop();
	const { generalSettings } = useContext(WebsiteContext);
	const logo = generalSettings?.logo;

	return (
		<nav
			id="navbar"
			aria-label={navbar?.title}
			className="relative z-50 flex w-full items-center justify-between gap-6 py-6 font-barlow-semi-condensed"
		>
			{logo && (
				<Link href="/">
					<ImageWrapper image={logo} fill={false} width={136} height={50} />
					<span className="sr-only">Go to homepage</span>
				</Link>
			)}
			<NavbarSection className="hidden lg:block">
				<ul className="flex items-center gap-8">{navbar?.menuItems.map((item) => <NavbarItem key={item.id} {...item} />)}</ul>
			</NavbarSection>
			<NavbarSection className="flex gap-x-2 lg:hidden">
				<NavToggle />
			</NavbarSection>
		</nav>
	);
};

export default Navbar;
