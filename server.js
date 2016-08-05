var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var bodyParser = require('body-parser');
var port = PROCESS.ENV.PORT || 8888;
var routes = require('./routes.js');

server.listen(port);

app.use(bodyParser.json());
app.use(express.static(__dirname));
routes(app);
