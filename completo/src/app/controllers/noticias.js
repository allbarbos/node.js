module.exports.noticia = function(application, req, res) {
    const cnx = application.config.dbConnection();
    const model = new application.app.models.NoticiaDAO(cnx);

    model.getNoticias(function(err, result) {
        res.render('noticias/noticia', { noticia: result });
    });
};

module.exports.noticias = function(application, req, res) {
    const cnx = application.config.dbConnection();
    var model = new application.app.models.NoticiaDAO(cnx);

    model.getNoticias(function(err, result) {
        res.render('noticias/noticias', { noticias: result });
    });
};