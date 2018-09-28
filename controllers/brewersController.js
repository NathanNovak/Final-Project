const db = require("../models");
const bcrypt = require('bcryptjs');

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    console.log("Get Saved", res)
    db.Brewer.findAll({}).then(dbModel =>{

      console.log("MODEL", dbModel)
      return res.json(dbModel);
   });
  },

  create: function(req, res) {
    console.log("Post Brewer", res)
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync("Password" , salt);
    db.Brewer.create({
      BreweryName: "Tylers's Place", 
      address: '8888 e Broadway st', 
      city: 'tucson', 
      state: 'az',
      phone: '888-888-4568',
      email: 'n@n.com',
      description: 'Yes All',
      hours: '9-5',
      password: hash,
      loggedIn: 'false'
       }).then(function(dbModel) {
      res.json(dbModel);
      console.log("POSTED", dbModel)
  });
  },

  findById: function(req, res) {  
    console.log(req.params)
    db.Brewer
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
	}
};
