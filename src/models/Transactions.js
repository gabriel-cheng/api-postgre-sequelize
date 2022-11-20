const Sequelize = require('sequelize');
const database = require('../database/database');
const Accounts = require('./Accounts');

const Transactions = database.define('Transactions', {
    transactionId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    value: Sequelize.DECIMAL
});

Transactions.belongsTo(Accounts, {
    constraint: true,
    foreignKey: 'debitedAccountId'
});

Transactions.belongsTo(Accounts, {
    constraint: true,
    foreignKey: 'creditedAccountId'
});

module.exports = Transactions;