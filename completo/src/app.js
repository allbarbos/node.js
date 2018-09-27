const app = require('./config/server');
require('./app/routes/home')(app);
require('./app/routes/noticias')(app);
require('./app/routes/formulario_inclusao_noticia')(app);

app.listen(3000, function() {
  console.log("Rodando na porta 3000");
});