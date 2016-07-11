/**
 * Created by FiShelly on 2016/5/16.
 */
String.prototype.trim=function() {
    return this.replace(/(^\s*)|(\s*$)/g,'');
}
document.getElementById("compute").onclick = function(){
    var score = document.getElementById("score").value;
    //判断输入是否为空
    score = score.trim();
    if(score == "" || score == null){
        displayError("学生分数不能为空。");
    } else {
        //判断输入是否为数字
        if(!isNaN(score)){
            var idx = score.indexOf(".");
            //判断是否为小数
            if(idx < 0){
                //判断是否超出范围
                if(score>=0 && score<=100){
                    var level = 1;
                    if(score == 100){
                        level = 1;
                    } else {
                        level = 10- parseInt(score / 10);
                    }
                    document.getElementById("level").value = level;
                    document.getElementById("error_text").style.display = "none";
                } else {
                    displayError("输入学生分数超出范围。学生分数范围为0~100。");
                }
            } else {
                displayError("输入学生分数格式不正确。学生分数必须为整数。");
            }
        }else {
           displayError("输入学生分数格式不正确。学生分数必须为数字。");
        }
    }
    return false;
};
//显示错误提示
function displayError(text){
    document.getElementById("etc").innerHTML = text;
    document.getElementById("error_text").style.display = "block";
    document.getElementById("level").value = '';
}
