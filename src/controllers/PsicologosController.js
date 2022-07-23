const Psicologos = require('../models/Psicologos')

module.exports = {
  async index(req, res) {
    const psicologos = await Psicologos.findAll();

    return res.json(psicologos);

  },
  async store(req, res) {
    const { nome, email, senha, apresentacao } = req.body;

    const psicologos = await Psicologos.create({ nome, email, senha, apresentacao });
    
    return res.json(psicologos);
  }
}