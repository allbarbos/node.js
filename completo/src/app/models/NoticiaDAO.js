function NoticiaDAO(cnx){
    this._cnx = cnx;
}

NoticiaDAO.prototype.getNoticia = function(callback) {
    this._cnx.query('select * from noticias where id_noticia = 2', callback);
};

NoticiaDAO.prototype.getNoticias = function(callback) {
    this._cnx.query('select * from noticias', callback);
};

NoticiaDAO.prototype.getNewsByLimit = function(limit, callback) {    
    this._cnx.query(`select * from noticias order by data_criacao desc limit ${limit}`, callback);
};

NoticiaDAO.prototype.salvarNoticia = function(noticia, callback) {
    this._cnx.query('insert into noticias set ?', noticia, callback);
};

module.exports = function() {   
    return NoticiaDAO;
}