'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: DataTypes.INTEGER,
    activityId: DataTypes.INTEGER,
    spotId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    title: DataTypes.STRING,
    reviews: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsToMany(models.User, {through: 'Activity', foreignKey: 'reviewId', otherKey: 'userId'});

  };
  return Review;
};
