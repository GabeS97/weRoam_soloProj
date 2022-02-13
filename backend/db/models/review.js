'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: DataTypes.INTEGER,
    activityId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    reviews: DataTypes.STRING,

  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User, { foreignKey: 'userId' })
    Review.belongsTo(models.Activity, { foreignKey: 'activityId' })
  };
  return Review;
};
