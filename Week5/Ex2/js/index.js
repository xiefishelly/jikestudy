var inputl = ""; //输入运算符前显示值
var inputr = ""; //输入运算符后显示值
var input = "";  //整体运算表达式
var op = "";  //运算符
var res = document.getElementById("compute_result");//结果显示
//设置运算符按钮背景色
function setBc(){
    document.getElementById("add").style.backgroundColor = "#f97b0e";
    document.getElementById("sub").style.backgroundColor = "#f97b0e";
    document.getElementById("div").style.backgroundColor = "#f97b0e";
    document.getElementById("mul").style.backgroundColor = "#f97b0e";
    document.getElementById("equ").style.backgroundColor = "#f97b0e";
}
//计算
function compute(sp,tp){
    // 分割运算符，成数组
    var rv = input.split(sp);
    //  结果
    var tempResult = "";
    // 运算
    if(sp == "+"){
        tempResult = Number(rv[0]) + Number(rv[1]);
    } else if(sp == "j"){
        tempResult = Number(rv[0]) - Number(rv[1]);
    } else if(sp == "*"){
        tempResult = Number(rv[0]) * Number(rv[1]);
    } else if(sp == "/"){
        // 被除数不能为0，否则显示错误
        if(rv[1] == "0"){
            tempResult = "错误"
        } else {
            tempResult = (Number(rv[0]) / Number(rv[1])).toFixed(2);
        }
    }
    // 显示结果
    res.innerHTML = tempResult;
    //运算结束，重置相应值
    // 重置input
    if(tempResult=="错误"){
        input = "";
    } else if(!tp){
        input = tempResult+"=";
    }else {
        input = tempResult+tp;
    }
    // 重置inputl，inputr，op
    inputl = "";
    op="";
    inputr = "";
}
//如果运算符为""，则让inputl+=相应的数字，然后显示inputl到相应的div
//如果运算符不为""表示运算符已经输入，则让inputr+=相应的数字，然后显示到相应的div
function displayNum(num){
    if(op == ""){
        inputl += num;
        res.innerHTML = inputl;
    } else{
        inputr += num;
        res.innerHTML = inputr;
    }
    input += num;
    setBc();
}
// 为数字，运算符等绑定点击事件
document.getElementById("one").onclick = function(){
    displayNum("1");
};
document.getElementById("two").onclick = function(){
    displayNum("2");
};
document.getElementById("three").onclick = function(){
    displayNum("3");
};
document.getElementById("four").onclick = function(){
    displayNum("4");
};
document.getElementById("five").onclick = function(){
    displayNum("5");
};
document.getElementById("six").onclick = function(){
    displayNum("6");
};
document.getElementById("seven").onclick = function(){
    displayNum("7");
};
document.getElementById("eight").onclick = function(){
    displayNum("8");
};
document.getElementById("nine").onclick = function(){
    displayNum("9");
};
document.getElementById("zero").onclick = function(){
    if(input != ""){
        displayNum("0");
    }
};
document.getElementById("point").onclick = function(){
    displayNum(".");
};
// 判断什么时候进行相应的运算
//截取input最后一位，判断是否是本身的运算符a，如果是表示本身运算符a已经输入，不做任何处理，令op=自身运算符a
//如果不等于自身运算符a，表示自身运算符a还没有输入，在此判断是否等于其他四种运算符b，
//如果等于其他四种运算符b，则替换成其他四种运算符b
//在此判断op是否为自身运算符a，如果是，则进行调用compute计算结果，
// 否则，如果等于""。表示运算符还没有开始输入，将符号显示到页面中，然后将运算符加入到input中
//为了方便负数计算，减号以及减法运算的标识，变成j表示
document.getElementById("add").onclick = function(){
    var temp = input.substring(input.length-1);
    if(input != ""){
        if(temp == "+"){
        } else if(temp == "j" || temp == "*" || temp == "/" || temp == "=") {
            if(res.innerHTML == temp){
                res.innerHTML = "+";
            }
            input =input.replace(temp,"+");
        } else if(op == "+"){
            compute("+","+");
        } else if(op == ""){
            input += "+";
            res.innerHTML = "+";
        }  else {
            compute(op,"+");
        }
        op = "+";
    }
    setBc();
    document.getElementById("add").style.backgroundColor = "#2794e3";
};
document.getElementById("div").onclick = function(){
    var temp = input.substring(input.length-1);
    if(input != ""){
        if(temp == "/"){

        } else if(temp == "j" || temp == "+" || temp == "*" || temp == "=") {
            if(res.innerHTML == "÷"){
                res.innerHTML = "÷";
            }
            input =input.replace(temp,"/");
        }else if(op == "/"){
            compute("/","/");
        } else if(op == ""){
            input += "/";
            res.innerHTML = "÷";
        } else {
            compute(op,"/");
        }
        op = "/";
    }
    setBc();
    document.getElementById("div").style.backgroundColor = "#2794e3";
};
document.getElementById("sub").onclick = function(){
    var temp = input.substring(input.length-1);
    if(input != ""){
        if(temp == "j"){

        } else if(temp == "+" || temp == "*" || temp == "/" || temp == "="){
            if(res.innerHTML == temp){
                res.innerHTML = "-";
            }
            input = input.replace(temp,"j");
        } else if(op == "j"){
            compute("j","j");
        } else if(op == ""){
            input += "j";
            res.innerHTML = "-";
        }else {
            compute(op,"j");
        }
        op = "j";
    }
    setBc();
    document.getElementById("sub").style.backgroundColor = "#2794e3";
};
document.getElementById("mul").onclick = function(){
    var temp = input.substring(input.length-1);
    if(input != ""){
        if(temp == "*"){

        }else if(temp == "j" || temp == "+" || temp == "/" || temp == "=") {
            if(res.innerHTML == "×"){
                res.innerHTML = "×";
            }
            input =input.replace(temp,"*");
        }else if(op == "*"){
            compute("*","*");
        } else if(op == ""){
            input += "*";
            res.innerHTML = "×";
        } else {
            compute(op,"*");
        }
        op = "*";
    }
    setBc();
    document.getElementById("mul").style.backgroundColor = "#2794e3";
};
//清空input,inputl,inputr,op并在页面显示0
document.getElementById("ac").onclick = function(){
    res.innerHTML = "0";
    input="";
    inputl="";
    inputr="";
    op="";
};
// 求百分比小数
document.getElementById("per").onclick = function(){
    var temp = res.innerHTML;
    temp = (temp/100).toFixed(2);
    res.innerHTML = temp;
    input=temp;
    inputl=temp;
    inputr="";
    op="";
};
// 开平方运算
document.getElementById("radical").onclick = function(){
    var temp = res.innerHTML;
    temp = Math.sqrt(temp).toFixed(2);
    res.innerHTML = temp;
    input=temp;
    inputl=temp;
    inputr="";
    op="";
};
//等号运算
document.getElementById("equ").onclick = function(){
    if(op!=""){
        compute(op);
    }
    setBc();
    document.getElementById("equ").style.backgroundColor = "#2794e3";
};