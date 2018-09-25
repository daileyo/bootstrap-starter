var express = require('express');
var app = express();

app.use('/css', express.static(__dirname + 'node_modules/bootstrap/dist/css/bootstrap.css'));