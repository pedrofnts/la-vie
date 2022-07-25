const { username } = require('../config/database');
const Atendimentos = require('../models/Atendimentos');
const Psicologos = require('../models/Psicologos');
const Pacientes = require('../models/Pacientes');

module.exports = {
  async index(req, res) {
    const atendimentos = await Atendimentos.findAll();
    return res.json(atendimentos);
  },
  async show(req, res) {
    const { id } = req.params;
    const atendimentos = await Atendimentos.findOne({ 
      where: { id },
      attributes: [ 'id', 'psicologos_id', 'pacientes_id', 'data_atendimento', 'observacao']
    });

    if (!atendimentos) {
      return res.status(404).json({ error: 'Atendimento não encontrado' });
    }

    return res.json(atendimentos);
  },
  async store(req, res) {
    const { psicologos_id } = req.params;
    const { pacientes_id, data_atendimento, observacao } = req.body;

    const findpsicologo = await Psicologos.findByPk(psicologos_id);

    if(!findpsicologo) {
      return res.status(400).json( { error: 'Psicólogo not found' });
    }

    const atendimentos = await Atendimentos.create({ psicologos_id, pacientes_id, data_atendimento, observacao });
    
    return res.json(atendimentos)
  },


}