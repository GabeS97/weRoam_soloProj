'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    userId: DataTypes.INTEGER,
    // imageLink: DataTypes.STRING,
    // imageId: DataTypes.INTEGER,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    title: DataTypes.STRING,
    // latitude: DataTypes.NUMERIC,
    // longtitude: DataTypes.NUMERIC,
    name: DataTypes.STRING,
    price: DataTypes.NUMERIC
  }, {});
  Spot.associate = function (models) {
    // associations can be defined here
    Spot.belongsTo(models.User, { foreignKey: 'userId' })
    Spot.hasMany(models.Booking, { foreignKey: 'spotId', onDelete: 'cascade', hooks: true })
    Spot.hasMany(models.Review, { foreignKey: 'spotId', onDelete: 'cascade', hooks: true })
    Spot.hasMany(models.Image, { foreignKey: 'spotId' })
  };
  return Spot;
};
