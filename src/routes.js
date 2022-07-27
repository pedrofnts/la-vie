const express = require('express');
const PsicologosController = require('./controllers/PsicologosController');
const PacientesController = require('./controllers/PacientesController');
const AtendimentosController = require('./controllers/AtendimentosController');
const DashboardController = require('./controllers/DashboardController');
const authController = require('./controllers/authController');
const psicologoCreateValidation = require('./validations/psicologos/create');
const authLoginValidation = require('./validations/auth/login');
const auth = require('./middlewares/auth');

const routes = express.Router();

routes.get('/psicologos', PsicologosController.index);
routes.get('/psicologos/:id', PsicologosController.show);
routes.post('/psicologos', psicologoCreateValidation, PsicologosController.store);
routes.delete('/psicologos/:id', PsicologosController.delete);
routes.put('/psicologos/:id', PsicologosController.update);


routes.get('/pacientes', PacientesController.index);
routes.get('/pacientes/:id', PacientesController.show);
routes.post('/pacientes', PacientesController.store);
routes.delete('/pacientes/:id', PacientesController.delete);
routes.put('/pacientes/:id', PacientesController.update);

routes.get('/atendimentos', AtendimentosController.index);
routes.get('/atendimentos/:id', AtendimentosController.show);
routes.post('/atendimentos', auth, AtendimentosController.store);

routes.get('/dashboard/pacientes', DashboardController.pacCount);
routes.get('/dashboard/atendimentos', DashboardController.atdCount);
routes.get('/dashboard/psicologos', DashboardController.psiCount);
routes.get('/dashboard/atendimentos/media', DashboardController.average);

routes.post('/login', authLoginValidation, authController.store);

module.exports = routes;