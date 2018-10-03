module.exports.noticia = function(application, req, res) {
    const cnx = application.config.dbConnection();
    const model = new application.app.models.NoticiaDAO(cnx);

    const id = req.query.id_noticia || 0;

    model.getNoticia(id, function(err, result) {
        res.render('noticias/noticia', { noticia: result });
    });
};

module.exports.noticias = function(application, req, res) {
    const cnx = application.config.dbConnection();
    const model = new application.app.models.NoticiaDAO(cnx);

    model.getNoticias(function(err, result) {
        res.render('noticias/noticias', { noticias: result });
    });
};