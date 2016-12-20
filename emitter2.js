//stessa cosa ma con funzioni asincrone
var events = require("events");
var emitter = new events.EventEmitter();
emitter.on("dataAdded", function(data) {
	console.log("Dati: " + data);
});
function f() {
	console.log("foo");
	setTimeout(g, 0);
	h();
}
function g() {
	console.log("bar");
}
function h() {
	//la gestione dell'evento è sincrona
	emitter.emit("dataAdded", "test data");
	console.log("blix");
}
f();
//f, h, g
//h chiamato prima di g xk g dentro una funzione asincrona