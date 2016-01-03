'use strict';
module.exports = function(app){
	app.get('/', function(request, response){
		var headersObj = request.headers;
		response.send(JSON.stringify(headersObj));
	});
}

