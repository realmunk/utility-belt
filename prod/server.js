var express = require('express'),
  jade = require('jade'),
  app = express(),
  port = 1337;

app.configure(function() {
  app.use(express.favicon());
  app.use('/assets/', express.static(__dirname + '/assets/'));
  app.use('/src/', express.static(__dirname + '/src/'));
});


app.get('/', function (req, res) { 
  res.sendfile(__dirname + '/index.html');
}); 

app.get('/REST/movie/:type', function (req, res) {
  res.sendfile(__dirname + '/STUB/donnie-darko.json');
});

app.get('/REST/series/:type', function (req, res) {
  res.sendfile(__dirname + '/STUB/walking-dead.json');
});

app.listen(port);

console.log("Server is listening on port:" + port);