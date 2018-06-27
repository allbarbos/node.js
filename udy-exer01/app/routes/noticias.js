const cnx = require('../../config/connection')();

module.exports = function (app) {
  app.get('/noticias', function(req, res){
    cnx.query('select * from noticias', function (error, result) {
      res.render('noticias/noticias', { 'noticias' : result });
    });
  });
}