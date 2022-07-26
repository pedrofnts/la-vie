const { Model, DataTypes } = require('sequelize');
const bcrypt = require("bcryptjs")

class Psicologos extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      senha: DataTypes.STRING,
      apresentacao: DataTypes.STRING,
    }, {
      sequelize,
      tableName: 'psicologos'
    })
  }
   static associate(models) {
      this.hasMany(models.Atendimentos, { foreignKey: 'psicologos_id', as: 'psicologos'});
  }
  }


module.exports = Psicologos;