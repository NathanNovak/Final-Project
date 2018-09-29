const router = require("express").Router();
const controller = require("../../controllers");
// var db = require("../../models");

// router.post("/user", (req, res) => {
  // dbController.create(req, res);
// });
// router.post("/brewers", (req, res) => { 
//   // dbController.create(req, res);
//   db.Brewer.create({
//     BreweryName: "Ava's Place", 
//     address: '55564 e 10th st', 
//     city: 'tucson', 
//     state: 'az',
//     phone: '888-888-1234',
//     email: 'n@n.com',
//     description: 'Yes Sir',
//     hours: '9-5',
//     password: 'HashMan2',
//     loggedIn: 'false'
//      }).then(function(dbModel) {
//     res.json(dbModel);
//     console.log("POSTED", dbModel)
// });
// });


// router.get("/user", (req, res) => {
//   controller.findAll(res);
// });

router.route("/users")
.get(controller.UserController.findAll)
.post(controller.UserController.create);

router.route("/users/:id")
  .get(controller.UserController.findById) 

router.route("/brewers")
  .get(controller.BrewerController.findAll)
  .post(controller.BrewerController.create);

router.route("/brewers/:id")
  .get(controller.BrewerController.findById)
  .delete(controller.BrewerController.delete) 

module.exports = router;
