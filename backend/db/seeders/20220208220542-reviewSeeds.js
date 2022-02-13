'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Reviews', [
      {
        userId: 1,
        activityId: 1,
        title: 'Love it',
        reviews: 'Such an amazing experience',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        activityId: 2,
        title: 'Love it',
        reviews: 'Such an amazing experience',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        activityId: 3,
        title: 'Love it',
        reviews: 'Such an amazing experience',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
