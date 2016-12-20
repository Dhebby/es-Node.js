var index = 0;

function test(name){
	console.log((index++) + " " + name);
}

setImmediate(function(){
	test("setImmediate");
});

setTimeout(function(){
	test("setTimeout");
}, 0);

process.nextTick(function(){ //provoca la chiamata della callback al ciclo successivo
	test("nextTick");
});

test("directCall"); //sincrono quindi chiamato x primo

/*
0 directCall
1 nextTick
2 setTimeout
3 setImmediate
*/