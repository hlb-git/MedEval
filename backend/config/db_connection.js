
const { Sequelize } = require('sequelize');
const config = require('./db_config');


const sequelize = new Sequelize(
    config.development
);

module.exports = sequelize;
