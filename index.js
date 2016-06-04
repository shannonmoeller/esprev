'use strict';

var presets = [
    require.resolve('babel-preset-es2015'),
    require.resolve('babel-preset-stage-2'),
];

var plugins = [
    require.resolve('babel-plugin-add-module-exports'),
    require.resolve('babel-plugin-transform-runtime'),
];

var babelCore = require('babel-core');
var assign = require('object-assign');
var File = babelCore.File;
var initOptions = File.prototype.initOptions;

File.prototype.initOptions = function (opts) {
    const defaults = {
        presets: presets.slice(),
        plugins: plugins.slice(),
    };

    return initOptions.call(this, assign(defaults, opts));
};

module.exports = babelCore;
