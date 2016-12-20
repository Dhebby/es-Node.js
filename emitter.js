//uso ascoltatore
var events = require("events");
var emitter = new events.EventEmitter();
var data = "test data";
emitter.on("dataAdded", function(data) {
	console.log("Dati: " + data);
});
console.log("Prima dell'evento");
emitter.emit("dataAdded", data);
console.log("Dopo l'evento");