const pino = require('pino')();

const google = require('googleapis');
const OAuth2 = google.auth.OAuth2;

const request = require("request");


module.exports = function GoogleOuath2Service() {
  this.run = function (code) {
    const oauth2Client = new OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      'https://til-mw.herokuapp.com/'
    );

    oauth2Client.getToken(code, function (err, tokens) {
      if (!err) {
        oauth2Client.setCredentials(tokens);
        request("https://www.googleapis.com/oauth2/v1/userinfo?access_token=" + tokens.access_token, function(error, response, body) {
          pino.info(response);
          pino.info("BODY:")
          pino.info(body);
        });
        pino.info(tokens)
      }
    });
  }
};
