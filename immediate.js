//sol prof:
var i = 0;
function compute() {
	if (i < 4) {
		for (var j=0; j<5; j++)
			console.log(i+1, j+1);
		i++;
		setImmediate(compute);
	}
}
function callback(){
	console.log("compute() in esecuzione");
}
setTimeout(callback, 33); //dai 30 ai 35 genera un evento quando passa timer
compute();
