function add(x, y, cb) {
	process.nextTick(function(){
		cb(x + y);
	});
}
add(2, 3, console.log);
console.log("La somma è:");

//rende asincrona la chiamata a console.log