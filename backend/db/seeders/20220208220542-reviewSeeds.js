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
        userId: 1,
        activityId: 2,
        title: 'Love it',
        reviews: 'I had an amazinng time at this place',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        activityId: 3,
        title: 'Love it',
        reviews: 'I think the places we visited were amazing, however, our host was not the most friendly',
        
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
