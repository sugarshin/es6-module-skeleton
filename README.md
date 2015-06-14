# es6-module-skeleton

---

---

---

initialize

```
mkdir es6-module-name && cd $_
git clone --depth 1 git@github.com:sugarshin/es6-module-skeleton.git .
sh .bin/init.sh module-name
```

---

---

---

[![Build Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![GitHub version][github-ver-image]][github-ver-url]
[![License][license-image]][license-url]

ES6 module skeleton

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

## API

### `m.method()`

Method

## Contributing

1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request :D

## Test

```
npm test
```

## License

[MIT][license-url]

© sugarshin

[npm-image]: http://img.shields.io/npm/v/es6-module-skeleton.svg
[npm-url]: https://www.npmjs.org/package/es6-module-skeleton
[bower-image]: http://img.shields.io/bower/v/es6-module-skeleton.svg
[bower-url]: http://bower.io/search/?q=es6-module-skeleton
[travis-image]: http://img.shields.io/travis/sugarshin/es6-module-skeleton/master.svg?branch=master
[travis-url]: https://travis-ci.org/sugarshin/es6-module-skeleton
[gratipay-image]: http://img.shields.io/gratipay/sugarshin.svg
[gratipay-url]: https://gratipay.com/sugarshin/
[coveralls-image]: https://coveralls.io/repos/sugarshin/es6-module-skeleton/badge.svg
[coveralls-url]: https://coveralls.io/r/sugarshin/es6-module-skeleton
[github-ver-image]: https://badge.fury.io/gh/sugarshin%2Fes6-module-skeleton.svg
[github-ver-url]: http://badge.fury.io/gh/sugarshin%2Fes6-module-skeleton
[license-image]: http://img.shields.io/:license-mit-blue.svg
[license-url]: http://sugarshin.mit-license.org/
[downloads-image]: http://img.shields.io/npm/dm/es6-module-skeleton.svg
[dependencies-image]: http://img.shields.io/david/sugarshin/es6-module-skeleton.svg
