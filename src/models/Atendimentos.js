const { Model, DataTypes } = require('sequelize');

class Atendimentos extends Model {
  static init(sequelize) {
    super.init({
      data_atendimento: DataTypes.DATE,
      observacao: DataTypes.STRING,
    }, {
      sequelize,
      tableName: 'atendimentos',
    })
  }
  static associate(models) {
    this.belongsTo(models.Psicologo, { foreignKey: 'psicologos_id', as: 'psicologos' });
    this.belongsTo(models.Paciente, { foreignKey: 'pacientes_id', as: 'pacientes' });
  }
}

module.exports = Atendimentos;