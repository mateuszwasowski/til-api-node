'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vote = sequelize.define('Vote', {
  }, {
    classMethods: {
      associate: (models) => {
        Vote.belongsTo(models.Author, {
          foreignKey: 'authorId',
          onDelete: 'CASCADE',
        }),
        Vote.belongsTo(models.Til, {
          foreignKey: 'tilId',
          onDelete: 'CASCADE',
        });
      },
    },
  });
  return Vote;
};
