var EventEmitter = require("events").EventEmitter;
var util = require("util");
var fs = require("fs");

function FileReader() {
	EventEmitter.call(this);
	this.letto = false;

	this.readFile = function(filename) {
		if(this.letto){
			this.emit("giaLetto");
		}else{
			fs.readFile(filename,"utf8", function(error, data) {
				//va aggiunto un check sul nome del file
				if (error)
					console.log(error);
				else{
					console.log(data);
				}
			});
			this.letto = true;
		}
	};
};

// questa funzione permette a FileReader di ereditare il prototipo di EventEmitter
util.inherits(FileReader, EventEmitter);

var fRead = new FileReader();
fRead.on("giaLetto", function(result) {
	console.log("File gia' letto");
});

fRead.readFile("text.txt"); //legge file passato
fRead.readFile("text.txt");//si accorge ke è gia stata chiamata e lancia l'evento "giaLetto"