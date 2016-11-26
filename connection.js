//connection file for api

var mysql = require('mysql');

function Connection() {
	this.pool = null;
	
	this.init = function() 
	{
		this.pool = mysql.createPool(
		{
			connectionLimit	:	100,
			host			: 	'localhost',
			user			: 	'uv_webuser',
			password		: 	'this*is*uv*webuser*108',
			database		: 	'unheardvoices',
			debug 			:	false
		});
	};
	
	this.acquire = function(callback) 
	{
		this.pool.getConnection(function(err, connection) 
		{
			callback(err, connection);
		});
	};
}

module.exports = new Connection();