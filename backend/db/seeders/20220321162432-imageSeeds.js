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
        userId: 1,
        spotId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        content: 'I love this place',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        spotId: 5,
        imageUrl: 'https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        content: 'I love this place',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        spotId: 4,
        imageUrl: 'https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        content: 'I love this place',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        spotId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        content: 'I love this place',
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
    return queryInterface.bulkDelete('Images', null, {});
  }
};
