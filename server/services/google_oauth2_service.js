const pino = require('pino')()

module.exports = function GoogleOuath2Service() {
  this.run = function () {
    pino.info("WHAT")
    pino.info(process.env.CLIENT_ID)
    pino.error(process.env.CLIENT_ID)
    pino.info(process.env.CLIENT_ID)
    pino.info("HELLO")
    return "hello"
  }
};
