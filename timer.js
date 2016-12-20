var results = [];
// funzione 1
setTimeout(function() {
	console.log("Task 1");
	results[1] = 1;
}, 200);
// funzione 2
setTimeout(function() {
	console.log("Task 2");
	results[2] = 2;
}, 100);

//funz2 stampata prima di funz1