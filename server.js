var express = require('express')
var path = require('path')

var app = express()

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'dist')))

// send all requests to index.html so browserHistory works
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

var PORT = process.env.PORT || 3000
app.listen(PORT, 'localhost', function(err) {
  if (err) {
    console.log(err);
  } else {
  	console.log('Listening at http://localhost:' + PORT);
  }
});
