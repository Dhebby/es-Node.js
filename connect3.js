var http = require("http");
var connect = require("connect");
var app = connect();
app.use(connect.bodyParser());
app.use(function(request, response, next) {
	var body = request.body;
	for (b in body) {
		response.write(b + ' = ' + body[b] + "\n");
	}
	response.end();
});
http.createServer(app).listen(8000);