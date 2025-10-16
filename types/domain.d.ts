import type { StartOptions } from 'pm2';

export type Domain = {
	name: string;
	web: string | string[];
	cms:
		| string
		| {
				development: string;
				[env: string]: string;
		  };
	locales: Array<string>;
	defaultLocale: string;
	port: number;
	databaseName: string;
	isMainDomain?: boolean;
};

export type MultiDomainConfig = {
	domains: Array<Domain>;
	parseCms: (cms: Domain['cms']) => string;
	DOMAIN_CONTROLLER_DATABASE_NAME: string;
};

export type Pm2Config = {
	apps: Array<StartOptions>;
	deploy: {
		key?: string;
		user: string;
		host: string;
		ssh_options?: string;
		ref: string;
		repo: string;
		path?: string;
		'pre-setup'?: string;
		'post-setup'?: string;
		'pre-deploy-local'?: string;
		'post-deploy'?: string;
	};
};
