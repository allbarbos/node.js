module.exports.iniciaChat = function(application, req, res) {
    const dados = req.body;
    console.log(dados)
    
    req.assert('apelido', 'Nome/apelido obrigatório').notEmpty();
    req.assert('apelido', 'Nome/apelido deve conter entre 3 e 15 caracteres').len(3, 15);
    
    const erros = req.validationErrors();
    if(erros) {
        res.render('index', { erros })
        return;
    }

    application.get('io')
        .emit('msgParaCliente', {
            apelido: dados.apelido,
            msg: `${dados.apelido} entrou no chat.`
        });

    res.render("chat");
}