var connection = require("../config/connection.js");

var orm = {
    selectAll: function (table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (err, results) {
            if (err) { throw err; }
            cb(results);
        });
    },
    createOne: function (table,newBurger, cb) {
        var queryString = "INSERT INTO " + table + " (burger_name) VALUES (?)";
         connection.query(queryString, newBurger , function (err,results) {
             if (err) { throw err; }
             cb(results);
         });
    },
    updateOne: function (table,burger,cb){
        var queryString = "UPDATE " + table + " SET devoured = 1 WHERE id = " + burger;
        connection.query(queryString, function (err,results) {
            if (err) { throw err }
            cb(results);
        });
    }
};

module.exports = orm;