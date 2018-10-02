function NoticiaDAO(cnx){
    this._cnx = cnx;
}

NoticiaDAO.prototype.getNoticia = function(callback) {
    this._cnx.query('select * from noticias where id_noticia = 2', callback);
};

NoticiaDAO.prototype.getNoticias = function(callback) {
    this._cnx.query('select * from noticias', callback);
};


NoticiaDAO.prototype.salvarNoticia = function(noticia, callback) {
    console.log(noticia);
    this._cnx.query('insert into noticias set ?', noticia, callback);
};

module.exports = function() {   
    return NoticiaDAO;
}