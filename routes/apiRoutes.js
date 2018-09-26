const axios = require("axios");
const router = require("express").Router();
const controllers = require("../controllers");



router.post("/user", (req, res) => {

    dbController.create(req, res);

});
router.post("/brewers", (req, res) => {

    dbController.create(req, res);

});

router.get("/user", (req, res) => {

    Controller.findAll(res)
});
router.get("/brewers", (req, res) => {

    Controller.findAll(res)
})



module.exports = router;