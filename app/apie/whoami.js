'use strict';
module.exports = function(app){
	app.get('/', function(request, response){
		var headersObj = JSON.stringify(request.headers);
		send.response(headersObj);
	});
}

