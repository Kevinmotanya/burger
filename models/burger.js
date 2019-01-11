var orm = require("../config/orm");

var burger = {
    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    createOne: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        })
    },
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    },
    deleteDevoured: function (condition, cb) {
        orm.deleteDevoured("burgers", condition, function (res) {
            cb(res);
        })
    }
};

module.exports = burger;