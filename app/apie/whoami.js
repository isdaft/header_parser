'use strict';
module.exports = function(app){
	app.get('/', function(request, response){
		var headersObj = request.headers;
		//response.writeHead(200, {'Content-Type': 'application/json' });
		response.setHeader('Content-Type', 'application/json');
		var ipaddress = request.headers["x-forwarded-for"];
		var language = request.headers["accept-language"];
		var language = language.split(',')[0];
		var software = request.headers["user-agent"];
		var software = software.split('(')[1];
		var software = software.split(')')[0];
		var out = {"ipaddress": ipaddress, "language": language, "software": software};	
		response.send(JSON.stringify(out));
	});
}

