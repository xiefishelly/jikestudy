/**
 * Created by FiShelly on 2016/5/16.
 */
document.getElementById("count").onclick = function(){
    var score = document.getElementById("input").value;
    //判断是否使用默认
    if(score == "" || score == null){
        //默认数组
        var defaultArray = ["a","x","b","d","m","a","k","m","p","j","a"];
        countStr(defaultArray);
    } else {
        //以,分割字符串
        var array = score.split(",");
        countStr(array);
    }
};
function countStr(arr){
    //建立id，res对象
    var idx = {};  //存储数组元素出现的下标。
    var res = {};  //存储各个元素出现的次数。
    arr.forEach(function(value,index){
        //如果对象元素存在，则值++，同时保存下标
        //如果不存在，则值为1，同时保存下标
        if(res[value]){
            res[value]++;
            idx[value] += ","+index;
        } else {
            res[value]=1;
            idx[value] = index;
        }
    });

    //为了应对出现次数最多的字符有多个情况，需要将最大次数和最大下标声明成数组，而后进行遍历
    //如果结果值大于maxCount[0]，则清空原有的maxIdx数组
    //如果结果值等于maxCount[0]，则往maxIdX数组中添加改字符、
    var maxCount = 0;     //存储最大出现次数
    var maxIdx = [];      //存储最大出现次数的字符
    for( var i in res){
        if(res[i] > maxCount){
            maxCount = res[i];
            maxIdx.length = 0;
            maxIdx = [];
            maxIdx.push(i);
        } else if(res[i] == maxCount){
            maxIdx.push(i);
        }
    }
    //mv表示出现次数最多的字符（如果有多个则用,连接），
    // mi为该字符的下标（如果有多个符合条件的字符，则下标用---连接）
    var mv,mi;
    //格式化输出
    for(var x = 0;x<maxIdx.length;x++){
        if(x==0){
            mv = maxIdx[x];
            mi = idx[maxIdx[x]]
        } else {
            mv += ","+maxIdx[x];
            mi += "---"+idx[maxIdx[x]]
        }
    }
    //写到html页面中。
    document.getElementById("mostVal").value = mv;
    document.getElementById("mostCount").value = maxCount;
    document.getElementById("mostIdx").value = mi;
}