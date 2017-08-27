const pino = require('pino')();
const google = require('googleapis');
const OAuth2 = google.auth.OAuth2;
const request = require("request");
const Author = require('../models').Author;
const AuthorSerializer = require('../serializers/author_serializer');

module.exports = function GoogleOuath2Service() {
  this.run = function (code, res) {
    const oauth2Client = new OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      'https://til-mw.herokuapp.com/'
    );

    oauth2Client.getToken(code, function (err, tokens) {
      if (!err) {
        oauth2Client.setCredentials(tokens);
        request("https://www.googleapis.com/oauth2/v1/userinfo?access_token=" + tokens.access_token, function(error, response, body) {
          body = JSON.parse(body)

          Author.find({
            where: {
              email: body.email
            }
          })
          .then(author => {
            if (!author) {
              Author.create({
                  email: body.email,
                  first_name: body.given_name,
                  last_name: body.family_name,
                })
                .then(author => res.status(201).send(AuthorSerializer.serialize(author)))
                .catch(error => res.status(400).send(error));
            }
            return res.status(200).send(AuthorSerializer.serialize(author));
          })
        });
      }
    });
  }
};
