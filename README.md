# `esprev`: Babel 6to5

[![NPM version][npm-img]][npm-url] [![Downloads][downloads-img]][npm-url]

It's [Babel 6.x](http://babeljs.io/docs/plugins/) preconfigured to use the [es2015](http://babeljs.io/docs/plugins/preset-es2015/) and [stage-2](http://babeljs.io/docs/plugins/preset-stage-2/) presets to work much like Babel 5.x did.

## Install

    $ npm install --save-dev esprev

## Usage

Type `esprev` instead of `babel` when using the [CLI](http://babeljs.io/docs/usage/cli/):

    $ esprev script.js
    $ esprev-node script.js
    $ esprev-doctor
    $ esprev-external-helpers

## API

Require `esprev` instead of `babel-core` for the [API](http://babeljs.io/docs/usage/api/):

```js
var babel = require('esprev');

babel.transform(code, options);
```

----

© 2016 Shannon Moeller <me@shannonmoeller.com>

Licensed under [MIT](http://shannonmoeller.com/mit.txt)

[downloads-img]: http://img.shields.io/npm/dm/esprev.svg?style=flat-square
[npm-img]:       http://img.shields.io/npm/v/esprev.svg?style=flat-square
[npm-url]:       https://npmjs.org/package/esprev
