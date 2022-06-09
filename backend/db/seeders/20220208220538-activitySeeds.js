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
        userId: 1,
        title: 'Tokyo Sight Seers',
        // imageId: 1,
        address: '11 Naitomachi, Shinjuku City, Tokyo 160-0014, Japan',
        city: 'Tokyo',
        state: null,
        country: 'Japan',
        price: 15.00,
        name: 'Shinjuku Gyoen National Garden',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        title: 'Walk with me in Paris',
        // imageId: 2,
        address: 'Rue de Rivoli, 75001 Paris, France',
        city: 'Paris',
        state: null,
        country: 'France',
        price: 15.00,
        name: 'The Louvre',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        title: 'viewOne__imagelike London',
        // imageId: 3,
        address: '20 Deans Yd, London SW1P 3PA, United Kingdom',
        city: 'London',
        state: null,
        country: 'United Kingdom',
        price: 15.00,
        name: 'Westminster Abbey',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        title: 'Vamos a la playa',
        // imageId: 4,
        address: 'C/ de Mallorca, 401, 08013 Barcelona, Spain',
        city: 'Barcelona',
        state: null,
        country: 'Spain',
        price: 15.00,
        name: 'la sagrada familia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        title: 'Long way from home? Come to Rome!',
        // imageId: 5,
        address: ' Piazza del Colosseo, 1, 00184 Roma RM, Italy',
        city: 'Rome',
        state: null,
        country: 'Italy',
        price: 15.00,
        name: 'Colosseum',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        title: 'First Timer! Explore with me',
        // imageId: 6,
        address: '1 Sheikh Mohammed bin Rashid Blvd - Downtown Dubai - Dubai - UAE',
        city: 'Dubai',
        state: null,
        country: 'UAE',
        price: 15.00,
        name: 'Burj Khalifa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        title: 'Beauty in Greece',
        // imageId: 7,
        address: 'Fira town',
        city: 'Santorini',
        state: null,
        country: 'Greece',
        price: 15.00,
        name: 'Santorini Capital',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        title: 'For outdoor enthusiasts',
        // imageId: 8,
        address: 'Gansu Province',
        city: 'Zhangye City',
        state: null,
        country: 'China',
        price: 15.00,
        name: 'Zhangye Danxia Landform Geological Park',
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
    return queryInterface.bulkDelete('Spots', null, {});
  }
};
