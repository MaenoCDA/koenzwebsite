import { Strapi } from '@strapi/strapi';
import { env as Env } from '@strapi/utils';
import { Entity } from '@strapi/types';
import type { Database } from '@strapi/database';

type ConfigFn = (options: { env?: typeof Env }) => object;
export type Config = object | ConfigFn;

export type StrapiProps = {
	strapi: Strapi & {
		admin: Strapi['admin'] & {
			services: {
				role: {
					hasSuperAdminRole: (user: User) => boolean;
					createRolesIfNoneExist: () => Promise<void>;
				};
				permission: {
					actionProvider: {
						registerMany: (actions: Array<object>) => Promise<void>;
					};
				};
			};
		};
		mainDb: Database;
	};
};

export type UsersPermissionsRole = {
	id: string;
	type: string;
	permissions: {
		[key: string]: {
			controllers: {
				[key: string]: {
					find: {
						enabled: boolean;
					};
					layout?: {
						enabled: boolean;
					};
				};
			};
		};
	};
};

export type HeroHeroComponent = {
	__component: 'hero.hero';
	heading: {
		title: string;
	};
	text: string;
};

export type ContentTextComponent = {
	__component: 'content.text';
	paragraph: {
		text: string;
	};
};

export type FlexComponents = Array<
	| ContentTextComponent
	| {
			__component: string;
			[key: string]: object;
	  }
>;

export type FlexContentType = {
	slug: string;
	title: string;
	domain?: {
		name: string;
	};
	hero?: HeroHeroComponent;
	flexContent: FlexComponents;
};

export type SearchEntry = {
	slug: string;
	title: string;
	domain: string;
	description: string[];
};

export type PluginConfig = {
	id: string;
	name: string;
	injectionZones?: { [name: string]: object };
	apis?: { [key: string]: object };
	initializer?: (InitializerProps) => void | null;
	isReady?: boolean;
};

export type App = {
	locales: Array<string>;
	addComponents: (components: Array<object> | object) => void;
	addFields: (fields: Array<object> | object) => void;
	addMenuLink: (link: object) => void;
	addReducers: (reducers: object) => void;
	addSettingsLink: (sectionId: string, link: object) => void;
	addSettingsLinks: (sectionId: string, links: Array<object>) => void;
	getPlugin: (pluginId: string) => {
		injectComponent: (containerName: string, blockName: string, component: object) => void;
	};
	injectContentManagerComponent: (containerName: string, blockName: string, component: object) => void;
	injectAdminComponent: (containerName: string, blockName: string, component: object) => void;
	registerHook: (name: string, fn: () => void) => void;
	registerPlugin: (config: PluginConfig) => void;
};

export type Role = {
	id: Entity.ID;
	type: string;
	permissions: {
		[key: string]: {
			controllers: {
				[key: string]: {
					find: {
						enabled: boolean;
					};
				};
			};
		};
	};
};

export type User = {
	id: Entity.ID;
	roles: Array<Role>;
	domains: Array<{ id: Entity.ID }>;
};
