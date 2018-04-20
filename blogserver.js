"use strict";
//引入库模块
const ht = require("http"),
    pt = require("path"),
    url = require("url"),
    formidable = require("formidable");
//引入项目模块
const tools = require("./common/tools"),
    userctl = require("./control/usercontrol"),
    blogctl = require("./control/blogcontrol");

const server = ht.createServer(function (req, res) {
    let path = req.url;
    path = url.parse(path,true);
    //路由实现
    if(path.pathname === "/favicon.ico"){
        tools.sendFile(pt.join(__dirname,"webapp/images/logo.png"),res);
    }else if(path.pathname === "/loginaction"){
        //1.获取请求的参数
        let form = new formidable.IncomingForm();
        form.parse(req,function (err, fields,files) {
            userctl.logincheck(fields,res);
        });
    }else if(path.pathname === "/checknameaction"){
        //1.获取请求的参数
        let form = new formidable.IncomingForm();
        form.parse(req,function (err, fields,files) {
            userctl.registcheck(fields,res);
        });
    }else if(path.pathname === "/initlistaction"){
        //1.获取请求的参数
        let form = new formidable.IncomingForm();
        form.parse(req,function (err, fields,files) {
            blogctl.initListData(fields,res);
        });
    }else{
        tools.sendFile(pt.join(__dirname,"webapp",path.pathname),res);
    }
});

server.listen(8080,function (err) {
    if(err) throw err;
    console.log("server is started!");
})

