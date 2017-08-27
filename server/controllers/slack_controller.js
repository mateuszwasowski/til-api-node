const TilSerializer = require('../serializers/author_serializer');
const Author = require('../models').Author;
const Til = require('../models').Til;
const request = require("request");
const pino = require("pino")();

module.exports = {
  slacktil(req, res) {
    pino.info(req.params);
    pino.info("BODY:")
    pino.info(req.body);
    pino.info("QUERY:")
    pino.info(req.query);
    request = JSON.parse(req.query)
    request("https://slack.com/api/users.list?token=" + process.env.SLACK_TOKEN, function(error, response, body) {
      body = JSON.parse(body)
      body.members.forEach(function (member) {
        pino.info(member.name)
      })

    });
  }
}
