const Sequelize = require('sequelize');
const { username } = require('../config/database');
const dbConfig = require('../config/database');

const Psicologos = require('../models/Psicologos')

const connection = new Sequelize(dbConfig);

Psicologos.init(connection);

module.exports = connection;
