const Sequelize = require('sequelize');
const sequelize = new Sequelize('ngcash', process.env.DB_USER, process.env.DB_PASS, {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
});

module.exports = sequelize;