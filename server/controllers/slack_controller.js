const TilSerializer = require('../serializers/author_serializer');
const Author = require('../models').Author;
const Til = require('../models').Til;
const request = require("request");
const pino = require("pino")();

module.exports = {
  slacktil(req, res) {
    request("https://slack.com/api/users.list?token=" + process.env.SLACK_TOKEN, function(error, response, body) {
      body = JSON.parse(body)

      body.members.forEach(function (member) {
        if (member.name === req.body.user_name){
          var user_email = member.email
        }
      })
      pino.info(user_email);

    });
  }
}
