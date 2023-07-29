const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const State = sequelize.define('state', {
    status: {
        type: DataTypes.STRING,
        allowNull: true
    },
});

module.exports = State;