mysql_log() {
	local type="$1"; shift
	# accept argument string or stdin
	local text="$*"; if [ "$#" -eq 0 ]; then text="$(cat)"; fi
	local dt; dt="$(date --rfc-3339=seconds)"
	printf '%s [%s] [Entrypoint]: %s\n' "$dt" "$type" "$text"
}

create_more_databases() {
    local databases=( $MYSQL_DATABASES )
    local db
    for db in "${databases[@]}"; do
				mysql_log 'Note' "Creating extra Database '$db'"

				if [ -n "$MYSQL_USE_LOCALHOST" ]; then
					mysql --host 127.0.0.1 --port 3306 -u root -p$MYSQL_ROOT_PASSWORD -e "CREATE DATABASE IF NOT EXISTS \`$db\` ;"

					if [ -n "$MYSQL_USER" ]; then
							mysql_log 'Note' "Granting access to extra database '$db' for user '$MYSQL_USER'"
							mysql --host 127.0.0.1 --port 3306 -u root -p$MYSQL_ROOT_PASSWORD -e "GRANT ALL ON \`${db//_/\\_}\`.* TO '$MYSQL_USER'@'%' ;"
					fi
				else
					mysql -u root -p$MYSQL_ROOT_PASSWORD -e "CREATE DATABASE IF NOT EXISTS \`$db\` ;"

					if [ -n "$MYSQL_USER" ]; then
							mysql_log 'Note' "Granting access to extra database '$db' for user '$MYSQL_USER'"
							mysql -u root -p$MYSQL_ROOT_PASSWORD -e "GRANT ALL ON \`${db//_/\\_}\`.* TO '$MYSQL_USER'@'%' ;"
					fi
				fi

    done
}

if [ -n "$MYSQL_DATABASES" ]; then
    create_more_databases
fi
