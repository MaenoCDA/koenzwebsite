const setup = `source ~/.profile; \
  nvm install && \
  nvm use && \
  echo Y | corepack enable && \
  yarn && \
  yarn setup && \
  DEPLOY_APP_NAME_PREFIX=${process.env.DEPLOY_APP_NAME_PREFIX || 'prefix'} pm2 start ecosystem.config.js \
	${process.env.PM2_PLUS_KEYS ? `&& pm2 link ${process.env.PM2_PLUS_KEYS}` : ''} \
	&& pm2 save`;

const deploy = `source ~/.profile \
  && yarn \
	&& yarn deploy \
	&& pm2 kill \
	&& DEPLOY_APP_NAME_PREFIX=${process.env.DEPLOY_APP_NAME_PREFIX || 'prefix'} pm2 start ecosystem.config.js \
	${process.env.PM2_PLUS_KEYS ? `&& pm2 link ${process.env.PM2_PLUS_KEYS}` : ''} \
	&& pm2 save`;

module.exports = {
	apps: [
		{
			name: process.env.DEPLOY_APP_NAME_PREFIX + '-cms',
			script: 'server.js',
			cwd: './apps/cms',
			exec_mode: 'cluster',
			instances: 2,
			appendEnvToName: true,
			max_restarts: 10,
			restart_delay: 4000,
		},
	],
	deploy: {
		apps: {
			host: process.env.DEPLOY_SSH_HOST,
			user: process.env.DEPLOY_SSH_USER,
			ref: process.env.DEPLOY_GIT_REF,
			repo: process.env.DEPLOY_GIT_REPO,
			path: `/projects/${process.env.DEPLOY_SSH_USER}/public_html`,
			'post-setup': setup,
			'post-deploy': deploy,
		},
	},
};
