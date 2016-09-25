var webpack = require('webpack');
var path = require('path');

var config = require('./webpack.config.common.js')

config.devtool = 'eval'

config.entry.unshift('webpack-hot-middleware/client?reload=true')
config.output.publicPath = '/'

config.plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('development')
    },
    'DEV':true
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
]

config.module.loaders.push({
  test: /\.css$/,
  exclude: [path.join(__dirname, 'node_modules')],
  loaders: ['style','css?modules&localIdentName=[path][name]---[local]---[hash:base64:5]','postcss']
})

config.module.loaders.push({
  test: /\.css$/,
  include: [path.join(__dirname, 'node_modules')],
  loaders: ['style','css']
})

module.exports = config