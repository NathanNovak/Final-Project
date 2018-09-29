const db = require("../models");
const bcrypt = require('bcryptjs');

// Defining methods for the booksController
module.exports = {

  create: function(req, res) {
    console.log("Post Brewer", res)
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync("Password" , salt);
    db.Brewer.create({
      BreweryName: "The Pig Lounge", 
      address: '456 e University st', 
      city: 'tucson', 
      state: 'az',
      zip: '85740',
      phone: '888-222-3455',
      email: 'n@n.com',
      description: 'HOWWEEELLLL',
      hours: '9-5',
      password: hash,
      loggedIn: 'false'
       }).then(function(dbModel) {
      res.json(dbModel);
      console.log("POSTED", dbModel)
  });
  },

  findAll: function(req, res) {
    console.log("Get Saved", res)
    db.Brewer.findAll({}).then(dbModel =>{

      console.log("MODEL", dbModel)
      return res.json(dbModel);
   });
  },

  findById: function(req, res) {  
    console.log(req.params)
    db.Brewer
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  delete: function(req, res) {
    db.Brewer
    .destroy({
      where: {
        id: req.params.id
      }  
    })    
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  }
};
