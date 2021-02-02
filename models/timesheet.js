'use strict';
module.exports = (sequelize, DataTypes) => {
  var Timesheet = sequelize.define('Timesheet', {
    name: DataTypes.STRING
  });

  Timesheet.associate = function (models) {
    models.Timesheet.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Timesheet;
};
