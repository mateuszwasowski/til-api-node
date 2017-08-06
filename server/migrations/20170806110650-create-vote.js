module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('Votes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      authorId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Authors',
          key: 'id',
          as: 'authorId',
        },
      },
      tilId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Tils',
          key: 'id',
          as: 'tilId',
        },
      }
    });
  },
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Votes'),
};
