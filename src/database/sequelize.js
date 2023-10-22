const { Sequelize } = require('sequelize');
require('dotenv').config()

const password = process.env.POSTGRES_PASSWORD
const username = process.env.POSTGRES_USERNAME
const database = process.env.POSTGRES_DB

const sequelize = new Sequelize(database, username, password, {
    host: process.env.POSTGRES_HOST || "localhost",
    dialect: "postgres",
    define: {
        timestamps: true,
        underscored: true
    },
});

const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log("Coneção com o Postgress realizada com sucesso.")
    } catch (err) {
        console.error("Ocorreu um error ao se conectar com o BD:", err)
    }
}

connect()

module.exports = sequelize