'use strict';

var babelCore = require('babel-core');
var assign = require('object-assign');

var File = babelCore.File;
var initOptions = File.prototype.initOptions;
var presets = [
    require('babel-preset-es2015'),
    require('babel-preset-stage-2')
];

// We inject presets into the default options when a file is being transformed.
// If the user sets their own presets value, this whole module becomes pretty
// much pointless, but will still work.
File.prototype.initOptions = function (opts) {
    opts = assign({presets: presets.slice()}, opts);

    return initOptions.call(this, opts);
};

module.exports = babelCore;
