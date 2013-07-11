var express = require('express');
var fs= require('fs');
var buffer= new Buffer(2048);
var file;
file=fs.readFileSync('index.html');
buffer = file.toString();
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
