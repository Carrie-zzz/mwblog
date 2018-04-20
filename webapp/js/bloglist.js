$(document).ready(function () {
    // $('#summernote').summernote({
    //     height: 300,                 // set editor height
    //     minHeight: 500,             // set minimum height of editor
    //     maxHeight: 500,             // set maximum height of editor
    //     focus: true                  // set focus to editable area after initializing summernote
    // });
    //加载用户名到页面上
    $("#name").prepend(window.localStorage.getItem("username"));
    //加载当前页面需要请求的所有数据
    let userid = window.localStorage.getItem("userid");
    ajaxevent({userid:userid},"/initlistaction",function (data) {
        console.log(data);
    })
});
var loginout = function () {
    window.localStorage.removeItem("username");
    window.localStorage.removeItem("userid");
    window.location.href = "../login.html";
}