var li=document.querySelectorAll("li");
var s=document.querySelector("#s");
var ul=document.querySelector("ul")

for(var i=0;i<li.length;i++){
    
    li[i].onmouseover=function(){
        console.log(i)
        s.style.width=this.offsetWidth+"px";
        s.style.left=this.offsetLeft+"px";
    }
    ul.onmouseout=function(){
        s.style.width="0px";
    }
}
