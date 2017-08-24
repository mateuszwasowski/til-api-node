module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    email: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING
  });
  Author.associate = (models) => {
    Author.hasMany(models.Til, {
      foreignKey: 'authorId',
      as: 'tils',
    }),
    Author.hasMany(models.Vote, {
      foreignKey: 'authorId',
      as: 'votes',
    });
  };
  return Author;
};
