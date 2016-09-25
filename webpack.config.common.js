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
      test: /\.png$/,
      loaders: ['file-loader'],
      include: path.join(__dirname, 'node_modules', 'leaflet')
    },{
      test: /\.(json|csv|png|jpg|svg)$/,
      loaders: ['file']
    }]
  },
  resolve: {
    modulesDirectories: ['web_modules', 'node_modules', 'src', 'src/components', 'data', 'images', 'scripts']
  },
  postcss: function() {
    return [
      require('postcss-custom-properties'),
      require('postcss-nested'),
      require('autoprefixer'),
      require('postcss-easings'),
      require('lost'),
      require('postcss-color-yiq'),
      require('colorguard')({
        ignore: ['#FFF', '#000000', '#FFFFFF', 'rgba(0,0,0,0.2)', 'rgba(0,0,0,0.8)', 'white', 'rgb(240, 240, 240)', 'rgb(228, 228, 228)']
      }),
      require('postcss-responsive-images'),
      require('postcss-circle'),
      require('postcss-font-magician'),
      require('postcss-pseudo-content-insert'),
      require('postcss-triangle')
    ];
  }
};
