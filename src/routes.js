const express = require('express');
const psicologosController = require('./controllers/psicologosController');
const pacientesController = require('./controllers/pacientesController');
const atendimentosController = require('./controllers/atendimentosController');
const dashboardController = require('./controllers/dashboardController');
const authController = require('./controllers/authController');
const psicologoCreateValidation = require('./validations/psicologos/create');
const authLoginValidation = require('./validations/auth/login');
const auth = require('./middlewares/auth');

const routes = express.Router();

routes.get('/psicologos', psicologosController.index);
routes.get('/psicologos/:id', psicologosController.show);
routes.post('/psicologos', psicologoCreateValidation, psicologosController.store);
routes.delete('/psicologos/:id', psicologosController.delete);
routes.put('/psicologos/:id', psicologosController.update);


routes.get('/pacientes', pacientesController.index);
routes.get('/pacientes/:id', pacientesController.show);
routes.post('/pacientes', pacientesController.store);
routes.delete('/pacientes/:id', pacientesController.delete);
routes.put('/pacientes/:id', pacientesController.update);

routes.get('/atendimentos', atendimentosController.index);
routes.get('/atendimentos/:id', atendimentosController.show);
routes.post('/atendimentos', auth, atendimentosController.store);

routes.get('/dashboard/pacientes', dashboardController.pacCount);
routes.get('/dashboard/atendimentos', dashboardController.atdCount);
routes.get('/dashboard/psicologos', dashboardController.psiCount);
routes.get('/dashboard/atendimentos/media', dashboardController.average);

routes.post('/login', authLoginValidation, authController.store);

module.exports = routes;