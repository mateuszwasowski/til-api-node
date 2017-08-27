const pino = require('pino')()

module.exports = function GoogleOuath2Service() {
  this.run = function () {
    pino.info(process.env.CLIENT_ID)
    return "hello"
  }
};
