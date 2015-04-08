# es6-module-skeleton

---

---

---

initialize

```shell
mkdir es6-module-name && cd $_
git clone --depth 1 git@github.com:sugarshin/es6-module-skeleton.git .
sh .bin/init.sh module-name
```

---

---

---

[![Build Status](https://travis-ci.org/sugarshin/es6-module-skeleton.svg?branch=master)](https://travis-ci.org/sugarshin/es6-module-skeleton) [![Coverage Status](https://coveralls.io/repos/sugarshin/es6-module-skeleton/badge.svg)](https://coveralls.io/r/sugarshin/es6-module-skeleton) [![GitHub version](https://badge.fury.io/gh/sugarshin%2Fes6-module-skeleton.svg)](http://badge.fury.io/gh/sugarshin%2Fes6-module-skeleton) [![License](http://img.shields.io/:license-mit-blue.svg)](http://sugarshin.mit-license.org/)

ES6 Module skeleton

```
npm i module-name
```

## Usage

```js
import ModuleName from 'module-name';

new ModuleName(opts);
```

### Config

default options

```js
// default
{
  prop: 'val'
}
```

## api

### `m.method()`

Method

## Contributing

[Babel](//babeljs.io/)

[Browserify](//browserify.org/)

[Mocha](//mochajs.org/)

[power-assert](//github.com/twada/power-assert)

```
npm test
```

## License

[MIT](http://sugarshin.mit-license.org/)

© sugarshin
