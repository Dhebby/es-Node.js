var async = require("async");
async.series([
	function(callback) {
		setTimeout(function() {
			console.log("Task 1");
			callback(null, 1);
		}, 200);
	},
	function(callback) {
		setTimeout(function() {
			console.log("Task 2");
			callback(null, 2);
		}, 100);
	}
], function(error, results) {
	console.log(results);
});

//eseguita prima funz1 e poi funz2