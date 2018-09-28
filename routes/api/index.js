const router = require("express").Router();
const appRoutes = require("./apiRoutes");

// Article routes
router.use("/brewers", appRoutes);
router.use("/users", appRoutes);

module.exports = router; 