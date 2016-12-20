var express = require("express");
var http = require("http");
var app = express();
app.get("/", function(req, res, next) {
	res.send("Hello home page");
});
app.get("/foo", function(req, res, next) {
	res.send("Hello foo");
});
app.get("/bar", function(req, res, next) {
	res.send("Hello bar");
});
http.createServer(app).listen(8000);