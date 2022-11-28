const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Pessoa = sequelize.define("pessoa", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

const init = async () => {
    await Pessoa.sync();
}

init();

module.exports = Pessoa