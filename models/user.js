'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING
  });

  User.associate = function(models) {
    models.User.hasMany(models.Task);
    models.User.hasMany(models.Timesheet);
    models.User.hasMany(models.Teamjide);
  };

  return User;
};
