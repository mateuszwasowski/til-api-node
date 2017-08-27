const request = require("request");
var Pusher = require('pusher');
const TilSerializer = require('../serializers/til_serializer');

module.exports = (sequelize, DataTypes) => {
  const Til = sequelize.define('Til', {
    description: DataTypes.STRING
  });
  Til.associate = (models) => {
    Til.belongsTo(models.Author, {
      foreignKey: 'authorId',
      onDelete: 'CASCADE',
      as: "author",
      allowNull: false,
    }),
    Til.hasMany(models.Vote, {
      foreignKey: 'tilId',
      as: 'votes',
    });
  };

  Til.afterCreate('postToChannel', (til, options) => {
    til.getAuthor().then(author => {
      request({
          url: "https://hooks.slack.com/services/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",
          method: "POST",
          headers: {
              "content-type": "application/json",
          },
          body: JSON.stringify({ text: author.email + " posted: \n" + til.description })
      });
    });
  });

  Til.afterCreate('triggerPusher', (til, options) => {
    var pusher = new Pusher({
      appId: process.env.PUSHER_APP_ID,
      key: process.env.PUSHER_KEY,
      secret: process.env.PUSHER_APP_ID,
      encrypted: ENCRYPTED,
      cluster: 'en',
    });

    this.findAll({
      include: [
        { model: Vote, as: "votes" },
        { model: Author, as: "author" }
      ],
      order: [
        ['createdAt', 'DESC'],
      ],
    })
    .then(tils => {
      pusher.trigger(process.env.PUSHER_CHANNEL_ID, 'objectsUpdated', TilSerializer.serialize(tils));
    })
  });

  return Til;
};
