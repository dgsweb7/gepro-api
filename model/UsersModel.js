var mysql = require('../db/mysql');

function UsersModel() 
{

}

UsersModel.prototype.create = function(data, callback) {
}

UsersModel.prototype.findOne = function(_id, callback) {
	mysql.query('SELECT id, name, age FROM users WHERE id = ?', [_id] , function(err, rows) {
		if (err) {
			console.log(err);
		} else {
			console.log(rows);
		}

		callback(err, rows);

	});
}

UsersModel.prototype.findAll = function(callback) {
	mysql.query('SELECT id, name, age FROM users ORDER BY name', function(err, rows) {
		callback(err, rows);
	});
}

UsersModel.prototype.update = function(data, _id, callback) {
	mysql.query('UPDATE users SET name = ?, age = ? WHERE id = ?' + [_id] , function(err, rows) {
		callback(err, rows);
	});
}

UsersModel.prototype.delete = function(_id, callback) {
	mysql.query('DELETE FROM users WHERE id = ? ' [_id], function(err, rows) {
		callback(err, rows);
	});
}

module.exports = new UsersModel();



