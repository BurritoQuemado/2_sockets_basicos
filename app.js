const express = require('express');
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('public'));
server.listen(8080, () => console.log('Servidor iniciado en 8080'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', function (socket) {
  socket.emit('hola', { texto: 'Nuevo socket conectado: ' + socket.id });

  socket.on('otro_evento', function (data) {
    console.log(data);
  });

});
