const { Model, DataTypes } = require('sequelize');

class Pacientes extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      idade: DataTypes.INTEGER,
    }, {
      sequelize
    })
  }
}

module.exports = Pacientes;