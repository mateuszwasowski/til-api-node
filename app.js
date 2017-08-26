const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(cors())

// Require our routes into the application.
require('./server/routes')(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the Til API!',
}));

module.exports = app;
