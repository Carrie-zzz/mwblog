"use strict";

const fs = require("fs");

function readFile11(callback) {
    fs.readFile("./blogserver.js",function (err,data) {
        console.log("aaa");
        callback();
    })
}
function readFile12(callback) {
    fs.readFile("./blogserver.js",function (err,data) {
        console.log("bbb");
        callback();
    })
}
function main() {
    readFile11(function(){
        readFile12(function () {
            console.log("ccc");
        });
    });
}
main();