/**
 * Created by FiShelly on 2016/6/1.
 */
define(function(require, exports, module) {
    var $ = require('jquery');
    module.exports = {
        init : function(){
            this._bindUI();
        },
        _bindUI:function(){
            //左侧菜单栏详细菜单的显示/隐藏事件
            $(".as_ull_lisel").mouseenter(function(){
                $(this).find(".asl_dta_c").fadeIn(200);
                $(this).find(".as_ull_lia").removeClass("as_ull_liab");
                $(this).css("borderRight","none");
            }).mouseleave(function(){
                $(this).find(".asl_dta_c").fadeOut(200);
                $(this).find(".as_ull_lia").addClass("as_ull_liab");
                $(this).css("borderRight","1px solid #EEEEEEE");
            });

            //nav_top的nav下的导航栏详细的显示隐藏以及背景色改变
            $(".nav_ull li").mouseenter(function(){
                var idx = $(this).index();
                if(idx != 0){
                    $(".nav_menu ul").eq(idx-1).addClass("nav_menubg");
                }
            }).mouseleave(function(){
                $(".nav_menubg").removeClass("nav_menubg");
            });
            //nav_top的nav下的导航栏详细的显示隐藏以及背景色改变
            $(".nav_ull").mouseleave(function(){
                $(".nav_menu").slideUp(200);
            }).mouseenter(function(){
                $(".nav_menu").slideDown(200);
            });

            //header用户名处的下拉菜单事件
            $(".hr_un").mouseenter(function(){
                $(".user_menu").slideDown(200);
            }).mouseleave(function(){
                $(".user_menu").slideUp(200);
            });

            //课程视频相应组件的显示/隐藏
            $(".video_ctul li").mouseenter(function(){
                $(this).find(".class_content").slideDown(200);
                $(this).find(".class_le").fadeIn(100);
                $(this).find(".adc").fadeOut(100);
                $(this).find(".ct_num").fadeIn(100);
                $(this).find(".cvu_bf").fadeIn(200);
            }).mouseleave(function(){
                $(this).find(".class_content").slideUp(200);
                $(this).find(".class_le").fadeOut(100);
                $(this).find(".adc").fadeIn(100);
                $(this).find(".ct_num").fadeOut(100);
                $(this).find(".cvu_bf").fadeOut(200);
            });

            //通过data-tab自定义属性来绑定tab的切换
            $(".vt_ul li").mouseenter(function(){
                $(".vt_ul_li_ho").removeClass("vt_ul_li_ho");
                $(this).addClass("vt_ul_li_ho");
                var id = $(this).attr("data-tab");
                $(".adb").hide().removeClass("adb");
                $("#"+id).fadeIn().addClass("adb");
            });

            //顶部最大的广告轮播
            var left = 0;
            var idx = 0;
            var sin = null;
            function startTopAdv(){
                sin = setInterval(function(){
                    if(left >= 1680 || left <= -1680){
                        left = 0;
                        idx = 0;
                    } else{
                        idx += 1;
                        left -= 560;
                    }
                    $(".idx_li_sl").removeClass("idx_li_sl");
                    $(".idx_ul li").eq(idx).addClass("idx_li_sl");
                    $(".adv_dp").animate({"left":left},500);
                },3000);
            }
            startTopAdv();
            $(".adv_dp").mouseenter(function(){
                clearInterval(sin);
            }).mouseleave(function(){
                startTopAdv();
            });
            $("#tadvl").click(function(){
                idx -= 1;
                clearInterval(sin);
                left += 560;
                startTopAdv();
                if(left >= 560 ){
                    left = -1680;
                    idx = 3;
                }
                $(".adv_dp").animate({"left":left},500);
                $(".idx_li_sl").removeClass("idx_li_sl");
                $(".idx_ul li").eq(idx).addClass("idx_li_sl");
            });
            $("#tadvr").click(function(){
                idx += 1;
                $(".idx_li_sl").removeClass("idx_li_sl");
                $(".idx_ul li").eq(idx).addClass("idx_li_sl");
                clearInterval(sin);
                left -= 560;
                $(".adv_dp").animate({"left":left},500);
                startTopAdv();
                if(left >= 1680 || left <= -1680){
                    left = 560;
                    idx = -1;
                }
            });

            //顶部第二个广告轮播
            var cleft = 0;
            var cidx=0;
            $("#ctadvl").click(function(){
                if(cleft != 0){
                    cleft += 186;
                    $(".s_class_dp").animate({"left":cleft},400);
                }

            });
            $("#ctadvr").click(function(){
                var $dom =  $(".s_class_dp a");
                var $domdp = $(".s_class_dp");
                var width = $domdp.width()+186;
                cleft -= 186;
                $dom.eq(cidx).clone().appendTo(".s_class_dp");
                $domdp.css("width",width);
                $domdp.animate({"left":cleft},400);
                cidx+= 1;
            });

            //战略合作伙伴轮播
            var pleft = 0;
            var pidx = 0;
            $("#ptadvl").click(function(){
                if(pleft != 0){
                    pleft += 160;
                    $(".partnerul").animate({"left":pleft},400);
                }

            });
            $("#ptadvr").click(function(){
                var $dom =  $(".partnerul a");
                var $domdp = $(".partnerul");
                var width = $domdp.width()+160;
                pleft -= 160;
                $dom.eq(cidx).clone().appendTo(".partnerul");
                $domdp.css("width",width);
                $domdp.animate({"left":pleft},400);
                pidx+= 1;
            });
            //合作院校轮播
            var sleft = 0;
            var sidx = 0;
            $("#stadvl").click(function(){
                if(sleft != 0){
                    sleft += 140;
                    $(".partnerschul").animate({"left":sleft},400);
                }

            });
            $("#stadvr").click(function(){
                var $dom =  $(".partnerschul a");
                var $domdp = $(".partnerschul");
                var width = $domdp.width()+140;
                sleft -= 140;
                $dom.eq(sidx).clone().appendTo(".partnerschul");
                $domdp.css("width",width);
                $domdp.animate({"left":sleft},400);
                sidx+= 1;
            });
            //媒体报道轮播
            var mleft = 0;
            var midx = 0;
            $("#mtadvl").click(function(){
                if(mleft != 0){
                    mleft += 160;
                    $(".mediaul").animate({"left":mleft},400);
                }

            });
            $("#mtadvr").click(function(){
                var $dom =  $(".media a");
                var $domdp = $(".mediaul");
                var width = $domdp.width()+160;
                mleft -= 160;
                $dom.eq(midx).clone().appendTo(".mediaul");
                $domdp.css("width",width);
                $domdp.animate({"left":mleft},400);
                midx+= 1;
            });
            //滚动监听
            $(window).scroll(function(e){
                if($(document).scrollTop()>=110){
                    $(".returntop").fadeIn(200);
                } else {
                    $(".returntop").fadeOut(200);
                }
            });
            $(".returntop").click(function(){
                $("body").animate({scrollTop:0}, 400);
            });
            if($(document).scrollTop()>=110){
                $(".returntop").fadeIn(200);
            } else {
                $(".returntop").fadeOut(200);
            }
        }
    }

});