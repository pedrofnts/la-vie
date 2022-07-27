const Atendimentos = require('../models/Atendimentos');
const auth = require('../middlewares/auth')

module.exports = {
  async index(req, res) {
    const atendimentos = await Atendimentos.findAll();
    return res.json(atendimentos);
  },
  async show(req, res) {
    const { id } = req.params;
    const atendimentos = await Atendimentos.findOne({ 
      where: { id },
      attributes: [ 'id', 'psicologo_id', 'paciente_id', 'data_atendimento', 'observacao']
    });

    if (!atendimentos) {
      return res.status(404).json({ error: 'Atendimento não encontrado' });
    }

    return res.json(atendimentos);
  },
  async store(req, res) {
      const atendimento = {
          psicologo_id: req.auth.id,
          paciente_id: req.body.paciente_id,
          data_atendimento: req.body.data_atendimento,
          observacao: req.body.observacao
      }
      try {
          const criarAtendimento = await Atendimentos.create(atendimento)
          res.status(201).json(criarAtendimento)
      } catch (error) {
          res.status(400).send(error)
      }
  },
}