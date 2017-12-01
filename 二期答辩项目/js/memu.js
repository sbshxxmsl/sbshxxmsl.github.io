function input(a,b){
    a.innerHTML=b 
}
function panduan(a,b,c,d,e,f){
    if(a.value==""){
        b.innerHTML=c;
        return false;
    }else if(d.test(a.value)!=true){
        b.innerHTML=e;
        return false;
    }else if(5<a.value.length<19){
        b.innerHTML=f;
        return true;
    }
}
function panduan2(a,b,c,d,e,f){
    if(a.value==""){
        b.innerHTML=c
        return false;
    }else if(a.value!=d){
        b.innerHTML=e
        return false;
    }else if(5<a.value.length<19){
        b.innerHTML=f;
        return true;
    }
}
var ure=document.getElementById("ure")
var ureText=document.getElementById("ureText")
var userReg=/^[0-9a-zA-Z]{6,18}$/;

ure.onfocus=function(){
//    ureText.innerHTML="请输入用户名6-18位,不能为空"
    input(ureText,"请输入用户名6-18位,不能为空")
}
function urex(){
    var a=ure;
    var b=ureText;
    var c="用户名不能为空";
    var d=userReg;
    var e="请按提示输入";
    var f="输入正确"; 
    return panduan(a,b,c,d,e,f);  
}
ure.onblur=function(){
    urex() 
}

var paddword=document.getElementById("paddword")
var urepaddword=document.getElementById("urepaddword")
var userReg2=/^[0-9a-zA-Z]{6,18}$/;

paddword.onfocus=function(){
    input(urepaddword,"请输入密码6-18位(只能英文与数字),不能为空")
}
function passwordx(){
    var a=paddword;
    var b=urepaddword;
    var c="密码不能为空";
    var d=userReg2;
    var e="请按提示输入";
    var f="输入正确";
    return panduan(a,b,c,d,e,f);
}
paddword.onblur=function(){
   passwordx()
}
var paddword2=document.getElementById("paddword2")
var urepaddword2=document.getElementById("urepaddword2")
paddword2.onfocus=function(){
    input(urepaddword2,"请输入密码6-18位(只能英文与数字),不能为空")
}
function password2x(){
     var a=paddword2;
    var b=urepaddword2;
    var c="密码不能为空";
    var d=paddword.value;
    var e="请再输入密码";
    var f="输入正确";
    return panduan2(a,b,c,d,e,f);
}
paddword2.onblur=function(){
    password2x()
}

var you=document.getElementById("you")
var ureyou=document.getElementById("ureyou")
var emailReg = /[_a-zA-Z\d\-\.]+@[_a-zA-Z\d\-]+(\.[_a-zA-Z\d\-]+)+$/;

you.onfocus=function(){
    input(ureyou,"请输入email,不能为空")
}
function youx(){
     var a=you;
    var b=ureyou;
    var c="email不能为空";
    var d=emailReg;
    var e="请按提示输入";
    var f="输入正确";
    return panduan(a,b,c,d,e,f)
}
you.onblur=function(){
    youx()
}


var show=document.getElementById("show")
var ureshow=document.getElementById("ureshow")
var telReg = /1\d{10}$/;

show.onfocus=function(){
    input(ureshow,"请输入手机号,不能为空")
}
function showx(){
     var a=show;
    var b=ureshow;
    var c="手机号不能为空";
    var d=telReg;
    var e="请按提示输入";
    var f="输入正确";
    return panduan(a,b,c,d,e,f)
}
show.onblur=function(){
   showx();
}

function reset1(){
    var form=document.getElementById("form")
    var formspan=form.getElementsByTagName("span")
    for(var i=0;i<formspan.length;i++){
        formspan[i].innerHTML="请输入内容";
    }
}

function submitx(){
    if(urex() && passwordx() && password2x() && youx() && showx()){
        return true
    };
    return false;
}
onkeyup = function () {
    if (urex() && passwordx() && password2x() && youx() && showx()) {
        var submit = document.getElementById("submitt");
        submit.disabled = "";
    };
};