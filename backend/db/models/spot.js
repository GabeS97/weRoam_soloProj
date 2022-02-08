'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    country: DataTypes.STRING,
    spotLink: DataTypes.STRING
  }, {});
  Spot.associate = function (models) {
    // associations can be defined here
    Spot.hasMany(models.Activity, { foreignKey: 'spotId' })
  };
  return Spot;
};
