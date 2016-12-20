var http = require('http');

var server = http.createServer(function (req, res) {
	console.log(req.headers);
	res.end();
});
server.listen(8591, function(){
	console.log("Server in ascolto sulla porta: 8591");
}); // 8591
console.log('Server creato');