const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control');
const ticketControl = new TicketControl();
io.on('connection', (client) => {
    client.on('siguienteTicket', (data, callback) => {
        let siguienteTicket = ticketControl.siguiente();
        callback(siguienteTicket);
    });
    // Emitir un evento 'estadoActual'
    client.emit('estadoActual', {
        actual: ticketControl.obtenerUltimoTicket(),
        ultimosCuatro: ticketControl.obtenerUltimosCuatro()
    });
    client.on('atenderTicket', (data, callback) => {
        if (!data.escritorio) {
            return callback({
                err: true,
                message: 'El escritorio es necesario'
            });
        }
        let escritorio = data.escritorio;
        let atenderTicket = ticketControl.atenderTicket(escritorio);
        callback(atenderTicket);
        client.broadcast.emit('ultimosCuatro', {
            ultimosCuatro: ticketControl.obtenerUltimosCuatro()
        });
    });
});