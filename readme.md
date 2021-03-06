bytecode
===

[![Build status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]
[![Dependency Status][david-image]][david-url]
[npm-image]: https://img.shields.io/npm/v/bytecode.svg?style=flat-square
[npm-url]: https://npmjs.org/package/bytecode
[downloads-image]: http://img.shields.io/npm/dm/bytecode.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/bytecode
[david-image]: http://img.shields.io/david/chunpu/bytecode.svg?style=flat-square
[david-url]: https://david-dm.org/chunpu/bytecode

[![Test coverage][coveralls-image]][coveralls-url]

Decode or Encode **utf8 byte code** rather than char code, support all unicode

Installation
---

```sh
npm i bytecode
```

Usage
---

```js
var byteCode = require('bytecode')

byteCode.decode('中文')
// => [228, 184, 173, 230, 150, 135]

byteCode.encode([97, 98, 99])
// => 'abc'
```

License
---

[![License][license-image]][license-url]

[travis-image]: https://img.shields.io/travis/chunpu/bytecode.svg?style=flat-square
[travis-url]: https://travis-ci.org/chunpu/bytecode
[coveralls-image]: https://img.shields.io/coveralls/chunpu/bytecode/gh-pages.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/chunpu/bytecode
[license-image]: http://img.shields.io/npm/l/bytecode.svg?style=flat-square
[license-url]: #
