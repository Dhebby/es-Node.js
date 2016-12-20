var http = require('http');

var options = {
	host: 'localhost', //server a cui collegarsi, indir ip
	port: 8591, //porta su cui il server ascolta, nella listen
	path: '/', //risorsa richiesta dal client
	method: 'GET' //metodo di richiesta, get o post
};

setInterval(function(){
	http.request(options, function(res){
		res.on("data", function(data){
			process.stdout.write(data);
		});
	}).end();
	console.log('richiesta effettuata');
}, 8000);