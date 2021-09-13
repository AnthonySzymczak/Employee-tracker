const mysql2 = require("mysql2");
const util = require("util");

var connection = mysql2.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "sHOW_tIME_1024",
    database: "employee_db"
});

connection.connect();
// connection.query = util.promisify(connection.query);

module.exports = connection;