var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var burgerObj = {
            burgers: data
        };
        res.render("index", burgerObj);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.createOne(["burgers_name"],[req.body.burgers_name], function (results) {
        res.json({ id: results.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var currentBurger = req.params.id;
    burger.updateOne(currentBurger, function (results) {
        if (results.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;