'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    activityId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    startDate: DataTypes.DATE
  }, {});
  Booking.associate = function(models) {
    // associations can be defined here
    Booking.belongsTo(models.Activity, { foreignKey: 'activityId' })
    Booking.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Booking;
};
