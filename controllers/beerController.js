const db = require("../models");

module.exports = {

	create: function(req, res) {
    // console.log("Post Beer", res)
    
    db.Beer.create({
		 beerName: "Blue Moon",
		 brewer: "Coors",
		 IBU: "65",
		 ABV: "5.2",
		 tastingNotes:"blah blah blah"
       }).then(function(dbModel) {
      res.json(dbModel);
      console.log("Beer POSTED", dbModel)
  });
	},
	
	findAll: function(req, res) {
    // console.log("Get Saved", res)
    db.Beer.findAll({}).then(dbModel =>{

      console.log("Beer", dbModel)
      return res.json(dbModel);
   });
	},
	
	findById: function(req, res) {  
    console.log(req.params)
    db.Beer
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
	},
	
	delete: function(req, res) {
    db.Beer
    .destroy({
      where: {
        id: req.params.id
      }  
    })    
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  }
}