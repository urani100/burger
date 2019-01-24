// ORM is imported so that the file can interact with the burgers_db database.
var orm = require("../config/orm.js");

var burger = {
//accessing the selectAll query from orm file
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  //accessing the insertOne query from orm file
  create: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  
  //accessing the updateOne query from orm file
  update: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }

};

// export burger
module.exports = burger;
