var fs = require("fs");
var path = __dirname + "/logs";
fs.mkdir(path, function(error) {
	if (error) {
		console.error("Errore: " + error.message);
	}else{
		path += "/server";
		fs.mkdir(path, function(error) {
			if (error) {
				console.error("Errore: " + error.message);
			}else{
				var data = "Ciao Marco :)";
				path += "/prova.txt";
				fs.writeFile(path, data, function(error) {
					if (error) {
						console.error("Errore di scrittura: " + error.message);
					} else {
						console.log("Scrittura completata: " + path);
					}
				});
			}
		});
	}
});