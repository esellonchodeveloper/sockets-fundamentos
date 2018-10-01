var socket = io();
// Socket On, escucha sucesos
socket.on('connect', function () {
    console.log('Contectado al servidor');
});
socket.on('disconnect', function () {
    console.log('Perdimos conexión con el servidor');
});
// Socket Emit, envía información
socket.emit('enviarMensaje', {
    usuario: 'Carlos Aravena',
    message: 'Hola Mundo'
}, function (resp) {
    console.log('Respuesta del Servidor: ', resp);
});
// Escuhar información
socket.on('enviarMensaje', function (message) {
    console.log('Servidor: ', message);
});