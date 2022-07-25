const express = require('express');
const PsicologosController = require('./controllers/PsicologosController');
const PacientesController = require('./controllers/PacientesController');
const AtendimentosController = require('./controllers/AtendimentosController');

const routes = express.Router();

routes.get('/psicologos', PsicologosController.index);
routes.get('/psicologos/:id', PsicologosController.show);
routes.post('/psicologos', PsicologosController.store);
routes.delete('/psicologos/:id', PsicologosController.delete);
routes.put('/psicologos/:id', PsicologosController.update);


routes.get('/pacientes', PacientesController.index);
routes.get('/pacientes/:id', PacientesController.show);
routes.post('/pacientes', PacientesController.store);
routes.delete('/pacientes/:id', PacientesController.delete);
routes.put('/pacientes/:id', PacientesController.update);

routes.get('/atendimentos', AtendimentosController.index);
routes.get('/atendimentos/:id', AtendimentosController.show);
routes.post('/atendimentos/:psicologos_id', AtendimentosController.store);

module.exports = routes;