const Til = require('../models').Til;

module.exports = {
  create(req, res) {
    return Til
      .create({
        title: req.body.title,
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  },
};
