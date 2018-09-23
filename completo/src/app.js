var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/tecnologia', function (req, res) {
  res.render('secao/tecnologia')
})

app.get('', function (req, res) {
  res.send('Home page!')
})

app.listen(3000, function() {
  console.log("Rodando na porta 3000");
});