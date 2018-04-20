"use strict";

const mysql = require("mysql");

//2.获取和数据库的链接
const connection = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"123123",
    database:"blogs"
});

connection.connect();

function queryUserByName(name,callback) {
    connection.query("select * from userinfo where name=?",[name],function (err,results,fields) {
        callback(results);
    });
}
module.exports = {queryUserByName};
