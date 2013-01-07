var express = require('express');
var app = express();
var port = 8080;

app.configure(function() {
  app.set('view engine', 'jade');
  app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res) {
  res.render("index.jade", {
    layout: false
  });
});

app.listen(port);

console.log('Node server listening on port ' + port);