const path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  /*entry: ['./src/index.js', './src/test.js'],*/
  entry: {
    main: './src/script/index.js',
    test: './src/script/test.js',
    a: './src/script/a.js',
    b: './src/script/b.js',
    c: './src/script/c.js'
  },
  output: {
    filename: 'js/[name].js',
    chunkFilename: '[id].js',
    path: path.resolve(__dirname, 'dist'),
    //path: './dist',
    // publicPath: 'http://cdn.com/'
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html',
      //filename: 'index-[hash].html',
      filename: 'index.html',
      inject: 'body',//head body false
      title: 'webpack test title',
      date: new Date(),
      minify: {
        removeComments: true,
        collapseWhitespace: false,//true 删除空格，false 保留
      },
      chunks: ['main'],
      //excludeChunks: ['a', 'b', 'c']
    }),
    new htmlWebpackPlugin({
      template: './src/index.html',
      //filename: 'index-[hash].html',
      filename: 'a.html',
      inject: 'body',//head body
      title: 'webpack test title a',
      date: new Date(),
      minify: {
        removeComments: true,
        collapseWhitespace: false,//true 删除空格，false 保留
      },
     // chunks: ['main','a'],
     excludeChunks: ['a', 'c']
    }),
    new htmlWebpackPlugin({
      template: './src/index.html',
      //filename: 'index-[hash].html',
      filename: 'b.html',
      inject: 'body',//head body
      title: 'webpack test title b',
      date: new Date(),
      minify: {
        removeComments: true,
        collapseWhitespace: false,//true 删除空格，false 保留
      },
      chunks: ['b']
    }),
    new htmlWebpackPlugin({
      template: './src/index.html',
      //filename: 'index-[hash].html',
      filename: 'c.html',
      inject: 'body',//head body
      title: 'webpack test title c',
      date: new Date(),
      minify: {
        removeComments: true,
        collapseWhitespace: false,//true 删除空格，false 保留
      },
      chunks: ['c']
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