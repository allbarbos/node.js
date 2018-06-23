var restify = require('restify-clients');

var client = restify.createJsonClient({
    url: 'https://viacep.com.br'
})

client.get('/ws/13070752/json', function(erro, req, res, retorno){
    console.log('consumindo CEP');
    console.log(retorno);
})