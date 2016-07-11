/**
 * Created by FiShelly on 2016/5/14.
 */

$(document).ready(function(){
    $("#sub_btn").click(function(){
        var $v = $("#role").val();
        if($v == 0){
            $("#error_text").css("visibility","visible");
            $("#etc").text("请选择登录角色");
            return false;
        }
    });
    $("#role").change(function(){
        $("#error_text").css("visibility","hidden");
    });
});