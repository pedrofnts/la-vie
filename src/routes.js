const express = require('express');
const PsicologosController = require('./controllers/PsicologosController');

const routes = express.Router();

routes.get('/psicologos', PsicologosController.index);
routes.post('/psicologos', PsicologosController.store);

module.exports = routes;