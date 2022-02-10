'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Images', [
      {
        activityId: 1,
        url: 'https://www.japan-guide.com/g18/3034_001_01.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        activityId: 2,
        url: 'https://res.klook.com/image/upload/c_fill,w_1160,h_460,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/tfo7smrskl1zkmmx6afp.webp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        activityId: 3,
        url: 'https://upload.travelawaits.com/ta/uploads/2021/04/westminster-abbey-in-london25c6b2-800x800.jpg',
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
    return queryInterface.bulkDelete('Images', null, {});
  }
};
