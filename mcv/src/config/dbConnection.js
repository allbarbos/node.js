const mysql = require('mysql');

const conn = function() {
    console.log('## Conetactado ao MySQL ##');

    return mysql.createConnection({
        host: 'db',
        user: 'root',
        password: 'root',
        database: 'portal_noticias'
    });
};

module.exports = function() {
    return conn;
}