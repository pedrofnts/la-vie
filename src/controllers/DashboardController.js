const Atendimentos = require('../models/Atendimentos');
const Psicologos = require('../models/Psicologos');
const Pacientes = require('../models/Pacientes');

module.exports = { 
  async pacCount(req, res) {
    const numPac = await Pacientes.count();
    
    return res.status(200).json(numPac);
  },
  async atdCount(req, res) {
    const numAtd = await Atendimentos.count();

    return res.status(200).json(numAtd);
  },
  async psiCount(req, res) {
    const numPsi = await Psicologos.count();

    return res.status(200).json(numPsi)
  },
  async average(req, res) {
    const atendimentos = await Atendimentos.count();
    const psicologos = await Psicologos.count();

    return res.status(200).json(atendimentos/psicologos)
  },
} 