/**
 * Created by FiShelly on 2016/5/21.
 */
//临时主题变量，用于保存onmouseover和onouseout事件的主题
var tempTheme = "";
//控制显示第几个广告
var i = 0;
window.onload = function(){
    //设置用户之前选定的主题
    var currTheme = getCurrentTheme();
    var item = document.getElementsByClassName("theme-1");
    var copyArr = copyArray(item);
    changeTheme(copyArr,"theme-1",currTheme);
    //广告轮播
    setInterval(function(){
        var liHtml1 = document.getElementById("headerAdv").getElementsByTagName("li");
        var liHtml2 = document.getElementById("cladv").getElementsByTagName("li");
        for(var x = 0;x<liHtml1.length;x++){
            liHtml1[x].style.opacity = 0;
            liHtml2[x].style.opacity = 0;
        }
        liHtml1[i%3].style.opacity = 1;
        liHtml2[i%3].style.opacity = 1;
        i++;
    },5000)
};
//ccItem1到ccItem5的onmouseover和onmouseout事件
//ccItem1到ccItem5的onclick事件
for(var x = 1;x<6;x++){
    var objhtml =  document.getElementById("ccItem"+x);
    objhtml.onmouseover = function(){
        var temp = this.id;
        temp = temp.substring(temp.length-1);
        tempChangeTheme("theme-"+temp);
    };
    objhtml.onmouseout = function(){
        tempReturnTheme();
    };
    objhtml.onclick = function(){
        var temp = this.id;
        temp = temp.substring(temp.length-1);
        clickChangeTheme("theme-"+temp);
    };
}

//临时改变主题
function tempChangeTheme(theme){
    var currTheme = getCurrentTheme();
    var item = document.getElementsByClassName(currTheme);
    var copyArr = copyArray(item);
    changeTheme(copyArr,currTheme,theme);
    tempTheme = theme;
}
//将临时改变的主题换回用户设置的主题
function tempReturnTheme(){
    var currTheme = getCurrentTheme();
    var item = document.getElementsByClassName(tempTheme);
    var copyArr = copyArray(item);
    changeTheme(copyArr,tempTheme,currTheme);
    tempTheme = "";
}
function clickChangeTheme(theme){
    var currTheme = getCurrentTheme();
    var item = document.getElementsByClassName(currTheme);
    var copyArr = copyArray(item);
    changeTheme(copyArr,currTheme,theme);
    localStorage.setItem("currentTheme",theme);
}
//localStorage获取保存的主题
function getCurrentTheme(){
    var currTheme = localStorage.getItem("currentTheme");
    if(currTheme == null){
        return "theme-1";
    } else {
        return currTheme;
    }
}
//改变主题的方法，遍历class为对应主题名称的所有标签
//然后取出相应的className，然后通过replace替换选定主题字符串
//在通过.className = “xxx”改变主题
function changeTheme(arr,currTheme,nextTheme){
    for(var i = 0;i<arr.length;i++){
        var clt = arr[i].className;
        arr[i].className = clt.replace(new RegExp(currTheme,"g"),nextTheme);
    }
}
//复制Nodelist到数组中
function copyArray(item){
    var copyArr = [];
    for(var i = 0; i<item.length;i++){
        copyArr[i] = item[i];
    }
    return copyArr;
}