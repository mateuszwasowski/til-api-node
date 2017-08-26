const GoogleOuath2Service = require('../services/google_oauth2_service');
const AuthorSerializer = require('../serializers/author_serializer');

module.exports = {
  google_auth(req, res) {
    console.log(req.body);
    console.log(req.params);
    console.log(req.query);
    var author = new GoogleOuath2Service().run()
    return res.status(200).send(author);
  }
}
