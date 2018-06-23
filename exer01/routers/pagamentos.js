module.exports = function(app) {
    app.get('/', function(req, res) {
        res.send('Roda roda Jequiti!');
    });

    app.get('/pagamentos', function(req, res) {
        res.send('Você em pagamentos');
    });

    app.post('/pagamentos/pagamento', function(req, res) {
        var pagamento = req.body;

        pagamento.status = 'created';
        pagamento.data = new Date;

        var connection = app.persistencia.connectionFactory();
        var pagamentoDao = new app.persistencia.pagamentoDao(connection);

        pagamentoDao.salva(pagamento, function(exception, result){
            if (exception) {
                console.log('##### ERRO ##### ' + exception);
                res.status(400).send(exception);
            } else {
                console.log('pagamento criado: ' + result);
                res.json(pagamento);
            }
        });
    });
}