const TilSerializer = require('../serializers/author_serializer');
const Author = require('../models').Author;
const Til = require('../models').Til;
const request = require("request");
const pino = require("pino")();

module.exports = {
  slacktil(req, res) {
    pino.info(req.params);
    pino.info(req.body);
    pino.info(req.query);
    request("https://slack.com/api/users.list?token=" + process.env.SLACK_TOKEN, function(error, response, body) {
      pino.info(error);
      pino.info(body);
      body = JSON.parse(body)
      body.members.forEach(function (member) {
        pino.info(member.name)
      })

    });
  }
}
