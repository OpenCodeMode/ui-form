import $ from  'jquery'
import jQuery from 'jquery' 

jQuery(document).ready(function(){
//绑定otp的click时间用于向后端发送获取手机验证码的请求
$("#register").on("click",function(){
    // // 判空处理
     var telphone =  $("#telphone").val();
     var name = $("#name").val();
     var password =  $("#password").val();
     var ConfirmPassword = $("ConfirmPassword").val();
     var age =  $("#age").val();
     var otpCode =  $("#otpCode").val();
     var gender = $("#gender").val();
     if (telphone == null || telphone == "") {
         alert("手机号不能为空");
         return false;
     }
     if (password == null || password == "") {
        alert("密码不能为空");
        return false;
    }
    if (age == null || age == "") {
        alert("年龄不能为空");
        return false;
    }
    if (otpCode == null || otpCode == "") {
        alert("验证码不能为空");
        return false;
    }
    if (name == null || name == "") {
        alert("名字不能为空");
        return false;
    }
    if (gender == null || gender == "") {
            alert("性别不能为空");
            return false;
        }
    $.ajax({
        type:"POST",
        contentType:"application/x-www-form-urlencoded",
        url:"http://localhost:8090/user/register",
        data:{
            "telphone":$("#telphone").val(),
            "password":$("#password").val(),
            "gender":$("#gender").val(),
            "age":$("#age").val(),
            "otpCode":$("#otpCode").val(),
            "name":$("#name").val()
        },
        //xhrFields:允许跨域的授信的请求，使session变为跨域可授信
        xhrFields:{withCredentials:true},
        success:function(data){
            if (data.status == "success") {
                alert("注册成功");
                // window.location.href="login";
            }else {
                alert("注册失败，原因为"+data.data.errMsg);
            }
        },
        error:function(data){
            alert("注册失败 ，原因为 "+data.responseText);
        }
    });
    return false;
    });
});
    