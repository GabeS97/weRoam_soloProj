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
        // Tokyo
        userId: 1,
        spotId: 1,
        imageUrl: 'https://www.japan-guide.com/g18/3034_001_01.jpg',
        content: 'I love this place',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // Tokyo
        userId: 1,
        spotId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1476055090065-a605fefd840e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hpbmp1a3UlMjBneW9lbiUyMG5hdGlvbmFsJTIwZ2FyZGVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        content: 'I love this place',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // Tokyo
        userId: 1,
        spotId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1532188978303-4bfaccc429d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNoaW5qdWt1JTIwZ3lvZW4lMjBuYXRpb25hbCUyMGdhcmRlbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        content: 'I love this place',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // Tokyo
        userId: 1,
        spotId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1473200705267-319bfdc89671?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNoaW5qdWt1JTIwZ3lvZW4lMjBuYXRpb25hbCUyMGdhcmRlbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        content: 'I love this place',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // Tokyo
        userId: 1,
        spotId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1522895788996-7feeec6f467b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c2hpbmp1a3UlMjBneW9lbiUyMG5hdGlvbmFsJTIwZ2FyZGVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        content: 'I love this place',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // Tokyo
        userId: 1,
        spotId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1530339287297-fec8f06e0bda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHNoaW5qdWt1JTIwZ3lvZW4lMjBuYXRpb25hbCUyMGdhcmRlbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        content: 'I love this place',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // Tokyo
        userId: 1,
        spotId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1553956684-103abbe21f75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNoaW5qdWt1JTIwZ3lvZW4lMjBuYXRpb25hbCUyMGdhcmRlbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        content: 'I love this place',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // Paris
        userId: 1,
        spotId: 2,
        imageUrl: 'https://res.klook.com/image/upload/c_fill,w_1160,h_460,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/tfo7smrskl1zkmmx6afp.webp',
        content: 'I love this place',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // London
        userId: 1,
        spotId: 3,
        imageUrl: 'https://upload.travelawaits.com/ta/uploads/2021/04/westminster-abbey-in-london25c6b2-800x800.jpg',
        content: 'I love this place',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // Spain
        userId: 1,
        spotId: 4,
        imageUrl: 'https://wallpapercave.com/wp/wp4196581.jpg',
        content: 'I love this place',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // Rome
        userId: 1,
        spotId: 5,
        imageUrl: 'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1569583137/my603i6e4wp3jk6rhjdn.jpg',
        content: 'I love this place',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // Dubai
        userId: 1,
        spotId: 6,
        imageUrl: 'https://wallpapercave.com/wp/wp1851483.jpg',
        content: 'I love this place',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // Greece
        userId: 1,
        spotId: 7,
        imageUrl: 'https://c0.wallpaperflare.com/preview/864/822/468/fira-santorini-greece.jpg',
        content: 'I love this place',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // Zhangye City
        userId: 1,
        spotId: 8,
        imageUrl: 'https://wallpapercave.com/wp/wp4190535.jpg',
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
