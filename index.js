var express = require('express');
var lyrics = require('./lyrics');
var app = express();

app.use(express.static(__dirname + '/public'));

// respond with "Hello World!" on the homepage
app.get('/', function (req, res) {
  res.send(lyrics[Math.floor(Math.random() * lyrics.length)]);
});
app.get('/api', function (req, res) {
  res.send(lyrics[Math.floor(Math.random() * lyrics.length)]);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
