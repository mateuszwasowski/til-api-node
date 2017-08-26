const GoogleOuath2Service = require('../services/google_oauth2_service');
const AuthorSerializer = require('../serializers/author_serializer');
const Author = require('../models').Author;
const Til = require('../models').Til;

module.exports = {
  google_auth(req, res) {
    var author = new GoogleOuath2Service().run()
    console.log(req.body);
    console.log(req.params);
    console.log(req.query);
    return Author
    .findById(2, {
      include:[
        { model: Til, as: 'tils' }
      ]
    })
    .then(authors => res.status(200).send(AuthorSerializer.serialize(authors)))
    .catch(error => res.status(400).send(error));
  }
}
