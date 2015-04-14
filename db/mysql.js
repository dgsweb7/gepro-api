var mysql = require('mysql');

var connection = mysql.createConnection({
	host : 'localhost',
	user: 'root',
	password: '',
	database: 'nodecrud',
	charset: 'utf8'
});

connection.connect();

module.exports = connection;

