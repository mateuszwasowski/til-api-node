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
  return Til;
};
