const Til = require('../models').Til;
const Vote = require('../models').Vote;
const Author = require('../models').Author;
const TilSerializer = require('../serializers/til_serializer');
const TilDeserializer = require('../serializers/til_deserializer');

module.exports = {
  create(req, res) {
    TilDeserializer.deserialize(req.body, function (err, result) {
      return Til
        .create({
          description: result.description,
          authorId: result.author.id,
        })
        .then(til => res.status(201).send(TilSerializer.serialize(til)))
        .catch(error => res.status(400).send(error));
    });
  },
  list(req, res) {
    return Til
      .findAll({
        include: [
          { model: Vote, as: "votes" },
          { model: Author, as: "author" }
        ],
        order: [
          ['createdAt', 'DESC'],
        ],
      })
      .then(tils => res.status(200).send(TilSerializer.serialize(tils)))
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
        return res.status(200).send(TilSerializer.serialize(til));
      })
      .catch(error => res.status(400).send(error));
  },
  destroy(req, res) {
    return Til
      .findById(req.params.tilId)
      .then(til => {
        if (!til) {
          return res.status(400).send({ message: "Til not found" });
        }
        return til
          .destroy()
          .then(() => res.status(200).send({ message: "Til destroyed successfully." }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
