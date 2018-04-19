"use strict";
//引入库模块
const ht = require("http"),
    pt = require("path"),
    url = require("url");
//引入项目模块
const tools = require("./common/tools");

const server = ht.createServer(function (req, res) {
    let path = req.url;
    path = url.parse(path,true);
    //路由实现
    if(path.pathname === "/favicon.ico"){
        tools.sendFile(pt.join(__dirname,"webapp/image/logo.png"),res);
    }else{
        tools.sendFile(pt.join(__dirname,"webapp",path.pathname),res);
    }
});

server.listen(8080,function (err) {
    if(err) throw err;
    console.log("server is started!");
})

