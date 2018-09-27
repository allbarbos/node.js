module.exports = function(app) {
    app.get('/noticia', function (req, res) {
        const cnx = app.config.dbConnection();

        cnx.query('select * from noticias where id_noticia = 2', function(err, result){
            res.render('noticias/noticia', { noticia: result });
        });
    });
};
