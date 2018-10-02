const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control');
const ticketControl = new TicketControl();
io.on('connection', (client) => {
    client.on('siguienteTicket', (data, callback) => {
        let siguienteTicket = ticketControl.siguiente();
        console.log(siguienteTicket);
        callback(siguienteTicket);
    });
    // Emitir un evento 'estadoActual'
    // return { actual: ticketControl.obtenerUltimoTicket() }
    client.emit('estadoActual', {
        actual: ticketControl.obtenerUltimoTicket()
    });

});