var http = require('http');
http.createServer(function (req, res) {
	res.writeHead(200, {'content-type':'text/plain'});
	res.end("Hello Node!");
	console.log(req.url);
}).listen(8591);
console.log('Server creato');
//fa una doppia richiesta, anke x l'iconcina