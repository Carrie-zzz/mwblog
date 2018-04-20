"use strict";
//引入模块
const blogdao = require("../dao/bloginfodao")

function initListData(fields,res) {
    var json = {};
    //1.所有栏目
    blogdao.queryCate(fields.userid,function (err, results1) {
        //2.当前博客列表
        blogdao.queryBlogList(fields.userid,function (err, results2) {
            //3.当前总分页数
            blogdao.blogCount(fields.userid,function (err, results3) {
                let array1 = [];
                results1.forEach(function (result) {
                    array1[array1.length] = {
                        cateid:result.id,
                        name:result.categoryname
                    }
                });
                json.item1 = array1;
                //整理博客信息数据
                let array2 = [];
                results2.forEach(function (result) {
                    array2[array2.length] = {
                        blogid:result.id,
                        title:result.title,
                        summary:result.summary
                    }
                });
                json.item2 = array2;
                //整理分页数据
                let count = results3[0]["count(*)"];
                json.item3 = count%9===0 ? Math.floor(count/9) : Math.floor(count/9)+1;
                res.writeHead(200);
                res.end(JSON.stringify(json));
            });
        });
    });



}

module.exports = {initListData};