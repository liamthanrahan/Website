var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: ''
  },
  plugins: [],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    },{
      test: /\.(json|csv|png|jpg|svg)$/,
      loaders: ['file']
    },{
      test: /\.css$/,
      exclude: [path.join(__dirname, 'node_modules')],
      loaders: ['style','css?modules&localIdentName=[path][name]---[local]---[hash:base64:5]','postcss']
    },{
      test: /\.css$/,
      include: [path.join(__dirname, 'node_modules')],
      loaders: ['style','css']
    }]
  },
  resolve: {
    modulesDirectories: ['node_modules', 'src', 'src/components', 'images', 'scripts']
  },
  postcss: function() {
    return [
      require('postcss-nested'),
      require('autoprefixer'),
      require('lost')
    ];
  }
};
