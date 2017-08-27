const pino = require('pino')()

const google = require('googleapis');
const OAuth2 = google.auth.OAuth2;


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
        pino.info(tokens)
      }
    });

    return "hello"
  }
};
