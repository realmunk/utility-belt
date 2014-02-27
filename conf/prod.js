/** 
 ** ExpressJS is a server framework: http://expressjs.com/
 ** In this case I use it primarily to provide a production environment that's easily reproducable.
**/

var express = require('express'),
  app = express(),
  port = 1337;

app.configure(function() {
  app.use(express.favicon());
  app.use('/assets/', express.static(__dirname + '/assets/'));
  app.use('/src/', express.static(__dirname + '/src/'));
  app.use('/views/', express.static(__dirname + '/views/'));
});


/** 
 ** The following is a "route". If a client tries to access the server on /. It serve index.html 
**/


app.get('/', function (req, res) { 
  res.sendfile(__dirname + '/index.html'); 
}); 

/** 
 ** The following is also a "route". In the following cases we are mocking an API route with some testdata.
**/

app.get('/REST/movie/:type', function (req, res) {
  res.sendfile(__dirname + '/STUB/donnie-darko.json');
});

app.get('/REST/series/:type', function (req, res) {
  res.sendfile(__dirname + '/STUB/walking-dead.json');
});

// Lets start the app on a defined port.
app.listen(port);
console.log("Hosting on localhost:" + port);