//数据输出至前台
var app = document.querySelector("#app");

for (var i in xJSON) {
    // console.log(xJSON[i]);
    var tr = document.createElement("tr");
    if (xJSON[i].boolean === true) {
        tr.className = "success"
    } else {
        tr.className = "danger"
    }
    app.appendChild(tr);
    var th = document.createElement("th");
    th.scope = "row";
    th.innerHTML = Number(i) + 1; //这里加1为了让前台显示正常（不从0开始）
    tr.appendChild(th);
    var td = document.createElement("td");
    td.innerHTML = xJSON[i].name;
    tr.appendChild(td);
    var td2 = document.createElement("td");
    td2.innerHTML = xJSON[i].boolean;
    if (xJSON[i].boolean === true) {
        td2.className = "text-success";
    } else {
        td2.className = "text-danger";
    }
    tr.appendChild(td2);
    var td3 = document.createElement("td");
    tr.appendChild(td3);
    var btn = document.createElement("button");
    btn.className = "btn btn-default btn-xs";
    btn.innerHTML = "设置已点";
    //如果默认布尔值为true的时候，让按钮默认变灰
    if (xJSON[i].boolean === true) {
        btn.disabled = "disabled";
    } else {
        btn.disabled = "";
    }
    td3.appendChild(btn);
}


//点名 按钮
var s = document.querySelector("#s");
//随机数数组存放处
var xRandom = [];
//点击了多少下就递增多少次 + 并且默认算上 true的个数。
var xClickStart = 0 + trueList();
//选中座位号
var tips = document.querySelector("#tips");
//重置 按钮-未完成 + trueList()
var r = document.querySelector("#r");
//设置已点 按钮-未完成
var b = document.querySelectorAll("#app button");
//选中app下的整行
var tr = document.querySelectorAll("#app tr");
//更改前台界面布尔值
var xBollean;


// --- S ---
//判断data.js里 true的个数
function trueList() {
    var s = 0;
    for (var i = 0; i < xJSON.length; i++) {
        if (xJSON[i].boolean === true) {
            s++;
        }
    }
    return s;
};
// trueList(); //调用默认true的个数
// --- E ---


// --- S ---
//如果数据里有默认为true的就该给存随机数的数组追加上内容
for (var i = 0; i < xJSON.length; i++) {
    if (xJSON[i].boolean === true) {
        xRandom[i] = i;
    }
}
// --- E ---


//点击之后做的事情
function xRan() {
    //0 至 xJSON 长度的随机整数
    var n = Math.floor(Math.random() * xJSON.length);
    //如果存随机数的的下标值，不等于生成的随机数，才赋值随机数存储的数据
    if (xRandom[n] !== n) {
        xRandom[n] = n;
        

        //给当前的页面中的 XJSON数据的下标值重新赋值
        xJSON[n].boolean = true;
        tr[n].className = "success";


        //更前台改界面中的 布尔值
        xBollean = tr[n].childNodes[2];
        xBollean.innerHTML = "true";
        xBollean.className = "text-success";


        //把当前按钮禁用
        b[n].disabled = "disabled";


        //赋值HTML座位号
        tips.innerHTML = n + 1 + " " + xJSON[n].name;
        tips.className = "alert alert-info";


        //递增（为了获取点击次数）
        xClickStart++;

        //把点名重置换成不重置
        r.disabled = "";


    } else if (xClickStart < xJSON.length) {
        //只有点击的数量，小于JSON的长度才重新调用
        xRan();
    } else {
        tips.innerHTML = "点名完成，请点击重置按钮重置。";
        tips.className = "alert alert-danger";
        //点名完成后，把点名按钮变成不可按的状态
        s.disabled = "disabled";
    }
};

//点名按钮事件
s.addEventListener("click", function () {
    xRan();
    //console.log(xRandom);
    console.log(xJSON)
});

//重置按钮事件
r.addEventListener("click", function () {

    //重置之后，data数据里面的所有的默认值都应该为 false
    for (var i = 0; i < xJSON.length; i++) {
        
        
        xJSON[i].boolean = false;
        
        
    }

    //重置一下
    xClickStart = 0 + trueList();

    //随机的数组清空
    xRandom = [];


    //把所有的绿色给换成红色
    //把所有的true换成false
    //把所有的设置已点换成可用
    for (var i = 0; i < xJSON.length; i++) {
        tr[i].className = "danger";
        b[i].disabled = "";
        //给当前的页面中的true重新赋值
        xBollean = tr[i].childNodes[2];
        xBollean.innerHTML = "false";
        xBollean.className = "text-danger";
    }


    //点完重置按钮后重置按钮不能按了
    r.disabled = "disabled";
    //点完重置按钮之后点名按钮可以按
    s.disabled = "";

    //清空本地缓存
    localStorage.clear();

    //JS刷新当前页面的方法 - 上面的都没用
    history.go(0);
});


//单个按钮的重置
//js 事件委托了之后，怎么知道我点击可第几个li或许下标
var oUl = document.getElementById("app");
var aLi = oUl.getElementsByTagName("button");
oUl.addEventListener("click", function (ev) {
    var ev = ev || window.event;
    var target = ev.target || ev.srcElement;
    if (target.nodeName.toLowerCase() == "button") {
        var that = target;
        var index;
        for (var i = 0; i < aLi.length; i++)if (aLi[i] === target)index = i;
        if (index >= 0)console.log('第' + index + '个');
        // target.style.background = "red";
        //赋值随机数的下标值
        xRandom[index] = index;

        // 递增点击次数
        xClickStart++;

        //把当前按钮禁用
        that.disabled = "disabled";


        //把重置按钮不重置
        r.disabled = "";


        //给当前的页面中的 XJSON数据的下标值重新赋值
        xJSON[index].boolean = false;
        tr[index].className = "success";


        //更前台改界面中的 布尔值
        xBollean = tr[index].childNodes[2];
        xBollean.innerHTML = "true";
        xBollean.className = "text-success";


        //console.log(xRandom);
    }
});
