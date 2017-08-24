const Vote = require('../models').Vote;
const Til = require('../models').Til;
const Author = require('../models').Author;

module.exports = {
  create(req, res) {
    return Vote
      .create({
        tilId: req.body.tilId,
        authorId: req.body.authorId,
      })
      .then(vote => res.status(201).send(vote))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Vote
      .findAll({
        include: [
          { model: Til, as: "til" },
          { model: Author, as: "author" },
        ]
      })
      .then(votes => res.status(200).send(votes))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Vote
      .findById(req.params.voteId, {
        include: [
          { model: Til, as: "til" },
          { model: Author, as: "author" },
        ]
      })
      .then(vote => {
        if (!vote) {
          return res.status(400).send({ message: "Vote not found." });
        }
        return res.status(200).send(vote);
      })
      .catch(error => res.status(400).send(error));
  },
  destroy(req, res) {
    return Vote
      .findById(req.params.voteId)
      .then(vote => {
        if (!vote) {
          return res.status(400).send({ message: "Vote not found." });
        }
        return vote
          .destroy()
          .then(() => res.status(200).send({ message: "Vote destroyed successfully." }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
};
