const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Rol = sequelize.define('rol', {
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
});

module.exports = Rol;