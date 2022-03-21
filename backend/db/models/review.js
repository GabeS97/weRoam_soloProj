'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: DataTypes.INTEGER,
    spotId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    reviews: DataTypes.STRING,

  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User, { foreignKey: 'userId' })
    Review.belongsTo(models.Spot, { foreignKey: 'spotId' })
    Review.belongsTo(models.Image, { foreignKey: 'imageId' });

  };
  return Review;
};
