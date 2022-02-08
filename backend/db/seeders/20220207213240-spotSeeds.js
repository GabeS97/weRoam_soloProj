'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Spots', [
      {
        country: 'London',
        spotLink: 'https://wallpapercave.com/wp/wp5523083.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        country: 'Paris',
        spotLink: 'https://wallpapercave.com/wp/wp6874125.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        country: 'Tokyo',
        spotLink: 'https://wallpapercave.com/wp/wp4081274.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        country: 'Jakarta',
        spotLink: 'https://wallpapercave.com/wp/wp1865855.jpg',
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
    return queryInterface.bulkDelete('Spots', null, {});
  }
};
