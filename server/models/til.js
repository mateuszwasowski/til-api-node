module.exports = (sequelize, DataTypes) => {
  const Til = sequelize.define('Til', {
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        Til.belongsTo(models.Author, {
            foreignKey: 'authorId',
            onDelete: 'CASCADE',
        }),
        Til.hasMany(models.Vote, {
          foreignKey: 'tilId',
          onDelete: 'CASCADE',
        }),
      },
    },
  });
  return Til;
};
