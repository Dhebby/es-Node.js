var async = require("async");
// le funzioni possono essere passate solo come array
async.waterfall([
	function(callback) {
		callback(null, Math.random(), Math.random());
	},
	function(a, b, callback) {
		callback(null, a * a + b * b);
	},
	function(cc, callback) {
		callback(null, Math.sqrt(cc));
	}
], function(error, c) {
	console.log(c);
});