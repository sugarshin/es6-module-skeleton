#!/usr/bin/sh

npm i -D browserify babel babelify derequire espowerify mochify phantomjs power-assert uglify-js
node ./.bin/init.js $1
mkdir build lib
rm -rf .git .bin
