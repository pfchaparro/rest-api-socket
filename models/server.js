const express = require('express')
const cors = require('cors')
const { createServer } = require('http')
const { socketController } = require('../sockets/controller')

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT || 3001
        this.basePath = process.env.BASE_PATH
        this.server = createServer(this.app)
        this.io = require("socket.io")(this.server, {
            cors: {
                origin: "*",
                methods: ["GET", "POST"]
            }
        });

        global.io = this.io

        this.paths = {
            operators: `${this.basePath}operators`,
            owner_product: `${this.basePath}owner_product`,
        }

        // connection database
       // this.dbConnection()

        // Middlewares
        this.middlewares()

        // Socket
        this.sockets()

        // Routes
        this.routes()
    }

    middlewares() {

        // Cors
        this.app.use(cors())

        // BodyParser
        this.app.use(express.json())

        // Public directory
        this.app.use(express.static('public'))

    }

    routes() {
        this.app.use(this.paths.operators, require('../routes/operators'))
    }


    sockets() {
        this.io.on('connection', socketController)
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log('Listening on port ' + this.port);
        })
    }
}

module.exports = Server