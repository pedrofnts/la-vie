const Psicologos = require('../models/Psicologos');
const bcrypt = require("bcryptjs");

module.exports = {
  async index(req, res) {
    const psicologos = await Psicologos.findAll({
      attributes: ['id', 'nome', 'email', 'apresentacao', 'created_at', 'updated_at']
    });
     
    return res.json(psicologos);
  },
  async show(req, res) {
    const { id } = req.params;
    const psicologos = await Psicologos.findOne({ 
      where: { id },
      attributes: [ 'id', 'nome', 'email', 'apresentacao', 'created_at', 'updated_at']
    });

    if (!psicologos) {
      return res.status(404).json({ error: 'Psicólogo não encontrado' });
    }

    return res.json(psicologos);
  },
  async store(req, res) {
    const { nome, email, senha, apresentacao } = req.body;

    const newSenha = bcrypt.hashSync(senha, 10);

    const psicologos = await Psicologos.create({ nome, email, senha: newSenha, apresentacao });
    
    return res.status(201).json(psicologos);
  },
  async delete(req, res) {
    const { id } = req.params;

    const psicologos = await Psicologos.findByPk(id);

    if (!psicologos) {
      return res.status(404).json({ error: 'Psicólogo não encontrado' });
    }
    
    await Psicologos.destroy( { where: { id: req.params.id}  } );

    return res.status(204).json();
  },

  async update(req, res) {
    const { id } = req.params;
    const { nome, email, senha, apresentacao } = req.body;
    const psicologos = await Psicologos.findByPk(id);

    if (!psicologos) {
      return res.status(404).json({ error: 'Psicólogo não encontrado' });
    }

    await psicologos.update( { nome, email, senha, apresentacao } );

    return res.status(204).json();
  }

}