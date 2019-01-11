//Importing connection to the object 
var connection = require("./connection.js");
//function generates sequel syntax
function logOutMarkpoints(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}
//function generates sequel syntax
function conObjSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}
//making an ORM object to do queries for mysql
var orm = {
    selectAll: function (table, cb) {
        //query string that selects and returns burger from the table 
        var queryString = "SELECT * FROM " + table + ";";

        connection.query(queryString, function (err, results) {
            if (err) throw err;

            cb(results);
        });

    },
    //function inserts  a burger entry to the table
    insertOne: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUE (";
        queryString += logOutMarkpoints(vals.length);
        queryString += ") ";

        connection.query(queryString, vals, function (err, result) {
            if (err) throw err;

            cb(result);
        });
    },
    //function query that updates one table entry
    updateOne: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += conObjSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    //function that deletes burger eaten from the table
    deleteDevoured: function (table, condition, cb) {
        var queryString = "DELETE FROM " + table;

        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function(err, result) {
            if (err) throw err;

            cb(result)
        })
    }
};
//exporting the ORM object 
module.exports = orm;