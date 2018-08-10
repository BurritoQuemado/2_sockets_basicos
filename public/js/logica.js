//Crear una instancia de SocketIO, recibe como parámetro el url del servidor al que se conectará
var socket = io.connect('http://localhost:8080');

var notificaciones = [];

//Escuchar al evento 'hola' y realizar cierta accion, recibe como parámetro el id del evento y un callback con la información recibida
socket.on('hola', function (data) {
  //Notificar al usuario el evento hola
  console.log(data);
  socket.emit('otro_evento', {texto: data.texto});
  notificaciones.push(data);
  document.querySelector('#notificaciones').innerHTML = JSON.stringify(notificaciones);
});

socket.on('otro_evento', function (data) {
  console.log('OTRO EVENTO', data);
});
