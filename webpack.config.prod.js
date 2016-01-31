var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var config = require('./webpack.config.common.js')

process.env.NODE_ENV = 'production'
process.env.BABEL_ENV = 'production'

config.devtool = 'source-map'

config.plugins = [
  new ExtractTextPlugin('index.css'),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.AggressiveMergingPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    },
    'DEV':false
  }),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: true,
    },
    compress: {
      warnings: true,
    },
    output: {
      comments: true
    }
  })
]

config.module.loaders.push({
  test: /\.css$/,
  exclude: path.join(__dirname, 'node_modules'),
  loader: ExtractTextPlugin.extract('style','css?modules&localIdentName=[path][name]---[local]---[hash:base64:5]!postcss')
})
config.module.loaders.push({
  test: /\.css$/,
  include: path.join(__dirname, 'node_modules'),
  loader: ExtractTextPlugin.extract('style','css')
})
module.exports = config