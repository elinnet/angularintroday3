
//express generator

var express = require('express');
var app = express();
// app.use(express.static('.'));
// app.use(express.static('js'));

var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;
});

//for static files, use this location
app.use(express.static(process.cwd() + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

//root path
app.get('/', function (request, response) {
 response.sendFile(__dirname + '/views/index.html');
});

module.exports = server;
