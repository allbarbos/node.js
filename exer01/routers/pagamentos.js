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
      
        console.log(pagamento);

        res.send(pagamento);
    });
}