"use strict";

module.exports = function(sequelize, DataTypes) {
  var Brewer = sequelize.define("Brewer", {
    brewerName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Brewer;
};