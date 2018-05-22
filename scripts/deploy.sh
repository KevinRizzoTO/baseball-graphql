#!/bin/sh

set -e

PROJECT='baseball-graphql'
ALIAS='baseball-graphql.now.sh'
export PATH="./node_modules/.bin:$PATH"

# 1. Wair for deployment ready
echo "Deploying to now..."
URL=$(now --token=$NOW_TOKEN --public -f)

echo "Waiting for URL to be public..."
await-url $URL

now ls --token $NOW_TOKEN

# 2. Alias
echo "Setting up now alias..."
now alias set $URL $ALIAS --token $NOW_TOKEN

# 3. Purge old services
echo "Purging old services..."
now remove --yes --safe --token $NOW_TOKEN $PROJECT

# 4. Scale to 1
echo "Scaling to 1 instance..."
now scale $ALIAS sfo 1 --token $NOW_TOKEN

# 5. Log results
echo "Deployment successful!"
now ls --token $NOW_TOKEN
now alias ls --token $NOW_TOKEN