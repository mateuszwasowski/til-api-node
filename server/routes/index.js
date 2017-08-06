const tilsController = require('../controllers').tils;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Til API!',
  }));

  app.post('/api/tils', tilsController.create);
};
