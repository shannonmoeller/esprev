'use strict';

var presets = [
    require.resolve('babel-preset-es2015'),
    require.resolve('babel-preset-stage-2'),
];

var plugins = [
    require.resolve('babel-plugin-add-module-exports'),
    require.resolve('babel-plugin-transform-runtime'),
];

process.argv.splice(
    2, 0,
    '--presets', presets.join(','),
    '--plugins', plugins.join(',')
);
