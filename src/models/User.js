const Sequelize = require('sequelize');
const database = require('../database/database');
const Accounts = require('./Accounts');

const User = database.define('User', {
    userId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: Sequelize.CHAR,
        allowNull: false
    },
    password: {
        type: Sequelize.CHAR,
        allowNull: false
    }
});

User.belongsTo(Accounts, {
    constraint: true,
    foreignKey: 'accountId'
});

module.exports = User;