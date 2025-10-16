'use client';

import { PropsWithChildren } from 'react';
import ClientLayout from './ClientLayout';
import { FixedBlocks, GeneralSettings, Menu } from '~/types/schemas';
import WebsiteContext from '@/contexts/WebsiteContext';
import { I18nProviderClient } from '~/src/locales/client';

export function ClientLayoutProviders({
	locale,
	menus,
	generalSettings,
	fixedBlocks,
	children,
}: {
	locale: string;
	menus: Menu[];
	generalSettings: GeneralSettings;
	fixedBlocks: FixedBlocks[] | null;
} & PropsWithChildren) {
	return (
		<WebsiteContext.Provider
			value={{
				locale,
				menus: menus ?? [],
				generalSettings: generalSettings ?? {},
				fixedBlocks: fixedBlocks ?? null,
			}}
		>
			<I18nProviderClient locale={locale}>
				<ClientLayout>{children}</ClientLayout>
			</I18nProviderClient>
		</WebsiteContext.Provider>
	);
}
