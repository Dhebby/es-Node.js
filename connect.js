var http = require("http");
var connect = require("connect");
var app = connect();
app.use(function(request, response, next) {
	response.setHeader("ContentType","text/html");
	response.end("Hello HTTP!");
});
http.createServer(app).listen(8000);