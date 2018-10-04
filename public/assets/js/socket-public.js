// Comando para establecer la conexión.
var socket = io();

var lblTicketUno = $('#lblTicket1');
var lblTicketDos = $('#lblTicket2');
var lblTicketTres = $('#lblTicket3');
var lblTicketCuatro = $('#lblTicket4');

var lblEscritorioUno = $('#lblEscritorio1');
var lblEscritorioDos = $('#lblEscritorio2');
var lblEscritorioTres = $('#lblEscritorio3');
var lblEscritorioCuatro = $('#lblEscritorio4');

var lblTickets = [lblTicketUno, lblTicketDos, lblTicketTres, lblTicketCuatro];
var lblEscritorios = [lblEscritorioUno, lblEscritorioDos, lblEscritorioTres, lblEscritorioCuatro];

socket.on('estadoActual', function (data) {
    actualizarHTML(data.ultimosCuatro);
});

socket.on('ultimosCuatro', function (data) {
    var audio = new Audio('assets/audio/new-ticket.mp3');
    audio.play();
    actualizarHTML(data.ultimosCuatro);
});

function actualizarHTML(ultimosCuatro) {
    for (var index = 0; index <= ultimosCuatro.length - 1; index++) {
        lblTickets[index].text('Ticket ' + ultimosCuatro[index].numero);
        lblEscritorios[index].text('Escritorio ' + ultimosCuatro[index].escritorio);
    }
}