const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const jsonImporter = require('node-sass-json-importer');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  devServer: {
    port: 80
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: "file-loader"
      },
      {
        test: /\.(woff|ttf|otf|eot|woff2|svg)$/i,
        loader: "file-loader"
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'STABLE_FEATURE': JSON.stringify(true),
      'EXPERIMENTAL_FEATURE': JSON.stringify(false)
    }),
    new MiniCSSExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[contenthash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[contenthash].css',
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname,'src/assets'), to: 'assets' },
        { from: path.resolve(__dirname,'src/vendors'), to: 'vendors' },
        { from: 'src/favicon.ico' },
        { from: 'src/favicon.png' }
      ]
    }),
  ]
};
