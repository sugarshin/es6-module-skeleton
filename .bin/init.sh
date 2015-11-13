#!/usr/bin/sh

npm i -D babel-cli babel-eslint babel-preset-es2015 eslint eslint-config-sugarshin eslint-plugin-babel espower-babel mocha power-assert
node .bin/init.js $1
mkdir build lib
rm -rf .git .bin
