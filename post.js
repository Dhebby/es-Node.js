var http = require("http");
var qs = require("querystring");
var body = qs.stringify({
	foo: "bar",
	baz: [1, 2]
});
var request = http.request({
	hostname: "localhost",
	port: 8591,
	path: "/",
	method: "POST",
	headers: {
		"ContentType" : "application/xwwwformurlencoded",
		"ContentLength" : Buffer.byteLength(body) //x sapere quantidati gli stiamo passando
	}
}, function(response) {
	response.setEncoding("utf8");
	response.on("data", function(data) {
		process.stdout.write(data);
	});
	response.on("end", function() {
		console.log();
	});
});
request.end(body);