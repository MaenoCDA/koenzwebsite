import React, { FC } from 'react';
import Check from './custom/Check';
import { classNamesTailwind } from '~/utils/helpers';

export enum CUSTOM_ICONS_ENUM {
	CHECK = 'check',
}

const CustomIconMap = new Map<CUSTOM_ICONS_ENUM, FC<{ className?: string }>>([[CUSTOM_ICONS_ENUM.CHECK, Check]]);

const CustomIcon = ({ className, channel }: { className?: string; channel: CUSTOM_ICONS_ENUM }) => {
	const IconComponent = CustomIconMap.get(channel);

	if (!IconComponent) {
		return null;
	}

	return <IconComponent className={classNamesTailwind('size-6 fill-current', className)} />;
};

export default CustomIcon;
