const Psicologos = require("../models/Psicologos")
const jwt = require('jsonwebtoken')
const secret = require('../config/secret')
const bcrypt = require('bcryptjs')

const authController = {
  async store(req, res) {
    const { email, senha } = req.body
    const psicologos = await Psicologos.findOne({
      where: {
        email
      },
    });
    if(!psicologos){
      return res.status(401).json("E-mail ou senha inválido, verifique e tente novamente")
    }
    if(!bcrypt.compareSync(senha, psicologos.senha)){
      return res.status(401).json("E-mail ou senha inválido, verifique e tente novamente");
    }

    const token = jwt.sign(
      {
        id: psicologos.id,
        email: psicologos.email,
        nome: psicologos.nome,
      },
      secret.key
      );

    return res.json(token);
  },
};
module.exports = authController;
