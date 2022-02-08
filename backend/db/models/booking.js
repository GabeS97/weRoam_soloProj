'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    spotId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE
  }, {});
  Booking.associate = function (models) {
    // associations can be defined here
    Booking.belongsToMany(models.User, { through: 'Activity', foreignKey: 'bookingId', otherKey: 'userId' });
    Booking.hasOne(models.Spot, { foreignKey: 'spotId' })
  };
  return Booking;
};
