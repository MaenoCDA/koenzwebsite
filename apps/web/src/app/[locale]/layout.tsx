import '../globals.css';

import { PropsWithChildren } from 'react';
import { Barlow, Barlow_Semi_Condensed } from 'next/font/google';
import { setStaticParamsLocale } from 'next-international/server';
import { GoogleTagManager } from '@next/third-parties/google';
import { ClientLayoutProviders } from '../client/ClientLayoutProviders';
import type { LocaleLayoutProps } from '~/types/app';
import { classNamesTailwind, getImageProps } from '~/utils/helpers';
import { getLayoutData } from '~/utils/api/getters';

// ~~~~ Begin 🔤 font setup
const barlow = Barlow({
	weight: ['400', '700'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-barlow',
});

const barlowSemiCondensed = Barlow_Semi_Condensed({
	weight: ['700'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-barlow-semi-condensed',
});
// ~~~~ End 🔤 font setup

// ~~~~ Begin 🌎 Render ~~~~ //
export default async function LocaleLayout(props: PropsWithChildren<LocaleLayoutProps>) {
	const { locale } = await props.params;
	const { children } = props;

	setStaticParamsLocale(locale);

	const { generalSettings, menus, fixedBlocks } = await getLayoutData(locale);

	if (!generalSettings) {
		throw new Error('General settings not found - please make sure they are available in the CMS');
	}

	const favicon = getImageProps(generalSettings?.favicon ?? {});
	const googleTagmanager = generalSettings?.SEO.googleTagManager;

	return (
		<html lang={locale} className={classNamesTailwind(barlow.variable, barlowSemiCondensed.variable)}>
			{googleTagmanager.match(/\d+/g) && <GoogleTagManager gtmId={googleTagmanager} />}
			{favicon.src !== 'undefined' && <link rel="icon" href={favicon.src as string} sizes="any" />}
			<body className="grid min-h-screen grid-rows-[auto_1fr_auto]">
				<ClientLayoutProviders locale={locale} generalSettings={generalSettings} menus={menus!} fixedBlocks={fixedBlocks}>
					{children}
				</ClientLayoutProviders>
			</body>
		</html>
	);
}
// ~~~~ End 🌎 Render ~~~~ //
