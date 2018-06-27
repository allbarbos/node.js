const mysql = require('mysql');

module.exports = function (app) {
  app.get('/noticias', function(req, res){
    var cnx = mysql.createConnection({
      host : 'localhost',
      user: 'root',
      password: '',
      database: 'portal_noticias'
    });

    cnx.query('select * from noticias', function (error, result) {
      res.render('noticias/noticias', { 'noticias' : result });
    });
  });
}