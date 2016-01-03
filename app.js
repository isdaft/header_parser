'use strict';
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var api = require('./app/apie/whoami.js');

api(app)

app.listen(port, function (){
	console.log("...buzzing..on..." + port);
});
