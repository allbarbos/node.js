module.exports = function(application) {
    application.get('/noticia', function (req, res) {
        const cnx = application.config.dbConnection();

        var model = application.app.models.noticiasModel;

        model.getNoticias(cnx, function(err, result) {
            res.render('noticias/noticia', { noticia: result });
        });
    });
};
