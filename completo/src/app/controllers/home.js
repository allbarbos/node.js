module.exports.index = function(application, req, res) {
    const cnx = application.config.dbConnection();
    const model = new application.app.models.NoticiaDAO(cnx);

    model.getNewsByLimit(5, function(err, result){   
        console.log(result)
        res.render('home/index', { noticias: result });    
    });
};