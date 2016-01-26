'use strict';

var presets = [
    require.resolve('babel-preset-es2015'),
    require.resolve('babel-preset-stage-2')
];

// We inject presets into the default options when a file is being transformed.
// If the user sets their own presets value, this whole module becomes pretty
// much pointless, but will still do its thing.
process.argv.splice(2, 0, '--presets', presets.join());
