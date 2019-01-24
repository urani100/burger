var express = require("express");



var router = express.Router();
// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");


// create routes and associate functions to routes

//render all elements from database in index page
router.get("/", function(req, res) {
  burger.all(function(data) {
    var object = {
      burgers: data
    };
    res.render("index", object);
  });
});

//post new burger created
router.post("/api/burgers", function(req, res) {
  burger.create(["burger_name"], [req.body.burger_name], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
   
  });
});

//update devoured burger status 
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id; 
  burger.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});



// export router 
module.exports = router;
