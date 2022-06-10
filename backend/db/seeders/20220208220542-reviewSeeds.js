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
        username: '	Demo-lition',
        // imageId: 2,
        rating: 4,
        title: 'Love it',
        reviews: 'Such an amazing experience',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        spotId: 1,
        username: 'FakeUser2',
        // imageId: 2,
        rating: 3,
        title: 'Love it',
        reviews: 'Such an amazing experience',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        username: 'FakeUser2',
        spotId: 1,
        // imageId: 2,
        rating: 5,
        title: 'Love it',
        reviews: 'Such an amazing experience',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        spotId: 2,
        username: 'FakeUser1',
        // imageId: 1,
        rating: 4,
        title: 'Could have been better',
        reviews: 'It was a greate exp, had great food, but the host was kinda rude',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        spotId: 3,
        // imageId: 3,
        username: 'FakeUser3',
        rating: 4,
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
