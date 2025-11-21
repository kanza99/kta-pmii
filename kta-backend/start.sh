#!/bin/sh
set -e
if [ "${RUN_MIGRATIONS:-false}" = "true" ]; then
  echo "Running migrations..."
  node migrate.js
fi

echo "Starting app..."
exec node index.js
