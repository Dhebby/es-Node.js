//sol prof:
var i = 0;
function compute() {
	if (i < 4) {
		for (var j=0; j<5; j++)
			console.log(i+1, j+1);
		i++;
		process.nextTick(compute); //stampo alla fine anke se timer 0
	}
}

function callback(){
	console.log("compute() in esecuzione");
}
setTimeout(callback, 0);
compute();