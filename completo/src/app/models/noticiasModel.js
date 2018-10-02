module.exports = function() {
    this.getNoticia = function(cnx, callback) {
        cnx.query('select * from noticias where id_noticia = 2', callback);
    };

    this.getNoticias = function(cnx, callback) {
        cnx.query('select * from noticias', callback);
    };

    this.salvarNoticia = function(noticia, cnx, callback) {
        cnx.query('insert into noticias set ?', noticia, callback);
    };

    return this;
}