module.exports = (sequelize, DataTypes) => {
  const Vote = sequelize.define('Vote', {
  });
  Vote.associate = (models) => {
    Vote.belongsTo(models.Author, {
      foreignKey: 'authorId',
      onDelete: 'CASCADE',
      as: "author",
      allowNull: false,
    }),
    Vote.belongsTo(models.Til, {
      foreignKey: 'tilId',
      onDelete: 'CASCADE',
      as: "til",
      allowNull: false,
    });
  };
  return Vote;
};
