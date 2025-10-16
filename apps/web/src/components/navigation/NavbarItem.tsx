'use client';

import { AnimatePresence, motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { forwardRef, PropsWithChildren, useRef } from 'react';
import Icon from '../icon/Icon';
import Button, { ButtonColor } from '../input/Button';
import { useMenu } from '~/src/contexts/MenuContext';
import useDropdownPosition from '~/src/hooks/useDropdownPosition';
import { MenuItem } from '~/types/schemas';
import { classNamesTailwind, getColSpanClass } from '~/utils/helpers';

interface NavbarItemProps extends MenuItem {}

export const getDepth = (menuItem: MenuItem): number =>
	menuItem.subItems && menuItem.subItems.length > 0 ? 1 + Math.max(...menuItem.subItems.map(getDepth)) : 1;

// ~~~~ Begin 🪄 Animations ~~~~ //
const variantNavbarDropdown: Variants = {
	initial: { height: 0 },
	animate: {
		height: 'auto',
		transition: {
			height: {
				delay: 0.2,
				duration: 0.8,
				ease: [0.16, 1, 0.3, 1],
			},
		},
	},
	exit: { height: 0 },
};

const variantNavbarItems: Variants = {
	initial: {},
	animate: { transition: { staggerChildren: 0.2, delayChildren: 0.5 } },
	exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};

const variantNavbarItem: Variants = {
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
const NavbarButton = ({ label, buttonRef }: { label: string; buttonRef: React.RefObject<HTMLButtonElement | null> }) => {
	const { setOpen, isOpen, closeAllExcept } = useMenu();

	const handleOnNavButtonClick = () => {
		closeAllExcept(label);
		setOpen(label, !isOpen[label]);
	};

	return (
		<button ref={buttonRef} onClick={() => handleOnNavButtonClick()} className="flex flex-row items-center gap-1 p-2">
			{label}
			<Icon
				iconName="CHEVRON_LEFT"
				className={classNamesTailwind('size-5 rotate-[270deg] transition-all duration-500', { 'rotate-90': isOpen[label] })}
			/>
		</button>
	);
};

const NavbarMegaMenu = (props: MenuItem) => {
	const { isOpen } = useMenu();
	const { label, subItems } = props;
	const buttonRef = useRef<HTMLButtonElement>(null);
	const menuRef = useRef<HTMLDivElement>(null);
	const translateX = useDropdownPosition(isOpen[label], buttonRef, menuRef);
	const col = getColSpanClass(subItems.length);

	return (
		<AnimatePresence>
			<NavbarButton label={label} buttonRef={buttonRef} />
			{isOpen[label] && (
				<motion.div
					key={`megamenu-div-${label}`}
					variants={variantNavbarDropdown}
					initial="initial"
					animate="animate"
					exit="exit"
					ref={menuRef}
					style={{ transform: `translateX(${translateX})` }}
					className="absolute left-1/2 top-12 min-w-fit overflow-hidden rounded-xl shadow-xl"
				>
					<div className="border-neutral-20 grid w-full min-w-44 grid-cols-12 grid-rows-1 gap-4 gap-x-16 border bg-white px-16 py-12">
						{subItems?.map((menuItem) => (
							<div key={menuItem.id} className={col}>
								<div className="mb-4">
									<Link className="text-lg font-bold" href={menuItem.link?.href || ''} target={menuItem.link?.target}>
										{menuItem.label}
									</Link>
								</div>
								<div className="flex flex-col gap-2">
									{menuItem.subItems?.map((subItem) => (
										<Link key={subItem.id} href={subItem.link?.href || ''} target={subItem.link?.target} className="min-w-44 p-2 pl-0">
											{subItem.label}
										</Link>
									))}
								</div>
							</div>
						))}

						{/* Space reserved for custom content
							<div className="col-span-12 border-t pt-4"></div>
						*/}
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

const NavbarDropdown = (props: MenuItem) => {
	const { isOpen } = useMenu();
	const { label, subItems } = props;
	const buttonRef = useRef<HTMLButtonElement>(null);
	const menuRef = useRef<HTMLDivElement>(null);
	const translateX = useDropdownPosition(isOpen[label], buttonRef, menuRef);

	return (
		<AnimatePresence>
			<NavbarButton label={label} buttonRef={buttonRef} />
			{isOpen[label] && (
				<motion.div
					ref={menuRef}
					key={`dropdown-div-${label}`}
					variants={variantNavbarDropdown}
					initial="initial"
					animate="animate"
					exit="exit"
					style={{ transform: `translateX(${translateX})` }}
					className="absolute left-1/2 top-12 min-w-fit overflow-hidden rounded-xl shadow-xl"
				>
					<motion.ul
						key={`dropdown-ul-${label}`}
						variants={variantNavbarItems}
						initial="initial"
						animate="animate"
						exit="exit"
						className="border-neutral-20 flex w-full flex-col gap-y-4 border bg-white p-7"
					>
						{subItems?.map((menuItem) => (
							<motion.li
								className="w-max min-w-32"
								key={menuItem.id}
								variants={variantNavbarItem}
								initial="initial"
								animate="animate"
								exit="exit"
							>
								<Link
									key={menuItem.id}
									href={menuItem.link.href ?? ''}
									target={menuItem.link?.target}
									className="rounded-lg flex px-4 py-2 hocus:bg-primary/10"
								>
									<span className="font-bold">{menuItem.label}</span>
								</Link>
							</motion.li>
						))}
					</motion.ul>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

const NavbarItem = forwardRef(function NavbarItem(
	{ children, ...props }: PropsWithChildren<NavbarItemProps> & React.ComponentPropsWithoutRef<'a' | 'button'>,
	ref: React.ForwardedRef<HTMLAnchorElement | HTMLButtonElement>
) {
	const pathname = usePathname();
	const { link, label, isButton = false } = props;

	const depth = getDepth(props);

	const current = pathname === link?.href;

	return (
		<li className="group relative">
			{depth > 1 ? (
				depth === 2 ? (
					<NavbarDropdown {...props} />
				) : (
					<NavbarMegaMenu {...props} />
				)
			) : link ? (
				!isButton ? (
					<Link
						href={link.href || ''}
						target={link.target}
						className={classNamesTailwind('')}
						data-current={current ? 'true' : undefined}
						ref={ref as React.ForwardedRef<HTMLAnchorElement>}
					>
						{label}
					</Link>
				) : (
					<Button color={ButtonColor.Secondary} href={link.href || ''} target={link.target} className="px-6">
						{label}
					</Button>
				)
			) : (
				<></>
			)}
		</li>
	);
});
// ~~~~ End 🌎 Render ~~~~ //

export default NavbarItem;
