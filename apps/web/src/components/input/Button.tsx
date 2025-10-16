'use client';

import React, { forwardRef, ElementType, PropsWithChildren, Ref } from 'react';
import Link from 'next/link';
import Icon from '@/components/icon/Icon';
import { classNamesTailwind } from '~/utils/helpers';

export interface ButtonProps<T extends ElementType = 'button'> extends PropsWithChildren {
	isLoading?: boolean;
	as?: T;
	className?: string;
	color?: ButtonColor;
	variant?: ButtonVariant;
	href?: string;
	target?: string;
	hasChevron?: boolean;
}

export enum ButtonColor {
	Primary = 'primary',
	Secondary = 'secondary',
}

export enum ButtonVariant {
	Solid = 'solid',
	Outline = 'outline',
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps<ElementType>>(
	(props, ref: Ref<HTMLButtonElement | HTMLAnchorElement>) => {
		const {
			href,
			target,
			className,
			color = ButtonColor.Primary,
			variant = ButtonVariant.Solid,
			hasChevron = true,
			children,
			...rest
		} = props;

		const Tag = href ? (!href.includes('#') ? Link : 'a') : 'button';
		const hrefTarget = href ? (target ?? '_self') : undefined;

		return (
			// @ts-ignore
			<Tag
				{...rest}
				{...(href ? { href } : {})}
				ref={ref}
				role={undefined}
				className={classNamesTailwind(
					'inline-flex items-center justify-center gap-1 rounded-sm border border-transparent px-8 py-2 font-barlow text-lg font-bold uppercase no-underline transition-all duration-300 hocus:border-text hocus:bg-primary-900 hocus:text-text group-hocus:border-text group-hocus:bg-primary-900 group-hocus:text-text',
					{ 'bg-primary text-green-100': color === ButtonColor.Primary },
					{ 'bg-white text-text-dark': color === ButtonColor.Secondary },
					className,
					color,
					variant
				)}
				{...(hrefTarget ? { target: hrefTarget } : {})}
			>
				{children}
				{hasChevron && <Icon variant="outlined" weight="700" iconName="CHEVRON_RIGHT" className="size-6 fill-current" />}
			</Tag>
		);
	}
);

Button.displayName = 'Button';

export default Button;
