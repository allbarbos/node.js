const mysql = require('mysql');

const cnx = function () {
  console.log('BD - Conexão Criada')
  return mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password: '',
    database: 'portal_noticias'
  });
}

module.exports = function () {
  return cnx;
}
