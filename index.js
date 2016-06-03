'use strict';

var babelCore = require('babel-core');
var assign = require('object-assign');

var File = babelCore.File;
var initOptions = File.prototype.initOptions;

var presets = [
    require.resolve('babel-preset-es2015'),
    require.resolve('babel-preset-stage-2'),
];

var plugins = [
    require.resolve('babel-plugin-add-module-exports'),
    require.resolve('babel-plugin-transform-runtime'),
];

// We inject presets into the default options when a file is being transformed.
// If the user sets their own presets value, this whole module becomes pretty
// much pointless, but will still do its thing.
File.prototype.initOptions = function (opts) {
    const defaults = {
        presets: presets.slice(),
        plugins: plugins.slice(),
    };

    return initOptions.call(this, assign(defaults, opts));
};

module.exports = babelCore;
