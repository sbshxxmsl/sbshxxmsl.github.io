function focus(a,b,c,d,e){
    a.className=b;
    c.className=d;
    c.innerHTML=e;
}
function panduan(a,b,c,d,e,f,g,h,i,j,k,l,m){
    if(a.value==""){
        b.className=c;
        d.className=e;
        d.innerHTML=f;
    }else if(g){
        b.className=h;
        d.className=i;
        d.innerHTML=j;
    }else{
        b.className=k;
        d.className=l;
        d.innerHTML=m;
    }
}
var text=document.getElementById("text");
var textspan=document.getElementById("text-span");
var formimg=document.getElementById("form-img")
text.onfocus=function(){   focus(formimg,"position1",textspan,"color2","支持中文、数字、英文2-18个字符")
}
text.onblur=function(){
 panduan(text,formimg,"position3",textspan,"color3","请输入用户名" ,1<text.value.length&&text.value.length<19,"position2","color1","正确" ,"position3","color3","格式错误，仅支持中文、数字、英文2-18个字符"  )
}



var password=document.getElementById("password")
var passwordspan=document.getElementById("password-span");
var formimg2=document.getElementById("form-img2")
var userReg=/^[0-9a-zA-Z]{6,18}$/;
password.onfocus=function(){
 focus(formimg2,"position1",passwordspan,"color2","建议用字母、数字长度为6-18个字符")
}
password.onblur=function(){
 panduan(password,formimg2,"position3",passwordspan,"color3","请输入密码" ,userReg.test(password.value)==true,"position2","color1","正确" ,"position3","color3","格式错误，建议用字母、数字长度为6-18个字符"  )
}
var password2=document.getElementById("password2");
var password2span=document.getElementById("password2-span");
var formimg3=document.getElementById("form-img3");
password2.onfocus=function(){
 focus(formimg3,"position1",password2span,"color2","再次输入密码")
}
password2.onblur=function(){
 panduan(password2,formimg3,"position3",password2span,"color3","请再次输入密码" ,password.value==password2.value,"position2","color1","正确" ,"position3","color3","密码不一致"  )
}
var exmail=document.getElementById("exmail");
var exmailspan=document.getElementById("exmail-span")
var formimg4=document.getElementById("form-img4");
var emailReg = /[_a-zA-Z\d\-\.]+@[_a-zA-Z\d\-]+(\.[_a-zA-Z\d\-]+)+$/;
exmail.onfocus=function(){
 focus(formimg4,"position1",exmailspan,"color2","请输入邮箱")
}
exmail.onblur=function(){
 panduan(exmail,formimg4,"position3",exmailspan,"color3","请输入邮箱" ,emailReg.test(exmail.value)==true,"position2","color1","正确" ,"position3","color3","请输入正确的电子邮箱格式"  )
}

var cellphone=document.getElementById("cellphone");
var cellphonespan=document.getElementById("cellphone-span")
var formimg5=document.getElementById("form-img5");
var telReg = /1\d{10}$/;
cellphone.onfocus=function(){
 focus(formimg5,"position1",cellphonespan,"color2","请输入手机号")
}
cellphone.onblur=function(){
 panduan(cellphone,formimg5,"position3",cellphonespan,"color3","请输入手机号" ,telReg.test(cellphone.value)==true,"position2","color1","正确" ,"position3","color3","请输入正确的手机号格式"  )
}

function reset1(){
    var form=document.getElementById("form")
    var formspan=form.getElementsByTagName("span")
    for(var i=0;i<formspan.length;i++){
        formspan[i].innerHTML="请输入内容";
    }
}
