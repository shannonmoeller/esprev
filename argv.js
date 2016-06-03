'use strict';

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
process.argv.splice(
    2, 0,
    '--presets', presets.join(),
    '--plugins', plugins.join()
);
