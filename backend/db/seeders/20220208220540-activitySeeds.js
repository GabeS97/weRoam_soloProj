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
        imageLink: 'https://www.japan-guide.com/g18/3034_001_01.jpg',
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
        imageLink: 'https://res.klook.com/image/upload/c_fill,w_1160,h_460,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/tfo7smrskl1zkmmx6afp.webp',
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
        imageLink: 'https://upload.travelawaits.com/ta/uploads/2021/04/westminster-abbey-in-london25c6b2-800x800.jpg',
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
        imageLink: 'https://wallpapercave.com/wp/wp4196581.jpg',
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
        imageLink: 'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1569583137/my603i6e4wp3jk6rhjdn.jpg',
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
        imageLink: 'https://wallpapercave.com/wp/wp1851483.jpg',
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
        imageLink: 'https://c0.wallpaperflare.com/preview/864/822/468/fira-santorini-greece.jpg',
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
        imageLink: 'https://wallpapercave.com/wp/wp4190535.jpg',
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
