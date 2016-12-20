var tot = 0;
process.argv.forEach(function(arg, index) {
	if(index>1){
		tot = tot + Number(arg);
	}
});
console.log(tot);