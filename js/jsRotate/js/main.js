window.onload=function(){
    var li=document.querySelectorAll("#nav li");
    var nav=document.querySelector("#nav");
    var o=true;
    li[li.length-1].onclick=function(){
        for(var i=0;i<li.length;i++){
            if(o){
                var n=i-li.length/2;
                n=n*15;   
             
            }else{
                n=360
                
            }
            
        li[i].style.transform="rotateZ("+n+"deg)"
             
           
        }
        o=!o
    }
    
}