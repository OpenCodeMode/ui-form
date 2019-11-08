import $ from  'jquery'
import jQuery from 'jquery' 

jQuery(document).ready(function(){

    $("register").on("click",function(){
        window.location.href = "Home.js";
    });
//登陆请求
$("#login").on("click",function(){
    // 判空处理
     var telphone =  $("#telphone").val();
     if (telphone == null || telphone == "") {
         alert("手机号不能为空");
         return false;
     }
    //  if (password == null || password == "") {
    //     alert("手机号不能为空");
    //     return false;
    // }
    $.ajax({
        type:"POST",
        contentType:"application/x-www-form-urlencoded",
        url:"http://localhost:8090/user/getotp",
        data:{
            "telphone":$("#telphone").val(),
            "password":$("#password").val()
        },
        xhrFields:{withCredentials:true},
        success:function(data){
            if (data.status === "success") {
                alert("登陆成功");
                window.location.href="login";
            }else {
                alert("登陆失败，原因为"+data.data.errMsg);
            }
        },
        error:function(data){
            alert("登陆失败，原因为 "+data.responseText);
        }
    });
    return false;
    });
});
    