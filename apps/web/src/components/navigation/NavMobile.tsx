import React, { useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { RemoveScroll } from 'react-remove-scroll';
import Link from 'next/link';
import Icon from '../icon/Icon';
import { useMenu } from '~/src/contexts/MenuContext';
import { useScopedI18n } from '~/src/locales/client';
import useMobileMenu from '~/src/hooks/useMobileMenu';

// ~~~~ Begin 🪄 Animations ~~~~ //
const variantsMobileWrapper: Variants = {
	enter: {
		height: '100vh',
		transition: {
			type: 'spring',
			stiffness: 40,
			restDelta: 2,
		},
	},
	exit: {
		height: 0,
		transition: {
			type: 'spring',
			stiffness: 200,
			damping: 40,
		},
	},
};

const variantsMobileMenu: Variants = {
	enter: {
		height: '100%',
		transition: {
			delay: 0.2,
			type: 'spring',
			stiffness: 40,
			restDelta: 2,
		},
	},
	exit: {
		height: 0,
		transition: {
			delay: 0.5,
			type: 'spring',
			stiffness: 200,
			damping: 40,
		},
	},
};

const variantsMobileMenuItems: Variants = {
	initial: {},
	animate: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
	exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};

const variantsMobileMenuItem: Variants = {
	initial: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	exit: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
};
// ~~~~ End 🪄 Animations ~~~~ //

// ~~~~ Begin 🌎 Render ~~~~ //
const NavMobile = () => {
	const t = useScopedI18n('navigation');
	const { isOpen, menus } = useMenu();

	const { currentMenuItems, handleMenuItemClick, handleBackClick, currentMenuLabel, menuPath, resetMenuPath } = useMobileMenu(menus);

	useEffect(() => {
		if (!isOpen['mobile']) {
			resetMenuPath();
		}
	}, [isOpen['mobile']]);

	return (
		<div className="relative flex font-bold lg:hidden">
			<AnimatePresence>
				{isOpen['mobile'] && (
					<RemoveScroll forwardProps enabled={isOpen['mobile']} removeScrollBar={false}>
						<motion.div
							key="mobileWrapper"
							variants={variantsMobileWrapper}
							className="bg-linear-gradient fixed inset-0 flex h-screen w-screen max-w-full flex-col gap-2 overflow-hidden"
							exit="exit"
							initial="exit"
							animate="enter"
						>
							<motion.div
								key="mobileMenu"
								variants={variantsMobileMenu}
								className="h-screen overflow-y-clip"
								exit="exit"
								initial="exit"
								animate="enter"
							>
								<nav className="flex h-full flex-col pt-32">
									<motion.ul
										key={`menu-${menuPath.join('-').toString()}`}
										initial="initial"
										animate="animate"
										exit="exit"
										variants={variantsMobileMenuItems}
										className="inline-flex flex-col"
									>
										{menuPath.length > 0 && (
											<motion.li variants={variantsMobileMenuItem} key={`nav-${currentMenuLabel}`}>
												<span className="flex gap-1 text-lg">{currentMenuLabel}</span>
												<button onClick={() => handleBackClick()} className="flex items-center">
													<Icon iconName="CHEVRON_LEFT" className="size-6" />
													<span>{t('back')}</span>
												</button>
											</motion.li>
										)}
										{currentMenuItems.map((menuItem) => (
											<motion.li key={`li-${menuItem.id}-${menuItem.label}${currentMenuLabel ?? ''}`} variants={variantsMobileMenuItem}>
												{menuItem.subItems && menuItem.subItems.length > 0 ? (
													<button onClick={() => handleMenuItemClick(menuItem)} className="flex w-full items-center justify-between">
														{menuItem.label}
														<Icon iconName="CHEVRON_RIGHT" className="size-6" />
													</button>
												) : (
													<Link
														href={menuItem.link.href}
														className="after:bg-glass relative isolate block p-6 after:absolute after:inset-y-0 after:left-1/2 after:-z-10 after:w-screen after:-translate-x-1/2 after:opacity-0 after:transition-all hocus:after:opacity-100"
													>
														{menuItem.label}
													</Link>
												)}
											</motion.li>
										))}
									</motion.ul>
								</nav>
							</motion.div>
						</motion.div>
					</RemoveScroll>
				)}
			</AnimatePresence>
		</div>
	);
};
// ~~~~ End 🌎 Render ~~~~ //

export default NavMobile;
