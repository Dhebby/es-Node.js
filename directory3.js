var fs = require("fs");
var path = __dirname + "/logs";

function rmdirNoEmpty(path){
	if(fs.existsSync(path)){
		fs.readdirSync(path).forEach(function(file){
			var f = path + "/" + file;
			var stats = fs.statSync(f);
			if(stats.isDirectory()){
				rmdirNoEmpty(f); //ricorsione
			}else{
				fs.unlinkSync(f); //elimino file nella dir
			}
		});
		fs.rmdirSync(path); //rimuovo dir
	}
}

rmdirNoEmpty(path);