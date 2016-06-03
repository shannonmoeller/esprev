# esprev: Babel 6to5

[![NPM version][npm-img]][npm-url] [![Downloads][downloads-img]][npm-url]

It's [Babel 6.x](http://babeljs.io/docs/plugins/) preconfigured with the [es2015](http://babeljs.io/docs/plugins/preset-es2015/) and [stage-2](http://babeljs.io/docs/plugins/preset-stage-2/) presets, and the [babel-plugin-add-module-exports](https://github.com/59naga/babel-plugin-add-module-exports) plugin to work much like Babel 5.x did.

    $ es next.js
    $ esprev next.js > prev.js

## Install

    $ npm install --global esprev

## Usage

Type `esprev` instead of `babel` when using the [CLI](http://babeljs.io/docs/usage/cli/):

    $ esprev next.js > prev.js
    $ esprev-node next.js
    $ esprev-doctor
    $ esprev-external-helpers

For convenience, `esprev-node` has also been aliased to just `es` to make it incredibly easy to execute the future:

    $ es make.js

## API

Require `esprev` instead of `babel-core` for the [API](http://babeljs.io/docs/usage/api/):

```js
var babel = require('esprev');

babel.transform(code, options);
```

## Config

Babel handles all of the configuration, so you can use a `.babelrc` file or `babel` field in your `package.json` [per usual](http://babeljs.io/docs/usage/babelrc/).

----

© 2016 Shannon Moeller <me@shannonmoeller.com>

Licensed under [MIT](http://shannonmoeller.com/mit.txt)

[downloads-img]: http://img.shields.io/npm/dm/esprev.svg?style=flat-square
[npm-img]:       http://img.shields.io/npm/v/esprev.svg?style=flat-square
[npm-url]:       https://npmjs.org/package/esprev
