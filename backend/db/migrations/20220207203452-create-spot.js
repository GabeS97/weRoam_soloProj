'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Spots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // userId: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      //   references: { model: 'Users'}
      // },
      // address: {
      //   type: Sequelize.STRING,
      //   allowNull: false
      // },
      // city: {
      //   type: Sequelize.STRING,
      //   allowNull: false
      // },
      // state: {
      //   type: Sequelize.STRING,
      //   allowNull: false
      // },
      country: {
        type: Sequelize.STRING,
        allowNull: false
      },
      spotLink: {
        allowNull: false,
        type: Sequelize.STRING(1000)
      },
      // name: {
      //   type: Sequelize.STRING,
      //   allowNull: false
      // },
      // price: {
      //   type: Sequelize.NUMERIC(6,2),
      //   allowNull: false,

      // },
      // description: {
      //   type: Sequelize.TEXT,
      //   allowNull: false
      // },
      // guests: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false
      // },
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
    return queryInterface.dropTable('Spots');
  }
};
