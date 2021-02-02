'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teamemeka = sequelize.define('Teamemeka', {
    name: DataTypes.STRING
  });

  Teamemeka.associate = function (models) {
    models.Teamemeka.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Teamemeka;
};
