'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    userId: DataTypes.INTEGER,
    spotId: DataTypes.INTEGER,
    imageUrl:  DataTypes.STRING,
    content: DataTypes.STRING
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
    Image.belongsTo(models.Spot, { foreignKey: 'spotId' });
    Image.belongsTo(models.User, { foreignKey: 'userId' });
    // Image.hasMany(models.Review, { foreignKey: 'imageId', onDelete: 'CASCADE', hooks: true  });
  };
  return Image;
};
