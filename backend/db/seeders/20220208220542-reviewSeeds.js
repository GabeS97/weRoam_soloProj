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
        spotId: 1,
        // imageId: 2,
        title: 'Love it',
        reviews: 'Such an amazing experience',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        spotId: 2,
        // imageId: 1,
        title: 'Could have been better',
        reviews: 'It was a greate exp, had great food, but the host was kinda rude',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        spotId: 3,
        // imageId: 3,
        title: 'Im coming back next year with my family',
        reviews: 'amazing. ',
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
