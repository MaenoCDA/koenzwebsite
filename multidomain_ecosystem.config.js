try {
	require('dotenv').config();
} catch {}

const { domains, MAIN_DATABASE_NAME, parseCms } = require('./multidomain.config');
const isDevelopment = process.env.NODE_ENV === 'development';
const instances = isDevelopment ? 1 : 2;
const mainInstances = isDevelopment ? 1 : instances + 1; // 1 extra instance for the domain controller
const databaseNames = domains.map((domain) => domain.databaseName).join(',');
const allLocales = domains.reduce((acc, domain) => {
	domain.locales.forEach((locale) => {
		if (!acc.includes(locale)) {
			acc.push(locale);
		}
	});
	return acc;
}, []);

const DEPLOY_COMMAND = `source ~/.profile \
	&& nvm install \
	&& nvm use \
	&& corepack enable \
    && corepack prepare yarn@4.5.1 --activate \
    && yarn policies set-version berry \
	&& yarn setup \
	&& pm2 startOrRestart ecosystem.config.js \
	${process.env.PM2_PLUS_KEYS && `&& pm2 link ${process.env.PM2_PLUS_KEYS}`} \
	&& pm2 save`;

/**
 * @type {import('pm2').StartOptions}
 **/
const baseConfig = {
	script: 'server.js',
	cwd: './apps/cms',
	exec_mode: instances > 1 ? 'cluster' : 'fork',
	instances,
	appendEnvToName: true,
	max_restarts: 10,
	restart_delay: 4000,
};

/**
 * @type {import('./types/domain').Pm2Config}
 **/
module.exports = {
	apps: domains.map(({ databaseName, name, cms, port, isMainDomain, locales, defaultLocale }) => ({
		...baseConfig,
		name: name + '-cms',
		instances: isMainDomain ? mainInstances : instances,
		watch: isDevelopment ? ['./cms/dist', './cms/**/dist'] : false,
		env: {
			...process.env,
			DATABASE_NAME: databaseName,
			MAIN_DATABASE_NAME: isMainDomain ? undefined : MAIN_DATABASE_NAME, // Only set the controller database for the other domains
			DATABASE_NAMES: isMainDomain ? databaseNames : undefined, // Only set the database names for the controller
			STRAPI_URL: parseCms(cms),
			PORT: port,
			BROWSER: isMainDomain,
			LOCALES: locales?.join(','),
			DEFAULT_LOCALE: defaultLocale,
			ALL_LOCALES: allLocales?.join(','),
			STRAPI_PLUGIN_I18N_INIT_LOCALE_CODE: defaultLocale,
		},
	})),
	deploy: {
		apps: {
			host: process.env.DEPLOY_SSH_HOST,
			user: process.env.DEPLOY_SSH_USER,
			ref: process.env.DEPLOY_GIT_REF,
			repo: process.env.DEPLOY_GIT_REPO,
			path: `/projects/${process.env.DEPLOY_SSH_USER}/public_html`,
			'post-setup': DEPLOY_COMMAND,
			'post-deploy': DEPLOY_COMMAND,
		},
	},
};
