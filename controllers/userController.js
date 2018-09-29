const db = require("../models");
const bcrypt = require("bcryptjs");

module.exports = {
  create: function(req, res) {
    console.log("CREATE");
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync("Password", salt);
    let user = {
      email: "ncortes1415@gmail.com",
      phone: "520-665-9464",
      password: hash,
      loggedIn: "false"
    };
    db.Users.create({
      firstName: "Bob",
      lastName: "Smith",
      email: "ncortes1415@gmail.com",
      phone: "520-665-9464",
      password: hash
    }).then(function(dbModel) {
      res.json(dbModel);
      console.log("POSTED", dbModel);
    });
  },

  findAll: function(req, res) {
    console.log("Get Saved");
    db.Users.findAll({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    console.log(req.params);
    db.Users.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  delete: function(req, res) {
    db.Users.destroy({
      where: { id: req.params.id }
    })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  }
};
