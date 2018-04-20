"use strict";

const userdao = require("../dao/userinfodao");
//对用户信息进行操作：登录、注册、用户信息修改、注销
var logincheck = function(fields,res){
    //获取到了请求的参数
    userdao.queryUserByName(fields.username,function(results){
        //做校验操作
        if(results.length==0){
            //用户名不存在
            res.writeHead(200);
            res.end("{result:'fault',desc:'0'}");
        }else{
            let result = results[0];
            if(result.pwd === fields.password){
                //登录成功
                res.writeHead(200);
                res.end("{result:'success',desc:'1',userid:'"+result.id+"'}");
            }else{
                //密码错误
                //登录成功
                res.writeHead(200);
                res.end("{result:'fault',desc:'2'}");
            }
        }
    });
}
var registcheck = function(fields,res){
    //获取到了请求的参数
    userdao.queryUserByName(fields.username,function(results){
        //做校验操作
        if(results.length==0){
            //用户名不存在
            res.writeHead(200);
            res.end("{result:'fault'}");
        }else{
            //用户名存在
            res.writeHead(200);
            res.end("{result:'success'}");
        }
    });
}
module.exports = {logincheck,registcheck};