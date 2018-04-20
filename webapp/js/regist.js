$(function () {
    $("#username").on("blur",function () {
        checkuser();
    });
    $("#password").on("blur",function () {
        checkpwd();
    });
    $("#password_re").on("blur",function () {
        checkpwdre();
    });
    $("#email").on("blur",function () {
        checkemail();
    });
    $("#telephone").on("blur",function () {
        checktel();
    });
    $("#age").on("blur",function () {
        checkage();
    });
    $("#submit-form").on("click",function () {
        if(checkuser()&&checkemail()){
            //ajax提交数据到后台，实现注册

        }
    });
});

var checkuser = function(){
    var value = $("#username").val();
    //1.是否为空校验
    if(value==null||value==undefined||value==""){
        $("#text-name").text("用户名不能为空，请输入用户名！").css("color","red");
        return false;
    }
    //2.长度校验
    //3.用户名重复校验
    var flag = true;
    ajaxevent({username:value},"/checknameaction",function (data) {
        console.log(data);
        if(data.result === "success"){
            $("#text-name").text("用户名已存在，请重新输入！").css("color","red");
            flag = false;
        }else{
            $("#text-name").text("合法用户名！").css("color","blue");
        }
    });
    return flag;
}
var checkpwd= function () {}
var checkpwdre = function () {}
var checkemail = function () {
    var value = $("#email").val();
    var reg = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
    if(reg.test(value)){
        $("#text-email").text("合法邮箱！").css("color","blue");
        return true;
    }else{
        $("#text-email").text("邮箱格式错误！").css("color","red");
        return false;
    }
}
var checktel = function () {}
var checkage=function () {}