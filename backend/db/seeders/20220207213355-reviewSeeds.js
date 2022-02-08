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
        spotId: 3,
        rating: 5,
        title: 'Next time, I am bringing my family',
        reviews: 'I had an amazing time here, met some amazing people and even got the chance to learn a little bit of Japanese.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        activityId: 3,
        spotId: 2,
        rating: 5,
        title: 'Loved every second of this trip',
        reviews: 'I thought that the people were a little bit rude, however, I love what Paris has to offer. Considering moving here!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        activityId: 1,
        spotId: 1,
        rating: 5,
        title: 'Amazing!!!',
        reviews: 'I spent a good chunk of my childhood here, but every time I come back there is alwasy something new to see.',
        createdAt: new Date(),
        updatedAt: new Date(),
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
