const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Order = sequelize.define('order', {
    num_date: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    total_amount: {
        type: DataTypes.DECIMAL,
        allowNull: true
    }
    
});

module.exports = Order;