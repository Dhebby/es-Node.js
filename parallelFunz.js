var async = require("async");
async.parallel({
	"funz1": function(callback) {
		setTimeout(function() {
			console.log("Task 1");
			callback(new Error("Errore nella funz 1"), 1);
		}, 200);
	},
	"funz2": function(callback) {
		setTimeout(function() {
			console.log("Task 2");
			callback(null, 2);
		}, 100);
	}
}, function(error, results) {
	if (error)
		console.log(error.message);
	else
	console.log(results);
});