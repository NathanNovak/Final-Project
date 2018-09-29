"use strict";

module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
		
		firstName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: false
		},
    email: {
      type: DataTypes.STRING,
			allowNull: false,
			validate: {
        min: 1,
        isEmail: true
      }
		},
		phone: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
        min: 12,
        not: ["[a-z]",'i']
      }
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
        min: 8,
      }
		},
		loggedIn: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		}
  });

  return Users;
};