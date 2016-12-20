var http = require('http');
http.createServer(function (req, res) {
	res.writeHead(200, {'content-type':'text/plain'});
	
	var count = 0;
	function writeNumbers(res){
		for (var i = 0; i<100; i++){
			count++;
			res.write(count.toString() + "\n");
		};
	}
	writeNumbers(res);

	res.end();
}).listen(8591, function(){
	console.log("Server in ascolto sulla porta: 8591");
}); // 8591
console.log('Server creato');