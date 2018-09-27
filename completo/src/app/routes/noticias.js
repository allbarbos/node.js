module.exports = function(app) {
    app.get('/noticias', function (req, res) {
        const cnx = app.config.dbConnection();

        cnx.query('select * from noticias', function(err, result){
            res.render('noticias/noticias', { noticias: result });
        });
    });
};
