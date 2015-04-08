#!/usr/bin/sh

npm i -D browserify babel babelify eslint babel-eslint derequire espower-babel mocha power-assert uglify-js
node .bin/init.js $1
mkdir build lib
rm -rf .git .bin
