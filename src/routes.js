const express = require('express');
const PsicologosController = require('./controllers/PsicologosController');

const routes = express.Router();

routes.get('/psicologos', PsicologosController.index);
routes.get('/psicologos/:id', PsicologosController.show);
routes.post('/psicologos', PsicologosController.store);
routes.delete('/psicologos/:id', PsicologosController.delete);
routes.put('/psicologos/:id', PsicologosController.update);

module.exports = routes;