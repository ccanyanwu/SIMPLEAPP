'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teamjide = sequelize.define('Teamjide', {
    name: DataTypes.STRING
  });

  Teamjide.associate = function (models) {
    models.Teamjide.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Teamjide;
};
