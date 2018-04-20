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
//查询分类信息
function queryCate(userid,callback) {
    connection.query("select * from category where userid=?",[userid],function (err,results,fields) {
        callback(err,results);
    })
}
//查询所有的博客列表数据
function queryBlogList(userid,callback) {
    connection.query("select * from bloginfo where userid=? limit 0,9",[userid],function (err,results,fields) {
        callback(err,results);
    })
}
//统计总条数
function blogCount(userid,callback) {
    connection.query("select count(*) from bloginfo where userid=?",[userid],function (err,results,fields) {
        callback(err,results);
    })
}


module.exports = {queryCate,queryBlogList,blogCount};
