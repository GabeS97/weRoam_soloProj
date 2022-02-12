'use strict';
module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define('Activity', {
    userId: DataTypes.INTEGER,
    imageLink: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    // latitude: DataTypes.NUMERIC,
    // longtitude: DataTypes.NUMERIC,
    name: DataTypes.STRING,
    price: DataTypes.NUMERIC
  }, {});
  Activity.associate = function (models) {
    // associations can be defined here
    Activity.belongsTo(models.User, { foreignKey: 'userId' })
    Activity.hasMany(models.Booking, { foreignKey: 'activityId', onDelete: 'cascade', hooks: true })
    Activity.hasMany(models.Review, { foreignKey: 'activityId', onDelete: 'cascade', hooks: true })
  };
  return Activity;
};
