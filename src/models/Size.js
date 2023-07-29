const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Size = sequelize.define('size', {
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
});

module.exports = Size;