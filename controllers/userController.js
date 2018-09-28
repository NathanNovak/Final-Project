const db = require("../models");
const bcrypt = require('bcryptjs');

module.exports = {
    create: function (req, res) {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync("Password", salt);
        let user = {
            email: "ncortes1415@gmail.com",
            phone: "520-665-9464",
            password: hash,
            loggedIn: 'false'

        }
        db.User.create({
            email: "ncortes1415@gmail.com",
            phone: "520-665-9464",
            password: hash
        }).then(function (dbModel) {
            res.json(dbModel);
            console.log("POSTED", dbModel);
        })

    }

}