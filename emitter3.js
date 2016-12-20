var EventEmitter = require("events").EventEmitter;
var util = require("util");

function DataEmitter() {
	EventEmitter.call(this);
	this.addData = function(data) {
		this.emit("dataAdded", data.toUpperCase());
	};
};

// questa funzione permette a DataEmitter di ereditare il prototipo di EventEmitter
util.inherits(DataEmitter, EventEmitter);

var dataEmit = new DataEmitter();
dataEmit.on("dataAdded", function(result) {
	console.log(result);
});
dataEmit.addData("test");