$(function(){
    $("#submit").on("click",function () {
        //获取表单数据
        var datas = $("#login-form").serialize();
        var jsonstr = paramToJson(datas);//把键值对解析为json字符串
        var json = strToJson(jsonstr);//把json字符串解析为json对象
        //TODO 判断用户名密码是否合法
        if(json.username==""||json.password==""){
            $("#waringbar").text("用户名和密码不能为空，请确认后重新提交！").slideDown(200);
            //定时消失
            setTimeout(function () {
                $("#waringbar").slideUp();
            },1500);
            return;
        }
        //执行ajax，请求登录校验
        ajaxevent(json,"/loginaction",function (data) {
            //1.判断登录结果
            if(data.result === "success"){
                console.log(data);
                $("#waringbar").text("登录成功！").slideDown(200);
                //本地存储中存入数据
                window.localStorage.setItem("username",json.username);
                window.localStorage.setItem("userid",data.userid);
                setTimeout(function () {
                    //跳转到列表页面
                    window.location.href = "../bloglist.html";
                },1500);
            }else{
                if(data.desc === "0"){
                    $("#waringbar").text("用户名不存在！").slideDown(200);
                    setTimeout(function () {
                        $("#waringbar").slideUp();
                    },1000);
                }else{
                    $("#waringbar").text("密码错误，重新输入提交！！").slideDown(200);
                    setTimeout(function () {
                        $("#waringbar").slideUp();
                    },1000);
                }
            }
        })
    })
});

