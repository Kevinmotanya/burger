//node dependencies
var express = require("express");
var router = express.Router();
var burger = require("../models/burger");
//route that renders all the burgers
router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });

});
// (console.log(hbsObject))
router.get("/api/burgers", function (req, res) {
    burger.all(function (data) {
        res.json(data);
    });

});
//creates a new bueger
router.post("/api/burgers", function (req, res) {
    burger.createOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function (result) {

        res.json({
            id: result.insertId
        })
    })
});
//route to update status/conditon of (a) burger(s)
router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            // if connections is successful
            res.status(200).end();
        }
    });
});
//eat or delete an eaten burger
router.delete("/api/burgers", function (req, res) {
    var condition = "devoured = 1";

    burger.deleteDevoured(
        condition,
        function (result) {
            console.log(result);
            res.status(200).end();
        }
    )
})
//exporting the routes at the end of the file
module.exports = router;