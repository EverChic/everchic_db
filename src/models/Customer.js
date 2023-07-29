const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Customer = sequelize.define('customer', {
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    phone1: {
        type: DataTypes.STRING,
        allowNull: false
    },

    phone2: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: true
    },

    dni: {
        type: DataTypes.STRING,
        allowNull: false
    },

    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    canton: {
        type: DataTypes.STRING,
        allowNull: false
    },

    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    observation: {
        type: DataTypes.STRING,
        allowNull: true
    },
    
});

module.exports = Customer;