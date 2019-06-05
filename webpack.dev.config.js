/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const merge = require('webpack-merge');
const base = require('./webpack.config.js');

module.exports = merge(base, {
  mode: 'development',
});
