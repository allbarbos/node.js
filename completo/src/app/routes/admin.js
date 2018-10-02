module.exports = function(application) {
    application.get('/formulario_inclusao_noticia', function (req, res) {
        res.render('admin/form_add_noticia')
    });

    application.post('/noticias/salvar', function (req, res) {
        const noticia = req.body;
        const cnx = application.config.dbConnection();
        const model = new application.app.models.NoticiaDAO(cnx);

        model.salvarNoticia(noticia, function(err, result) {
            res.redirect('/noticias');
        });
    });
};