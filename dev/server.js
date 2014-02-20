var express = require('express'),
  jade = require('jade'),
  app = express(),
  port = 1337;

app.configure(function() {
  app.set('views', __dirname + '/views'); 
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use('/assets/', express.static(__dirname + '/assets/'));
  app.use('/src/', express.static(__dirname + '/src/'));
  app.use('/views/', express.static(__dirname + '/views/'));
});


app.get('/', function (req, res) { 
  res.render('index', { 
    pretty: true, 
    developing: true 
  }); 
}); 

app.get('/hei', function (req, res) { 
  res.render('hei', { 
    pretty: true, 
    developing: true 
  }); 
}); 

app.get('/REST/MOVIES/:type', function (req, res) {
  res.sendfile(__dirname + '/STUB/frozen.json');
});

app.listen(port);

console.log("Server is listening on port:" + port);