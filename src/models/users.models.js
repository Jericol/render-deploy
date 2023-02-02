const db = require("../utils/database");
const { DataTypes } = require('Sequelize');

const Users = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey:  true,
        autoIncrement: true,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate : {
            isEmail: true,
        },
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,     
    }
});

module.exports = Users;