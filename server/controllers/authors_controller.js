const Author = require('../models').Author;
const Til = require('../models').Til;
const AuthorSerializer = require('../serializers/author_serializer');

module.exports = {
  create(req, res) {
    return Author
      .create({
        email: req.body.data.attributes.email,
        first_name: req.body.data.attributes.first_name,
        last_name: req.body.data.attributes.last_name,
      })
      .then(author => res.status(201).send(AuthorSerializer.serialize(author)))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Author
      .findAll({
        include: [
          { model: Til, as: "tils" }
        ],
      })
      .then(authors => res.status(200).send(AuthorSerializer.serialize(authors)))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Author
      .findById(req.params.authorId, {
        include: [
          { model: Til, as: 'tils' }
        ],
      })
      .then(author => {
        if (!author) {
          return res.status(404).send({ message: 'Author Not Found' });
        }
        return res.status(200).send(AuthorSerializer.serialize(author));
      })
      .catch(error => res.status(400).send(error));
  },
  destroy(req, res) {
    return Author
      .findById(req.params.authorId)
      .then(author => {
        if (!author) {
          return res.status(400).send({ message: 'Author Not Found' });
        }
        return author
          .destroy()
          .then(() => res.status(200).send({ message: 'Author destroyed successfully.' }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
