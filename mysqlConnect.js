var mysql = require("mysql");
var connection = mysql.createConnection({
	"host": "localhost",
	"port": 3306,
	"user": "eleonora",
	"password": "eleonora",
	"database": "dbname"
});

connection.connect(function(error) {
	if (error) {
		return console.error(error);
	}
// Connessione stabilita
});