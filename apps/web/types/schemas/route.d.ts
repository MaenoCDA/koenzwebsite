import { ROUTES_ENUM } from '~/config';

export interface Route {
	slug: string;
	uid: ROUTES_ENUM;
	kind: CollectionTypeEnum;
	parentUid?: string;
	childrenUid?: string;
	route: string;
	title?: string;
	documentId?: string;
	isHome?: boolean;
	endpoint?: string;
	parent: {
		slug: string;
		locale: string;
		title: string;
		route?: string;
	};
}

interface Routes {
	[locale: string]: Route[];
}

interface RoutesResponse {
	Routes;
}

interface RouteComponent {
	route: { uid: ROUTES_ENUM; Component: FunctionComponent; kind: CollectionTypeEnum }[];
}

export interface RouteResult extends Route {
	Component: FunctionComponent<any>;
	slug: string[];
}
