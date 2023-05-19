const { Socket } = require("socket.io")

const socketOperators = () => {
    // socket = new Socket()
    // console.log('Client connected', socket.id)

    // socket.on('disconnect', () => {
    //     console.log('user disconnected', socket.id);
    // });

    socket.on('message', (msg) => {
        console.log('message: ' + msg);
    });

    socket.emit('broadcast', `server: Hello from server test 2`);

    // // socket.on('message', (msg) => {
    // //     socket.emit('broadcast', `server: Hello from server1`);
    // // });
}

module.exports = {
    socketOperators
}