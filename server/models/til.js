const request = require("request");

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
  return Til;
};
