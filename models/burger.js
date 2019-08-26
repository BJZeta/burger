var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(results) {
            cb(results);
        });
    },
    createOne: function(col,val,cb) {
        orm.createOne("burgers", col, vals, function (results) {
            cb(results);
        }); 
    },
    updateOne: function(burger,cb) {
        orm.updateOne("burgers", burger, function (results) {
            cb(results);
        })
    }
};

module.exports = burger;