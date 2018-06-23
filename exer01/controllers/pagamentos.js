module.exports = function(app) {
    app.get('/', function(req, res) {
        res.send('Roda roda Jequiti!');
    });

    app.get('/pagamentos', function(req, res) {
        res.send('Você em pagamentos');
    });

    app.post('/pagamentos/pagamento', function(req, res) {
        var pagamento = req.body;

        req.assert("forma_de_pagamento", "Forma de pagamento é obrigatória.").notEmpty();
        req.assert("valor", "Valor é obrigatório e deve ser um decimal.").notEmpty().isFloat();
        req.assert("moeda", "Moeda é obrigatória e deve ter 3 caracteres").notEmpty().len(3,3);

        var errors = req.validationErrors();

        if (errors){
            console.log("Erros de validação encontrados");
            res.status(400).send(errors);
            return;
        }

        pagamento.status = 'created';
        pagamento.data = new Date;

        var connection = app.persistencia.connectionFactory();
        var pagamentoDao = new app.persistencia.pagamentoDao(connection);

        pagamentoDao.salva(pagamento, function(exception, result){
            if (exception) {
                console.log('##### ERRO ##### ' + exception);
                res.status(500).send(exception);
            } else {
                console.log('pagamento criado: ' + result);
                
                pagamento.id = result.insertId;

                res.status(201)
                   .location(`/pagamentos/pagamento/${result.insertId}`)
                   .json(pagamento);
            }
        });
    });
}