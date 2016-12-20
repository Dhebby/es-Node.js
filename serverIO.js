var http = require('http');
var fs = require("fs");

http.createServer(function (req, res) {
	var path = __dirname + "/request.txt";
	var data = "\n"+req.url;
	fs.appendFile(path, data, function(error){
		if(error){
			console.error("Errore di scrittura: "+error.message);
		}else{
			console.log("Scrittura completata: "+path);
		}
	});
	res.writeHead(200, {'content-type':'text/plain'});
	res.write("Hello Node!");
	res.end();
}).listen(8591, function(){
	console.log("Server in ascolto sulla porta: 8591");
}); // 8591
console.log('Server creato');