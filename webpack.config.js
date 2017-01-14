var path = require('path');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: 'public',
    filename: 'index.js',
    publicPath: '/'
  },
  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : [],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader?presets[]=es2015&presets[]=react'],
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
