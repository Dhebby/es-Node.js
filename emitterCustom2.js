var EventEmitter = require("events").EventEmitter;
var util = require("util");
var fs = require("fs");

function FileReader(fileName) {
	var _self = this; //mi serve x chiamare le funz di callback dentro la funz
	EventEmitter.call(_self);
	_self.on("stats", function() {
		fs.stat(fileName, function(error, stats) {
			if (!error && stats.isFile()) {
				_self.emit("read");
			}
		});
	});
	_self.on("read", function() {
		fs.readFile(fileName, "utf8", function(error, data) {
			//va aggiunto un check sul nome del file
			if (!error && data) {
				console.log(data);
			}
		});
	});
	fs.exists(fileName, function(exists) {
		if (exists) {
			_self.emit("stats");
		}
	});
};

// questa funzione permette a FileReader di ereditare il prototipo di EventEmitter
util.inherits(FileReader, EventEmitter);

var reader = new FileReader("test.txt");