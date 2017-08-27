const GoogleOuath2Service = require('../services/google_oauth2_service');
const AuthorSerializer = require('../serializers/author_serializer');
const Author = require('../models').Author;
const Til = require('../models').Til;

module.exports = {
  google_auth(req, res) {
    var author = new GoogleOuath2Service().run(req.params.code)
    return Author
    .findById(1, {
      include:[
        { model: Til, as: 'tils' }
      ]
    })
    .then(author => {
      if (!author) {
        return res.status(404).send({ message: 'Author Not Found' });
      }
      return res.status(200).send(AuthorSerializer.serialize(author));
    })
    .catch(error => res.status(400).send(error));
  }
}
