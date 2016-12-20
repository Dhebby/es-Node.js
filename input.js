process.stdin.once("data", function(data){ //ascoltatore input
	console.log(data.toUpperCase()); //grazie a setEncoding nn devo mettere il toString
	process.stdin.pause();
});

console.log("Inserisci un messaggio: ");
process.stdin.setEncoding("utf8"); //specifica la codifica dello standard input
process.stdin.resume();