const Sequelize = require('sequelize');
const { username } = require('../config/database');
const dbConfig = require('../config/database');

const Psicologos = require('../models/Psicologos')
const Pacientes = require('../models/Pacientes');
const Atendimentos = require('../models/Atendimentos');

const connection = new Sequelize(dbConfig);

Psicologos.init(connection);
Pacientes.init(connection);
Atendimentos.init(connection);

Psicologos.associate(connection.models);
Pacientes.associate(connection.models);
Atendimentos.associate(connection.models);

module.exports = connection;
