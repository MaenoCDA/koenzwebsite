import { useState, useEffect } from 'react';
import { Menu, MenuItem } from '~/types/schemas';

const useMobileMenu = (menus: Menu[]) => {
	const [menuPath, setMenuPath] = useState<MenuItem[]>([]);

	useEffect(() => {
		if (!document || typeof document === 'undefined' || !document.getElementById('navbar')) {
			return;
		}
		const navbar = document.getElementById('navbar');
		navbar && document.documentElement.style.setProperty('--nav-height', `${navbar?.offsetHeight}px`);
	}, []);

	const currentMenuItems =
		menuPath.length === 0
			? menus.find((menu) => menu.slug === 'main-navigation' || menu.slug === 'sub-navigation')?.menuItems || []
			: menuPath[menuPath.length - 1].subItems || [];

	const handleMenuItemClick = (menuItem: MenuItem) => {
		if (menuItem.subItems && menuItem.subItems.length > 0) {
			setMenuPath([...menuPath, menuItem]);
		}
	};

	const handleBackClick = () => {
		setMenuPath(menuPath.slice(0, -1));
	};

	const resetMenuPath = () => {
		setMenuPath([]);
	};

	const currentMenuLabel = menuPath.length > 0 ? menuPath[menuPath.length - 1].label : '';

	return {
		currentMenuItems,
		handleMenuItemClick,
		handleBackClick,
		currentMenuLabel,
		menuPath,
		resetMenuPath,
	};
};

export default useMobileMenu;
