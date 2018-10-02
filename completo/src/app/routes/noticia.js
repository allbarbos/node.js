module.exports = function(application) {
    application.get('/noticia', function (req, res) {
        const cnx = application.config.dbConnection();

        var model = new application.app.models.NoticiaDAO(cnx);

        model.getNoticias(function(err, result) {
            res.render('noticias/noticia', { noticia: result });
        });
    });
};
