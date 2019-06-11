const path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  /*entry: ['./src/index.js', './src/test.js'],*/
  /* entry: {
    main: './src/script/index.js',
    test: './src/script/test.js',
    a: './src/script/a.js',
    b: './src/script/b.js',
    c: './src/script/c.js'
  }, */
  context: __dirname,
  entry: ['babel-polyfill', './src/app.js'],
  output: {
    filename: 'js/[name].bundle.js',
    chunkFilename: '[id].js',
    path: path.resolve(__dirname, 'dist'),
    //path: './dist',
    // publicPath: 'http://cdn.com/'
  },
  plugins: [
    /* new htmlWebpackPlugin({
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
    }) */

    new htmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: 'body'
    })
  ],
  mode: 'development',
  module: {
    rules: [
      { 
        test: /\.css$/, 
        //style-loader!css-loader  style-loader要在css-loader前面
        // style-loader!css-loader!postcss-loader   
        use: ['style-loader',
          {
            loader: 'css-loader',
            options: {importLoaders: 1}  //importLoaders的用法
          },
         'postcss-loader'
        ]  
      },
      { 
        test: /\.ts$/, 
        use: ['ts-loader']
      },
      { 
        test: /\.js$/, 
        include: path.resolve(__dirname, 'src'),
        exclude: path.resolve(__dirname, 'node_modules'), 
        use: {
          loader: 'babel-loader',
          options: {  //注：loader+options写法
            babelrc: false,
            presets: ['@babel/preset-env']
          }
        }
        /* "babel": {
          "presets": ["@babel/preset-env"]
        },  // 此处是写在package.json中的配置，两处都可以配置，也可以新建.babelrc 文件，在该文件中配置*/
      }
    ]
  }
};