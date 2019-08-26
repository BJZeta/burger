var connection = require("../config/connection.js");

var orm = {
    selectAll: function (table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (err, results) {
            if (err) { throw err; }
            cb(results);
        });
    },
    createOne: function (table, col, val, cb) {
        var queryString = "INSERT INTO " + table + "(" + col + ") VALUES (??)";
         connection.query(queryString, col, val, function (err,results) {
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