var http = require('http');
http.createServer(function (req, res) {
	res.writeHead(200, {'content-type':
	'text/plain'});
	//lettura file
	var fs = require("fs");
	fs.readFile("test.txt", "utf8", function(error, data) {
		if (error){
			res.write(error);
		}else{
			res.write(data);
		}
		res.end();
	});
	console.log("Lettura file...");
}).listen(8591, function(){
	console.log("Server in ascolto sulla porta: 8591");
}); // 8591
console.log('Server creato');