var fs = require("fs");
fs.readFile("test.txt", "utf8", function(error, data) {
	if (error)
		console.log(error);
	else
		console.log(data);
});
console.log("Lettura file...");