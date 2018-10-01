const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        message: 'Bienvenido a esta aplicación'
    });
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        client.broadcast.emit('enviarMensaje', data);
        // if (message.usuario) {
        //     callback({
        //         resp: 'TODO SALIÓ BIEN'
        //     });
        // } else {
        //     callback({
        //         resp: 'TODO SALIÓ MAL'
        //     });
        // }
    });
});