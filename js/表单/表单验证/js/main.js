
function f(id,text){
    var p=id.nextElementSibling;
    p.innerHTML=text;
}



var user=document.querySelector("#user");
//焦点状态
user.addEventListener("focus",function(){
    f(this,"支持字母,数字的2-18个字符")
})


var password=document.querySelector("#password");

password.addEventListener("focus",function(){
    f(this,"建议使用字母、数字6-18个字符")
})

var yanzheng=document.querySelector("#yanzheng");


yanzheng.addEventListener("focus",function(){
    f(this,"请输入验证码")
})

var btn=document.querySelector("#btn");
var c;
var b=10;
btn.addEventListener("click",function(){
    c=Math.floor(Math.random()*9000+1000);
    alert("验证码："+c);
    btn.value=b;
    btn.disabled="disabled";
    var t=setInterval(function(){
         b--;
        if(b<0){
            clearInterval(t);
            btn.value="获取验证码";
             btn.disabled=""
        }else{
            btn.value=b
            
        }
        
    },1000)
    
})
console.log(c)
function e(i,text,g,h){
    var p=i.nextElementSibling;
    if(i.value==""){
        p.innerHTML=text;
        return false
    }else if(i.value!=c){
        p.innerHTML=g
        return false
    }else{
        p.innerHTML=h
        return true
    }
    
}


yanzheng.addEventListener("blur",function(){
    e(this,"验证码不能为空","与验证码不符","对了")
})


var sbt=document.querySelector("#submit")
var check=document.querySelector("#check");
function c(){
    if(check.checked){
        return true
    }else{
        alert("请勾选用户协议")
        return false
    }
}



function form(){
    if(e(yanzheng,"验证码不能为空","与验证码不符","对了")&&c()){
        return true
    }else if(c()!=true){
        return false
    }else{
        alert("验证码输入有误")
        return false
    
    }
}



