'use client';

import { createContext } from 'react';
import { FixedBlocks, GeneralSettings, Menu } from '~/types/schemas';

type WebsiteContextProps = {
	locale: string;
	menus: Menu[] | [];
	generalSettings: GeneralSettings | null;
	fixedBlocks: FixedBlocks[] | null;
};

export default createContext<WebsiteContextProps>({
	locale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE || 'nl',
	menus: [],
	generalSettings: null,
	fixedBlocks: null,
});
