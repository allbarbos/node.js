module.exports = function (app) {
  app.get('/noticias', function(req, res){
    const cnx = app.config.connection();
    
    cnx.query('select * from noticias', function (error, result) {
      res.render('noticias/noticias', { 'noticias' : result });
    });
  });
}