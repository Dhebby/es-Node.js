var results = [];
// funzione 1
setTimeout(function() {
	console.log("Task 1");
	results[1] = 1;
	// funzione 2
	setTimeout(function() {
		console.log("Task 2");
		results[2] = 2;
	}, 100);
}, 200);

//funz1 stampata prima di funz2