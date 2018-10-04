// Comando para establecer la conexión
var socket = io();
var label = $('#lblNuevoTicket');

socket.on('estadoActual', function (data) {
    console.log(data);
    label.text(data.actual);
});


// Init jQuery
$('button').on('click', function () {
    socket.emit('siguienteTicket', null, function (siguienteTicket) {
        label.text(siguienteTicket);
    });
});