'use strict';

require('babel-polyfill');
require('babel-register')({
    presets: [
        require.resolve('babel-preset-es2015'),
        require.resolve('babel-preset-stage-2'),
    ],
});
