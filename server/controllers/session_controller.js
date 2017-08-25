const GoogleOuath2Service = require('../services/google_oauth2_service');

module.exports = {
  google_auth(req, res) {
    var author = new GoogleOuath2Service().run()
    return res.status(200).send(author);
  }
}
