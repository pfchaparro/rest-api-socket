const { response, request } = require('express')

const messageOperator = async (req = response, res = request) => {
    try {
        const { message } = req.body

        const info_socket = {
            message
        }

        //console.log(info_socket);

        global.io.emit('message-push', info_socket);

        //socketController(info_socket)

        res.json({
            msg: `El mensaje se ha emitido`
        })
    } catch (err) {
        console.error(err)
        res.status(500).json({
            msg: 'Error al realizar la petición'
        })
    }
}

const ChangeOperator = async (req = response, res = request) => {
    try {
        console.log(req.body)

        //console.log(info_socket);

        global.io.emit('change-operator', req.body);

        //socketController(info_socket)

        res.json({
            msg: `El cambio del operador se ha emitido`
        })
    } catch (err) {
        console.error(err)
        res.status(500).json({
            msg: 'Error al realizar la petición'
        })
    }
}




module.exports = {
    messageOperator,
    ChangeOperator
}