/**
 * Created by FiShelly on 2016/5/15.
 */
$(document).ready(function(){
    $("#controlSlide").click(function(){
        var text = $("#leftMenu").css("display");
        if(text == "block"){
            $("#content").removeClass(" col-sm-9 col-md-9 col-lg-10 ").
                addClass(" col-sm-12 col-md-12 col-lg-12 ").show(300);
        } else {
            $("#content").removeClass("col-xs-12 col-sm-12 col-md-12 col-lg-12 content").
                addClass("col-xs-12 col-sm-9 col-md-9 col-lg-10 content");
        }
        $("#leftMenu").toggle(200);
    });
});