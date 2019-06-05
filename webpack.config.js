/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const AutoDllPlugin = require('autodll-webpack-plugin');
const threadLoader = require('thread-loader');

threadLoader.warmup({}, [
  'babel-loader',
]);


module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: '[name].bundle.js?[hash]',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['thread-loader', 'babel-loader']
      },
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader',
          options: {},
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './assets/index.html',
      filename: './index.html',
    }),
    new DashboardPlugin(),
    new CleanWebpackPlugin(),
    new AutoDllPlugin({
      inject: true, // will inject the DLL bundle to index.html
      debug: true,
      filename: '[name]_[hash].js',
      path: './dll',
      entry: {
        vendor: [
          'react',
          'react-dom',
          'axios',
          '@reach/router',
          '@rematch/core',
          'immer',
        ]
      }
    }),
  ],
};
