function NoticiaDAO(cnx){
    this._cnx = cnx;
}

NoticiaDAO.prototype.getNoticias = function(callback) {
    this._cnx.query('select * from noticias order by data_criacao desc', callback);
};

NoticiaDAO.prototype.getNoticia = function(id, callback) {
    console.log(id);
    this._cnx.query(`select * from noticias where id_noticia = ${id}`, callback);
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