'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Users' }
      },
      activityId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Activities' }
      },
      spotId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Spots' }
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      reviews: {
        type: Sequelize.STRING(500)
      },
      rating: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Reviews');
  }
};
