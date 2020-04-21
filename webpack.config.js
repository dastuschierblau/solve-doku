<<<<<<< HEAD
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  module: {
    rules: [
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      { test: /\.js/, use: 'babel-loader' },
    ]
  },
  output: {
    path: path.resolve( __dirname, './dist' ),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html'
    })
  ],
  devServer: {
    historyApiFallback: true
  },
  mode: 'development'
=======
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  module: {
    rules: [
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      { test: /\.js/, use: 'babel-loader' },
    ]
  },
  output: {
    path: path.resolve( __dirname, './dist' ),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html'
    })
  ],
  devServer: {
    historyApiFallback: true
  },
  mode: 'development'
>>>>>>> 3f70c6cd6911b59b6d1d0277285dbc141ff5fc94
};