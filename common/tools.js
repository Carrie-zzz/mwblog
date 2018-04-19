"use strict";
const fs = require("fs");

function sendFile(path,res) {
    fs.readFile(path,function (err, data) {
        if(err){
            res.writeHead(500);
            res.end();
        }else{
            res.write(data);
            res.end();
        }
    });
}

module.exports = {sendFile};