import $ from  'jquery'
import jQuery from 'jquery' 

jQuery(document).ready(function(){
//绑定otp的click时间用于向后端发送获取手机验证码的请求
$("#getotp").on("click",function(){
    // 判空处理
     var telphone =  $("#telphone").val();
     if (telphone == null || telphone == "") {
         alert("手机号不能为空");
         console.log(telphone);
         return false;
     }
    $.ajax({
        type:"POST",
        contentType:"application/x-www-form-urlencoded",
        url:"http://localhost:8090/user/getotp",
        data:{
            "telphone":$("#telphone").val(),
        },
        xhrFields:{withCredentials:true},
        success:function(data){
            if (data.status === "success") {
                alert("otp已经发送到您的手机上请注意查收");
                window.location.href="cinema";
            }else {
                alert("otp发送失败，原因为"+data.data.errMsg);
            }
        },
        error:function(data){
            alert("otp发送失败，原因为 "+data.responseText);
        }
    });
    return false;
    });
});
    