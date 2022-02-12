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
        userId: 1,
        imageLink: 'https://www.japan-guide.com/g18/3034_001_01.jpg',
        address: '11 Naitomachi, Shinjuku City, Tokyo 160-0014, Japan',
        city: 'Tokyo',
        state: null,
        country: 'Japan',
        price: 15.00,
        name:'Shinjuku Gyoen National Garden',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        imageLink: 'https://res.klook.com/image/upload/c_fill,w_1160,h_460,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/tfo7smrskl1zkmmx6afp.webp',
        address: 'Rue de Rivoli, 75001 Paris, France',
        city: 'Paris',
        state: null,
        country: 'France',
        price: 15.00,
        name:'The Louvre',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        imageLink: 'https://upload.travelawaits.com/ta/uploads/2021/04/westminster-abbey-in-london25c6b2-800x800.jpg',
        address: '20 Deans Yd, London SW1P 3PA, United Kingdom' ,
        city: 'London',
        state: null,
        country: 'United Kingdom',
        price: 15.00,
        name:'Westminster Abbey',
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
    return queryInterface.bulkDelete('Activities', null, {});
  }
};
