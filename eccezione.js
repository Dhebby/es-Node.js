var fs = require("fs");
try {
	fs.readFile("", "utf8", function(error, data) {
		if (error) {
			throw error;
		}
		console.log(data);
	}); //usciamo dal try quindi la function nn viene eseguita all'interno di
	//questo contesto ma sucessivamente
	//son solo sicuro ke viene eseguita la readfile
} catch (exception) {
console.log("Eccezione catturata!")
};

//SOLUZIONE:
//sposto il try catch all'interno della funzione di callback