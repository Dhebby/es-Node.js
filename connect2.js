var http = require("http");
var connect = require("connect");
var app = connect();
// query fa il parsing dell'url richiesto e crea un oggetto query (come proprietà di request)
// che contiene tutti i parametri della query string e i loro valori
app.use(connect.query()); //function usando qs, creiamo noi una proprietà query di request passandole il risultato di qr parse
app.use(function(request, response, next) {
	var query = request.query;
	for (q in query) {
		console.log(q + ' = ' + query[q]);
	}
	next();
});
app.use(function(request, response, next) {
	response.setHeader("ContentType","text/html");
	response.end("Hello HTTP!");
});
http.createServer(app).listen(8000);