function cbExists(exists) {
	if (exists) {
		fs.stat(fileName, cbStat);
	}
}
function cbStat (error, stats) {
	if (error) {
		throw error;
	}
	if (stats.isFile()) {
		fs.readFile(fileName, "utf8", cbData);
	}
}
function cbData(erorr, data) {
	if (error) {
		throw error;
	}
	console.log(data);
}

fs.exists(fileName, cbExists);