
// eslint-disable-next-line import/no-extraneous-dependencies
const merge = require('webpack-merge');
// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');
const base = require('./webpack.config.js');

module.exports = merge(base, {
  mode: 'production',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'lib', // 指定公共 bundle 的名称。
    }),
  ],
});
