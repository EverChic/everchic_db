const { DataTypes } = require("sequelize");
const sequelize = require('../utils/connection');

const User = sequelize.define("user", {

    role: {
        type: DataTypes.ENUM('cliente', 'administrador'),
        allowNull: true,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    dni: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    company: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    country: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true,
        set(value) {
            const hashedPassword = bcrypt.hashSync(value, 10);
            this.setDataValue("password", hashedPassword);
        },
    },

});


module.exports = User;
