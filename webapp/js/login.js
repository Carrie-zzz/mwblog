$(function(){
    $("#submit").on("click",function () {
        //获取表单数据
        var datas = $("#login-form").serialize();
        var jsonstr = paramToJson(datas);//吧键值对解析为json字符串
        var json = strToJson(jsonstr);//吧json字符串解析为json对象
        //TODO 判断用户名密码是否合法

        $.ajax({
           data:json,
           type:"post",
           url:"/loginaction",
           async:false,
           success:function (data) {
                console.log(data);
           },
           error:function () {

           }
        });
    })
});