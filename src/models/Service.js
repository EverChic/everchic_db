const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Service = sequelize.define('service', {
    company: {
        type: DataTypes.STRING,
        allowNull: true
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    type: {
        type: DataTypes.STRING,
        allowNull: true
    },
});

module.exports = Service;