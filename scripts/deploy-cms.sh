git pull

cd apps/cms

yarn --focus --prod --frozen-lockfile

yarn build

supervisorctl -c /etc/projects/supervisor/$USER.conf stop all
