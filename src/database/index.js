const Sequelize = require('sequelize');
const { username } = require('../config/database');
const dbConfig = require('../config/database');

const Psicologos = require('../models/Psicologos')
const Pacientes = require('../models/Pacientes');

const connection = new Sequelize(dbConfig);

Psicologos.init(connection);
Pacientes.init(connection);

module.exports = connection;
