var http = require('http');
http.createServer(function (req, res) {
	res.writeHead(200, {'contenttype':
	'text/plain'});
	res.end("Hello Node!");
	}).listen(8591);
while (true);
//nessuna risposta xk il server node è impegnato in un ciclo infinito