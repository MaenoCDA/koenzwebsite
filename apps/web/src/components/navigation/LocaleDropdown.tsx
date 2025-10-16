import { useContext } from 'react';
import { DEFAULT_LOCALES } from '~/config';
import { useCurrentLocale } from '~/src/locales/client';

const LocaleDropdown = () => {
	const locale = useCurrentLocale();
	const locales = DEFAULT_LOCALES;

	if (locales.length === 1) {
		return null;
	}
};

export default LocaleDropdown;
