const pino = require('pino')()

const credentials = {
  client: {
    id: process.env.CLIENT_ID,
    secret: process.env.CLIENT_SECRET
  },
  auth: {
    tokenHost: 'https://til-mw.herokuapp.com'
  }
};


const oauth2 = require('simple-oauth2').create(credentials);

module.exports = function GoogleOuath2Service() {
  this.run = function (code) {
    pino.info('CODE IS')
    pino.info(code)
    const tokenConfig = {
      code: code,
      redirect_uri: 'https://til-mw.herokuapp.com/'
    };

    oauth2.authorizationCode.getToken(tokenConfig, (error, result) => {
      if (error) {
        pino.error('Access Token Error', error.message);
        return ""
      }

      const accessToken = oauth2.accessToken.create(result);
      pino.info(accessToken)
    });
    return "hello"
  }
};
