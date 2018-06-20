const mysql = require('mysql');

function createDbConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'payfast'
    });
}

module.exports = function() {
    return createDbConnection;
};