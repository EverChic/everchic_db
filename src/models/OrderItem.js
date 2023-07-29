const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const OrderItem = sequelize.define('orderItem', {
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    subtotal: {
        type: DataTypes.DECIMAL,
        allowNull: true
    },
    total: {
        type: DataTypes.DECIMAL,
        allowNull: true
    }
});

module.exports = OrderItem;