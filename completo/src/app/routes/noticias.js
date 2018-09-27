const dbConnection = require('../../config/dbConnection');

module.exports = function(app) {

    const cnx = dbConnection();

    app.get('/noticias', function (req, res) {
        cnx.query('select * from noticias', function(err, result){
            res.render('noticias/noticias', { noticias: result });
        });
    });
};
