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
      attributes: [ 'id', 'psicologos_id', 'pacientes_id', 'data_atendimento', 'observacao']
    });

    if (!atendimentos) {
      return res.status(404).json({ error: 'Atendimento não encontrado' });
    }

    return res.json(atendimentos);
  },
  async store(req, res) {
    const token = req.auth.id;
    const { pacientes_id, data_atendimento, observacao} = req.body;

    const criarAtendimento = {
      psicologos_id: token,
      pacientes_id,
      data_atendimento,
      observacao,
    }

    console.log(req.auth.id)

    await Atendimentos.create(criarAtendimento);

    return res.status(201).json(criarAtendimento);

  },
}