'use strict';
module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define('Activity', {
    spotId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    reviewId: DataTypes.INTEGER,
    bookingId: DataTypes.INTEGER,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    price: DataTypes.NUMERIC,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    guests: DataTypes.INTEGER
  }, {});
  Activity.associate = function (models) {
    // associations can be defined here
    Activity.hasMany(models.Booking, { foreignKey: 'activityId' });
    Activity.hasMany(models.Image, { foreignKey: 'activityId' });
    Activity.belongsTo(models.Spot, { foreignKey: 'spotId' });
  };
  return Activity;
};
