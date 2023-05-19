require('dotenv').config();

const { Sequelize } = require('sequelize')

const db = new Sequelize(process.env.DATABASE || "pablo", process.env.USERNAME || "megared", process.env.PASSWORD || "M3g4_D323", {
    host: process.env.HOST || "192.168.2.2",
    dialect: 'oracle',
    define: {
        timestamps: false,
    }
})

module.exports = db