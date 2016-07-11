$(document).ready(function(){
    //搜索框焦点事件
    $("#key_word").focus(function(){
        $("#search_key").css({
            "border":"1px solid #3385ff",
            "borderRight":"none"
        });
    }).blur(function(){
        $("#search_key").css({
            "border":"1px solid #b6b6b6",
            "borderRight":"none"
        });
    });
    //更多产品按钮事件
    $("#more_pdt").mouseover(function(){
        $("#more_product").show(200);
    });
    //更多产品条目鼠标移入移出事件
    $("#more_product").mouseenter(function(){
        $("#more_product").show(200);
    }).mouseleave(function(){
        $("#more_product").hide(200);
    });
    //设置按钮鼠标移入移出事件
    $("#lisetting").mouseenter(function(){
        $("#user_setting").show();
    }).mouseleave(function(){
        $("#user_setting").hide();
    });
    //设置下拉菜单鼠标移入移出事件
    $("#user_setting").mouseenter(function(){
        $("#user_setting").show();
    }).mouseleave(function(){
        $("#user_setting").hide();
    });
    //消息连接点击事件
    $("#disMsg").click(function(){
        var tblm = $("#top_bar_left_msg");
        if(tblm.css("display")=="none"){
            tblm.slideDown(200);
        }else {
            tblm.slideUp(200);
        }
        event.stopPropagation();
    });
    //换肤按钮事件
    $("#ckbtn").click(function(){
        $("#ck").slideDown(200);
        event.stopPropagation();
    });
    //阻止事件冒泡
    $("#ck").click(function(){
        event.stopPropagation();
    });
    //body点击后对话框消失
    $("body").click(function(e){
        $("#top_bar_left_msg").slideUp(200);
        $("#ck").slideUp(200);
    });
    var bc = ["#EEEEEE","#00aaff","#679DD4","#D486AE","#C85FD4","#ff593b","#26BCFF","#D136FF"];
    //换肤顶部各按钮点击事件
    $(".c_ckhi").click(function(){
        $(".c_ckhiSc").removeClass("c_ckhiSc");
        $(this).addClass("c_ckhiSc");
        var idx = $(".c_ckci").index(this);
        $("#ckci").css("backgroundColor",bc[idx]);
    });
    //搜索框下方tab各个按钮点击事件
    $(".nc_hti").click(function(){
        $(".nc_hti_sc").removeClass("nc_hti_sc");
        $(this).addClass("nc_hti_sc");
        var idx = $(".nc_hti").index(this);
        changeTab();
        if(idx == 0){
            $("#mytab").show(200);
        } else if(idx == 1) {
            $("#news").show(200);
        } else if(idx == 2) {
            $("#link_group").show(200);
        } else if(idx == 3) {
            $("#movie").show(200);
        } else if(idx == 4) {
            $("#shopping").show(200);
        }
    });
    function changeTab(){
        $("#mytab").hide(200);
        $("#news").hide(200);
        $("#link_group").hide(200);
        $("#movie").hide(200);
        $("#shopping").hide(200);
    }
    //滚动事件
    $(window).scroll(function(e){
        if($(document).scrollTop()>=186){
            $(".form_icon").fadeIn(200);
            $("#sf").addClass("scroll_form");
            $("#nc_rm").addClass("nc_rm");
            $(".return_top").fadeIn(200);
        } else {
            $(".form_icon").hide();
            $("#sf").removeClass("scroll_form");
            $("#nc_rm").removeClass("nc_rm");
            $(".return_top").fadeOut(200);
        }
        //e.stopPropagation();
    });
    //回到顶部动画
    $(".return_top").click(function(){
        $("body").animate({scrollTop:0}, 400);
    });
    $("#ckci img").mouseover(function(){
        $(".c_ck_img_d").css("backgroundPosition","0 0");
        var imgSrc = $(this).prop("src");
        $("#skp_img").prop("src",imgSrc);
    }).mouseout(function(){
        $(".c_ck_img_d").css("backgroundPosition","-275px 0");
        $("#skp_img").prop("src","");
    }).click(function(){
        var imgSrc = $(this).prop("src");
        changeSkin(imgSrc);
        localStorage.setItem("currentSkin",imgSrc);
    });
    if(getCurrentTheme()){
        changeSkin(getCurrentTheme());
    } else {
        $("#bd_logo").show();
    }
});
function changeSkin(imgSrc){
    $("body").css("background","url('"+imgSrc+"')  no-repeat fixed ");
    $("#search_btn").addClass("search_btn_iw");
    $("#bd_logo").prop("src","../Ex1/images/logo_white.png").show();
}
//localStorage获取保存的主题
function getCurrentTheme(){
    var currTheme = localStorage.getItem("currentSkin");
    if(currTheme == null){
        return null;
    } else {
        return currTheme;
    }
}