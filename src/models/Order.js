const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Order = sequelize.define('order', {
    order_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    total_amount: {
        type: DataTypes.DATE,
        allowNull: true
    }
    
});

module.exports = Order;