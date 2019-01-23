
// connection is require to have access to the database
var connection = require("../config/connection.js");

// orm Object encompasses SQL functions.
var orm = {
 selectAll: function(table, cb) {
    var query = "SELECT * FROM " + table + ";";
    connection.query(query, function(err, result) {
      if (err) {throw err};
      
      cb(result);
    });
  },
//insert function
  insertOne:function(table, cols, vals, cb) {
    var query = "INSERT INTO " + table + " (burger_name)  VALUES (?)" 
    console.log(query, cols, vals);
    connection.query(query, vals, function(err, result) {
      if (err) {throw err};
      
      cb(result);
    });
  },
  // update function name
  update: function(table, objColVals, condition, cb) {
    console.log(objColVals);
    var queryString = "UPDATE " + table + " SET devoured = 1 WHERE " + condition
    connection.query(queryString,[objColVals, condition], function(err, result) {
      if (err) {throw err};
      

      cb(result);
    });
  }

 };

// Export the orm object
module.exports = orm;