var Sequelize = require('sequelize');

var sequelize = new Sequelize("sequelizeBurgers_db", "root", "Thouman1", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		port:3306,
		host: 'localhost',
		user: 'root',
		password: 'Thouman1',
		database: 'sequelizeBurgers_db'
	});
};

// Exports the connection for other files to use
module.exports = sequelize;