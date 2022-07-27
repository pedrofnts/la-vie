'use strict';

module.exports = {
  up: (queryInterface, Sequelize)  => {
  return queryInterface.createTable('atendimentos', { 
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    psicologo_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'psicologos', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    paciente_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'pacientes', key: 'id' },
      onUpdate: 'CASCADE', 
      onDelete: 'CASCADE',
    },
    data_atendimento: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    observacao: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  });
},

  down: (queryInterface, Sequelize) => {
  return queryInterface.dropTable('atendimentos');
  }
};