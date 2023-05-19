const { Socket } = require("socket.io")

const socketController = (socket = new Socket()) => {

    // console.log('Client connected', socket.id)

    //console.log(socket.handshake.headers['comercio']);

    socket.on('disconnect', (msg) => {
      //  console.log('Client disconnected', socket.id);
    });

    socket.on('desconectado', (msg) => {
        console.log('Client desconectado', msg);
    });

    socket.on('message', (msg) => {
        console.log('message: ' + msg);
    });

    socket.on('conectado', (msg) => {
        console.log('Se conecto: ' + msg);
    });

    socket.emit('broadcast', `server: Hello from server`);

    socket.emit('operators', {});

    socket.on('message', (msg) => {
        socket.emit('broadcast', msg);
    });
}

module.exports = {
    socketController
}