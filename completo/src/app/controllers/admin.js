module.exports.formulario_inclusao_noticia = function(application, req, res) {
    res.render('admin/form_add_noticia', { erros: {}, noticia: {} });
};

module.exports.noticias_salvar = function(application, req, res) {
    const noticia = req.body;

    req.assert('titulo', 'titulo - Obrigatório').notEmpty();
    req.assert('resumo', 'resumo - Obrigatório').notEmpty();
    req.assert('resumo', 'resumo - Deve conter entre 10 e 100 caracts').len(10, 100);
    req.assert('autor', 'autor - Obrigatório').notEmpty();
    req.assert('data_noticia', 'data_noticia - Obrigatória').notEmpty().isDate({ format: 'YYYY-MM-DD' });
    req.assert('noticia', 'noticia - Obrigatória').notEmpty();

    const erros = req.validationErrors();
    
    console.log(erros);

    if(erros) {
        return res.render('admin/form_add_noticia', { erros, noticia });
    }

    const cnx = application.config.dbConnection();
    const model = new application.app.models.NoticiaDAO(cnx);

    model.salvarNoticia(noticia, function(err, result) {
        res.redirect('/noticias');
    });
};