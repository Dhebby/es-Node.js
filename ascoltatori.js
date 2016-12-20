var http = require('http');
var events = require("events");
var request = new events.EventEmitter();
var listening = new events.EventEmitter();

request.on("serverRequest", function (req, res) {
	res.writeHead(200, {'content-type':'text/plain'});
	res.write("Hello Node!");
	res.end();
});

listening.on("ascoltoPorta", function(porta){
	console.log("Server in ascolto sulla porta: "+porta);
});

http.createServer(function (req, res) {
	request.emit("serverRequest")
}).listen(porta = 8591, function(){
	listening.emit("ascoltoPorta", porta)
}); // 8591
console.log('Server creato');