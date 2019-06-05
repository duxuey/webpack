const path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  /*entry: ['./src/index.js', './src/test.js'],*/
  entry: {
    main: './src/index.js',
    test: './src/test.js'
  },
  output: {
    filename: 'js/[name].js',
    chunkFilename: '[id].js',
    path: path.resolve(__dirname, 'dist'),
    //path: './dist'
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html',
      //filename: 'index-[hash].html',
      filename: 'index.html',
      inject: 'head',
      title: 'webpack test title',
      date: new Date()
    })
  ],
  mode: 'development',
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader','css-loader'] },
      { test: /\.ts$/, use: ['ts-loader']}
    ]
  }
};