var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');

var server = http.createServer(function(request, response) {
	var filePath = false;
	if (request.url == '/') {
		filePath = 'public/index.html';
	} else {
		filePath = 'public' + request.url;
	}
	var absPath = './' + filePath;
	serveStatic(response, absPath);
});
server.listen(8591, function() {
	console.log("Server listening on port 8591.");
});

function serveStatic(response, absPath) {
	fs.exists(absPath, function(exists) {
		if (exists) {
			fs.readFile(absPath, function(err, data) {
				if (err) {
					send404(response);
				} else {
					sendFile(response, absPath, data);
				}
			});
		} else {
			send404(response);
		}
	});
}

function send404(response) {
	response.writeHead(404, {'ContentType':
	'text/plain'});
	response.write('Error 404: resource not found.');
	response.end();
}
function sendFile(response, filePath, fileContents) {
	response.writeHead(
		200,
		{"contenttype" : mime.lookup(path.basename(filePath))}
	);
	response.end(fileContents);
}