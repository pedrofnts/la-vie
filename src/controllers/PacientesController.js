const Pacientes = require('../models/Pacientes');

module.exports = {
  async index(req, res) {
    const pacientes = await Pacientes.findAll();
    return res.json(pacientes);
  },
  async show(req, res) {
    const { id } = req.params;
    const pacientes = await Pacientes.findOne({ 
      where: { id },
      attributes: [ 'id', 'nome', 'email', 'idade']
    });

    if (!pacientes) {
      return res.status(404).json({ error: 'Paciente não encontrado' });
    }

    return res.json(pacientes);
  },
  async store(req, res) {
    const { nome, email, idade } = req.body;

    const emailPaciente = await Pacientes.findOne({
      where: { email: email },
    });

    if (emailPaciente) {
      return res.status(401).json({ error: 'E-mail já existe' });
    }

    const pacientes = await Pacientes.create({ nome, email, idade });
    
    return res.json(pacientes);
  },
  async delete(req, res) {
    const { id } = req.params;

    const pacientes = await Pacientes.findByPk(id);

    if (!pacientes) {
      return res.status(404).json({ error: 'Paciente não encontrado' });
    }
    
    await Pacientes.destroy( { where: { id: req.params.id}  } );

    return res.status(204).json();
  },
  async update(req, res) {
    const { id } = req.params;
    const { nome, email, idade } = req.body;
    const pacientes = await Pacientes.findByPk(id);

    if (!pacientes) {
      return res.status(404).json({ error: 'Paciente não encontrado' });
    }
    await pacientes.update( { nome, email, idade } );

    return res.status(204).json();
  },
}