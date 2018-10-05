const app = require('./config/server');

const server = app.listen(3000, function() {
  console.log("Rodando na porta 3000");
});

const io = require('socket.io').listen(server);
io.on('connection', function(socket){
  console.log('connection');

  socket.on('disconnect', function(){
    console.log('disconnect');
  })
});