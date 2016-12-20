var http = require('http');
http.createServer(function (req, res) {
	res.writeHead(200, {'content-type':
	'text/plain'});
	res.write("Hello Node!");
	res.end();
}).listen(8591, function(){
	console.log("Server in ascolto sulla porta: 8591");
}); // 8591
console.log('Server creato');