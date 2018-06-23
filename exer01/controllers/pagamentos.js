module.exports = function(app) {
    app.get('/', function(req, res) {
        res.send('Roda roda Jequiti!');
    });

    app.get('/pagamentos', function(req, res) {
        res.send('Você em pagamentos');
    });

    app.put('/pagamentos/pagamento/:id', function(req, res) {
        var id = req.params.id;

        var pagamento = {
            'id' : id,
            'status' : 'confirmed'
        };

        var connection = app.persistencia.connectionFactory();
        var pagamentoDao = new app.persistencia.pagamentoDao(connection);

        pagamentoDao.atualiza(pagamento, function(erro){
            if (erro){
              res.status(500).send(erro);
              return;
            }
            console.log('pagamento atualiza');
            res.send(pagamento);
        });
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

                var response = {
                    pagamento,
                    'links' : [
                        {
                            href: `http://localhost:3000/pagamentos/pagamento/${ pagamento.id }`,
                            rel: 'confirmed',
                            method: 'PUT',
                        },
                        {
                            href: `http://localhost:3000/pagamentos/pagamento/${ pagamento.id }`,
                            rel: 'cancelled',
                            method: 'DELETE',
                        }
                    ]
                }

                res.status(201)
                   .location(`/pagamentos/pagamento/${ pagamento.id }`)
                   .json(response);
            }
        });
    });

    app.delete('/pagamentos/pagamento/:id', function(req, res) {
        var id = req.params.id;

        var pagamento = {
            'id' : id,
            'status' : 'cancelled'
        };

        var connection = app.persistencia.connectionFactory();
        var pagamentoDao = new app.persistencia.pagamentoDao(connection);

        pagamentoDao.atualiza(pagamento, function(erro){
            if (erro){
              res.status(500).send(erro);
              return;
            }
            console.log('pagamento cancelado');
            res.status(204).send(pagamento);
        });
    });
}