// ORM is imported so that the file can interact with the burgers_db database.
var orm = require("../config/orm.js");

var burger = {
//accessing the selectAll query from orm file
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  //accessing the nsertOne query from orm file
  create: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }

};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
