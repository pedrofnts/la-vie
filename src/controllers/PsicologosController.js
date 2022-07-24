const { username } = require('../config/database');
const Psicologos = require('../models/Psicologos')

module.exports = {
  async index(req, res) {
    const psicologos = await Psicologos.findAll();
    return res.json(psicologos);

    /*if (!psicologos) {
      return res.status(400).json;
    }*/
  },
  async show(req, res) {
    const { id } = req.params;
    const psicologos = await Psicologos.findOne({ where: { id } });

    return res.json(psicologos);
  },
  async store(req, res) {
    const { nome, email, senha, apresentacao } = req.body;

    const psicologos = await Psicologos.create({ nome, email, senha, apresentacao });
    
    return res.json(psicologos);
  },
  async delete(req, res) {
    const { id } = req.params;

    const psicologos = await Psicologos.findByPk(id);

    if (!psicologos) {
      return res.status(400).json({ error: 'Psicólogo não encontrado' });
    }
    
    await Psicologos.destroy( { where: { id: req.params.id}  } );

    return res.status(204).json();
  }
}