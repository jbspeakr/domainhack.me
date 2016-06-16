#!/bin/bash
rm -rf out || exit 0;
mkdir out;
echo "Starting to deploy..."
( cd out
 git init
 git config user.name ${GIT_NAME}
 git config user.email ${GIT_EMAIL}
 cp -r ../dist/* ./dist/
 cp ../index.html ./index.html
 git add .
 git commit -m "Deployed to Github Pages"
 git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-test > /dev/null 2>&1
)
