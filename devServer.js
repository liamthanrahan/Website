var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true
}));

app.use(require('webpack-hot-middleware')(compiler));

// send all requests to index.html so browserHistory works
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

var PORT = process.env.PORT || 3000
app.listen(PORT, 'localhost', function(err) {
  if (err) {
    console.log(err);
  } else {
  	console.log('Listening at http://localhost:' + PORT);
  }
});
