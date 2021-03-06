#!/usr/bin/env node

var fs = require('fs');
var args = process.argv;
var pkg = './package.json';

var replaceNames = function(data, name, filePath) {
  var txt = data.replace(/es6-module-skeleton/g, name);

  fs.writeFile(filePath, txt, function(err) {
    if (err) {
      console.error(err);
    }
  });
};

fs.readFile(pkg, {encoding: 'utf-8'}, function(err, data) {
  if (err) {
    console.error(err);
  } else {
    replaceNames(data, args[2], pkg);
  }
});

fs.rename('./src/module-name.js', './src/' + args[2] + '.js');
