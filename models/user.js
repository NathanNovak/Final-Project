"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("Users", {
		password: {
			type: DataTypes.STRING,
			allowNull: false
		},
    email: {
      type: DataTypes.STRING,
      allowNull: false
		},
		authToken: {
			type: DataTypes.STRING
		}
		// brewer: {
		// 	type:DataTypes.boolean
		// }
  });

  return User;
};