import { FunctionComponent } from 'react';
import { ROUTES_ENUM } from './ServerPage';
import { Route } from '~/types/schemas';

// Views
import ClientPage from '@/app/client/ClientPage';
import ClientPostPage from '@/app/client/ClientPostPage';

const ServerSinglePage = async ({ route, locale }: { route: Route; locale: string }) => {
	// Overview components
	const ClientOverviewComponents = new Map<ROUTES_ENUM, FunctionComponent<any>>([
		[ROUTES_ENUM.PAGE_UID, (props) => <ClientPage {...props} />],
		[ROUTES_ENUM.POST_UID, (props) => <ClientPostPage {...props} />],
	]);

	// Fallback to default Page component
	const ClientComponent =
		ClientOverviewComponents.get(route.uid as ROUTES_ENUM) ??
		(ClientOverviewComponents.get(ROUTES_ENUM.PAGE_UID) as FunctionComponent<any>);

	return <ClientComponent />;
};

export default ServerSinglePage;
