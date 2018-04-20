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

function insertUserInfo(json,callback){
    let username = json.username;
    let pwd = json.pwd;
    let mail = json.mail;
    let telephone = json.tel==undefined ? null : json.tel;
    let age = json.age==undefined ? null : json.age;
    let address = json.address==undefined ? null : json.address;
    let array = [username,pwd,mail,telephone,age,address];
    connection.query("insert into userinfo(name,pwd,mail,telephone,age,address) values(?,?,?,?,?,?)",array,function (err,results,fields) {
        callback(results);
    });
}
module.exports = {queryUserByName};
