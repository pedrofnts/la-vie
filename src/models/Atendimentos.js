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
    this.belongsTo(models.Pacientes, { foreignKey: 'pacientes_id', as: 'pacientes' });
    this.belongsTo(models.Psicologos, { foreignKey: 'psicologos_id', as: 'psicologos'});
  }
}

module.exports = Atendimentos;