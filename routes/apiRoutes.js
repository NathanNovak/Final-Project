const axios = require("axios");
const router = require("express").Router();
const controller = require("../controllers");
var db = require("../models");

router.post("/user", (req, res) => {
  dbController.create(req, res);
});
router.post("/brewers", (req, res) => { 
  // dbController.create(req, res);
  db.Brewer.create(req.body).then(function(dbModel) {
  //   // res.json(dbUsers);
    console.log("POSTED", dbModel)
});
});


router.get("/user", (req, res) => {
  controller.findAll(res);
});

router.get("/brewers", (req, res) => {
  // controller.Brewer(findAll(res));
  db.Brewer.findAll({}).then(dbModel =>{

     console.log("MODEL", dbModel[0].dataValues)
     res.json(dbModel);
  });
});

module.exports = router;
