/**
 * Created by FiShelly on 2016/5/27.
 */
$(document).ready(function(){
    $(window).load(function(){
        //瀑布流布局
        loadImage();
        var dataImg = {"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"},
            {"src":"6.jpg"},{"src":"7.jpg"},{"src":"8.jpg"},{"src":"9.jpg"},{"src":"10.jpg"},{"src":"11.jpg"},
            {"src":"12.jpg"},{"src":"13.jpg"},{"src":"14.jpg"},{"src":"15.jpg"},{"src":"16.jpg"}]};
        //滚动事件
        $(this).scroll(function(){
            //判断滚动
            if(isScrollBottom()){
                $.each(dataImg.data,function(index,value){
                    var box = $("<div>").addClass("box").appendTo($("#content"));
                    var content = $("<div>").addClass("img_box").appendTo(box);
                    $("<img>").attr("src","./images/"+$(value).attr("src")).appendTo(content);
                });
                loadImage();
            }
            //header滚动缩小
            if($(document).scrollTop()>130){
                $(".hc_l").hide(200);
                $(".res span").css("margin-bottom","2px");
            } else {
                $(".hc_l").show(200);
                $(".res span").css("margin-bottom","13px");
            }
        });

        $(this).resize(function(){
            if($(document).width() > 275){
                loadImage();
            }
        });
    });
});

function isScrollBottom(){
    //获取最后一张图片的1/2高度
    var lastHeight = ($(".box:last").height()+2)/2;
    //获取浏览器显示区域高度与文档高度的差值，既是滚动距离
    var distance = $(document).height()-$(window).height();
    //滚动距离与差值-最后一张图片的1/2高度的大小
    return $(document).scrollTop()>distance-lastHeight;
}

function loadImage(){
    var imgBox = $(".box");
    //width()不带内边距，因此需要加上css设定好的内边距，构成完整宽度
    var imgWidth = imgBox.eq(0).width()+10;
    var rows =  Math.floor($(window).width() / imgWidth);
    imgBox.parent().css({"margin":"140px auto 0 auto","width":imgWidth*rows});//居中显示
    var imgBoxArr = [];
    imgBox.each(function(idx,val){
        var imgHeight = $(val).height()+10;
        //如果小于rows-1则添加进数组，否则
        //判断最小高度，然后设置对应图片css样式，修改最小高度数组
        if(idx>=rows){
            var minHeigth = Math.min.apply(null,imgBoxArr);
            var minIdx = $.inArray(minHeigth,imgBoxArr);
            imgBox.eq(idx).css({
                "position":"absolute",
                "left":imgWidth*minIdx,
                "top":minHeigth
            });
            imgBoxArr[minIdx] = minHeigth+imgHeight;
        } else {
            imgBoxArr[idx] = imgHeight;
            imgBox.eq(idx).css({
                "position":"absolute",
                "left":imgWidth*idx,
                "top":0
            });
        }
    })
}