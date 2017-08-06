module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('Tils', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
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
      }
    });
  },
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Tils'),
};
