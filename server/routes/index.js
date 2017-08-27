const tilsController = require('../controllers').tils;
const authorsController = require('../controllers').authors;
const votesController = require('../controllers').votes
const sessionController = require('../controllers').session
const slackController = require('../controllers').slack

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Til API!',
  }));

  app.post('/api/tils', tilsController.create);
  app.get('/api/tils', tilsController.list);
  app.get('/api/tils/:tilId', tilsController.retrieve);
  app.delete('/api/tils/:tilId', tilsController.destroy);

  app.post('/api/authors', authorsController.create);
  app.get('/api/authors', authorsController.list);
  app.get('/api/authors/:authorId', authorsController.retrieve);
  app.delete('/api/authors/:authorId', authorsController.destroy);

  app.post('/api/votes', votesController.create);
  app.get('/api/votes', votesController.list);
  app.get('/api/votes/:voteId', votesController.retrieve);
  app.delete('/api/votes/:voteId', votesController.destroy);

  app.get('/api/google_auth', sessionController.google_auth);

  app.post('/api/slacktil', slackController.slacktil);
};
