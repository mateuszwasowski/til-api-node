const GoogleOuath2Service = require('../services/google_oauth2_service');
const AuthorSerializer = require('../serializers/author_serializer');
const Author = require('../models').Author;
const Til = require('../models').Til;

module.exports = {
  google_auth(req, res) {
    new GoogleOuath2Service().run(req.query.code, res)
  }
}
