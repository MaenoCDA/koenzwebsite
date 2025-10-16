'use client';

import { ClientPageProps } from '~/types/app';
import RouteContext from '~/src/contexts/RouteContext';
import { PageDataProvider } from '~/src/contexts/PageDataContext';

const ClientPageProviders = ({ pageData, route, children }: ClientPageProps) => {
	return (
		<RouteContext.Provider value={{ currentRoute: route!, isHome: route?.isHome || false }}>
			<PageDataProvider pageData={pageData}>{children}</PageDataProvider>
		</RouteContext.Provider>
	);
};

export default ClientPageProviders;
