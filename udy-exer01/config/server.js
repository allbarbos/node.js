const app = require('express')();
const consign = require('consign')();

app.set('view engine', 'ejs');
app.set('views', './app/views');

consign
  .include('app/routes')
  .then('config/connection.js')
  .into(app);

module.exports = app;