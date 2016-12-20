var mysql = require("mysql");
var pool = mysql.createPool({
	"host": "localhost",
	"user": "eleonora",
	"password": "eleonora",
	"database": "dbname" });
pool.getConnection(function(error, connection) {
	if (error) {
		return console.error(error);
	}
	var sql = "INSERT INTO Person (SSN, LastName, FirstName, Gender, City, State)" +
		"VALUES ('123456789',
		'Pluck', 'Peter', 'M', 'Pittsburgh', 'PA')," +
		"('234567890',
		'Johnson', 'John', 'M', 'San Diego', 'CA')," +
		"('345678901',
		'Doe', 'Jane', 'F', 'Las Vegas', 'NV')," +
		"('456789012',
		'Doe', 'John', 'M', 'Las Vegas', 'NV');"

	connection.query(sql, function(error, results) {
		if (error) {
			return console.error(error);
		}
		console.log(results);
		connection.release( );
	});
});