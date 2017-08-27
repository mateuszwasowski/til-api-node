const TilSerializer = require('../serializers/author_serializer');
const Author = require('../models').Author;
const Til = require('../models').Til;
const request = require("request");
const pino = require("pino")();

module.exports = {
  slacktil(req, res) {
    request("https://slack.com/api/users.list?token=" + process.env.SLACK_TOKEN, function(error, response, body) {
      res.setHeader('Content-Type', 'application/json');
      body = JSON.parse(body)
      body.members.forEach(function (member) {
        if (member.name === req.body.user_name){
          Author.find({
            where: {
              email: member.profile.email
            }
          })
          .then(author => {
            if (!author) {
              return res.status(200).send(JSON.stringify({
                 response_type: "ephemeral",
                  text: "You first have to authorize google through the til web app to connect your account."
              }));
            }
            pino.info(req.body);
            pino.info(body);
            Til.create({
              description: body.description,
              authorId: author.id,
            })
            .then(() => res.status(200).send(JSON.stringify("Your Til has been submited!")))
            .catch(error => res.status(400).send(error));
          })
        }
      })
    });
  }
}
