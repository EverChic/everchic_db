const { DataTypes } = require("sequelize");
const sequelize = require('../utils/connection');

const Product = sequelize.define("product", {

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    size: {
        type: DataTypes.ENUM('10-12', '8-10'),
        allowNull: false,
    },
    image_url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
});

module.exports = Product;
