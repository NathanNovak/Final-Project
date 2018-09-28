"use strict";

module.exports = function(sequelize, DataTypes) {
  var Brewer = sequelize.define("Brewer", {
    BreweryName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 1
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
     city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zip: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // max: 10,
        not: ["[a-z]",'i']
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 1,
        isEmail: true
      }
    },
    description: {
      type: DataTypes.TEXT,
      validate: {
       len: [2, 500]
      }
    },
    hours: {
      type: DataTypes.STRING
    },
    password: {
			type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 8
      }
		},
		loggedIn: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		}
  });

  return Brewer;
};