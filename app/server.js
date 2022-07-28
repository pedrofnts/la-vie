const express = require('express');
const routes = require('./routes');
const handleError = require('./middlewares/handleError');

require('./database')

const app = express();

app.use(express.json());

app.use(routes);
app.use(handleError);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

app.listen(port);