'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Activities', [
      {
        spotId: 3,
        userId: 1,
        // reviewId: 1,
        bookingId: 1,
        address: '11 Naitomachi, Shinjuku City, Tokyo 160-0014, Japan',
        city: 'Tokyo',
        state: null,
        price: 15.00,
        name:'Shinjuku Gyoen National Garden',
        description: "Shinjuku Gyo-en is a huge park and garden in the Tokyo neighborhoods of Shinjuku and Shibuya. During the Edo period, it was the home of the Nait family. After that, it was turned into a garden under the control of Japan's Imperial Household Agency. It is now a national park under the Ministry of the Environment's administration.",
        guests: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 2,
        userId: 2,
        // reviewId: 2,
        bookingId: 2,
        address: 'Rue de Rivoli, 75001 Paris, France',
        city: 'Paris',
        state: null,
        price: 10.00,
        name: 'Sunday at the Louvre',
        description: "The Louvre is inaugurated as a public museum in Paris by the French revolutionary government after more than two centuries as a royal palace. The Louvre's collection is now one of the world's richest, containing artwork and artifacts spanning 11,000 years of human civilization and culture.",
        guests: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 1,
        userId: 3,
        // reviewId: 3,
        bookingId: 3,
        address: '20 Deans Yd, London SW1P 3PA, United Kingdom' ,
        city: 'London',
        state: null,
        price: 5.00,
        name: 'Westminster Abbey',
        description: 'Westminster Abbey, formally known as the Collegiate Church of Saint Peter at Westminster, is a huge, primarily Gothic abbey church located in the City of Westminster, London, England, immediately west of the Palace of Westminster.',
        guests: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Activities', null, {});
  }
};
