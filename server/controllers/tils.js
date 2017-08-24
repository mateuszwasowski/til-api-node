const Til = require('../models').Til;
const Vote = require('../models').Vote;
const Author = require('../models').Author;

module.exports = {
  create(req, res) {
    return Til
      .create({
        description: req.body.description,
        authorId: req.body.authorId,
      })
      .then(til => res.status(201).send(til))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Til
      .findAll({
        include: [
          { model: Vote, as: "votes" },
          { model: Author, as: "author" }
        ],
      })
      .then(tils => res.status(200).send(tils))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Til
      .findById(req.params.tilId, {
        include: [
          { model: Vote, as: "votes" },
          { model: Author, as: "author" }
        ],
      })
      .then(til => {
        if (!til) {
          return res.status(400).send({ message: "Til not found." });
        }
        return res.status(200).send(til);
      })
      .catch(error => res.status(400).send(error));
  },
  destroy(req, res) {
    return Til
      .findById(req.params.tilId)
      .then(til => {
        if (!til) {
          return res.status(400).send({
            message: "Til not found"
          });
        }
        return til
          .destroy()
          .then(() => res.status(200).send({ message: "Til destroyed successfully." }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
