module.exports = function(application) {
    application.get('/noticias', function (req, res) {
        const cnx = application.config.dbConnection();
        var model = application.app.models.noticiasModel;

        model.getNoticias(cnx, function(err, result) {
            res.render('noticias/noticias', { noticias: result });
        });
    });
};
