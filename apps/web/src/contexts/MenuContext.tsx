'use client';

import { usePathname } from 'next/navigation';
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Menu } from '~/types/schemas';

type MenuContextProps = {
	menus: Menu[];
	isOpen: { [key: string]: boolean };
	setOpen: (id: string, isOpen: boolean) => void;
	isAnyOpen: () => boolean;
	closeAll: () => void;
	closeAllExcept: (id: string) => void;
};

const MenuContext = createContext<MenuContextProps | undefined>(undefined);

export const MenuProvider = ({ menus, children }: { menus: Menu[]; children: ReactNode }) => {
	const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({});
	const pathname = usePathname();

	const setOpen = (id: string, isOpen: boolean) => {
		setIsOpen((prevState) => ({ ...prevState, [id]: isOpen }));
	};

	const isAnyOpen = (): boolean => {
		return Object.values(isOpen).some((open) => open);
	};

	const closeAll = () => {
		setIsOpen({});
	};

	const closeAllExcept = (id: string) => {
		setIsOpen((prevState) => {
			const newState = Object.keys(prevState).reduce(
				(acc, key) => {
					acc[key] = key === id ? prevState[key] : false;
					return acc;
				},
				{} as { [key: string]: boolean }
			);
			return newState;
		});
	};

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				closeAll();
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [closeAll]);

	// on pathname change, close any open dropdown
	useEffect(() => {
		if (isAnyOpen()) {
			closeAll();
		}
	}, [pathname]);

	return <MenuContext.Provider value={{ menus, isOpen, setOpen, isAnyOpen, closeAll, closeAllExcept }}>{children}</MenuContext.Provider>;
};

export const useMenu = () => {
	const context = useContext(MenuContext);

	if (context === undefined) {
		throw new Error('useMenu must be used within a MenuProvider');
	}
	return context;
};
