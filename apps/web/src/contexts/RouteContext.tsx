'use client';

import { createContext } from 'react';
import { Route, RouteResult } from '~/types/schemas';

type RouteContextProps = {
	isHome: boolean;
	currentRoute: Route | RouteResult | null;
	breadcrumb?: Route[];
};

export default createContext<RouteContextProps>({
	isHome: false,
	currentRoute: null,
	breadcrumb: [],
});
