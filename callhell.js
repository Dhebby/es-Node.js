var fs = require("fs");
var fileName = "test.txt";
fs.exists(fileName, function(exists) { // non so se file o directory esiste
	if (exists) {
		fs.stat(fileName, function(error, stats) { // x capire se file o dir
			if (error) {
				throw error;
			}
			if (stats.isFile()) { //riempito cn le info x capire se file o dir
				fs.readFile(fileName, "utf8", function(error, data) { //leggiamo file
					if (error) {
						throw error;
					}
					console.log(data);
				});
			}
		});
	}
});