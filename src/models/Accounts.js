const Sequelize = require('sequelize');
const database = require('../database/database');

const Accounts = database.define('Accounts', {
    accountId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    balance: {
        type: Sequelize.DECIMAL,
        allowNull: false
    }
});

module.exports = Accounts;