window.onload=function(){
    var bian=document.querySelectorAll(".gouwu2 .div4");
    var shu=document.querySelectorAll(".gouwu2 .box-span2 span");
    var box1=document.querySelectorAll(".gouwu2 .box1")
    var box2=document.querySelectorAll(".gouwu2 .box2")
    var input=document.querySelectorAll(".gouwu2 input");
    var box3=document.querySelectorAll(".gouwu2 .box3");
    var gouwu3=document.querySelectorAll(".gouwu3");
    
   
    
    for(var i=0;i<bian.length;i++){
        bian[i].index=i;
         box3[i].style.height=gouwu3[i].clientHeight+"px";
        box3[i].style.lineHeight=gouwu3[i].clientHeight+"px";
        bian[i].onclick=function(){
            if(bian[this.index].innerHTML=="完成"){
                bian[this.index].innerHTML="编辑";
                shu[this.index].innerHTML=input[this.index].value;
                box2[this.index].style.display='none';
                box1[this.index].style.display="block";
                box3[this.index].style.width="0";
                box3[this.index].innerHTML="";
            }else
            {   
                bian[this.index].innerHTML="完成";
                input[this.index].value=shu[this.index].innerHTML;
                
                box1[this.index].style.display='none';
                box2[this.index].style.display="block";
                
                box3[this.index].innerHTML="删除";
                box3[this.index].style.width="20%";
                
            }
              
        }
        
        
    }
    var gouwu2=document.querySelectorAll('.gouwu2')
    for(var i=0;i<box3.length;i++){
        box3[i].index=i;
        box3[i].onclick=function(){
            gouwu2[this.index].style.display="none";
        }
        
        
    }
    gouwu2[gouwu2.length-1].style.marginBottom="3.5rem";
    
    
    
    var boxplus=document.querySelectorAll('.gouwu2 .box2-span2');
    var boxreduce=document.querySelectorAll('.gouwu2 .box2-span1');
    for(var i=0;i<boxplus.length;i++){
        boxplus[i].index=i;
        boxplus[i].onclick=function(){
            input[this.index].value=Number(input[this.index].value)+1;
            
            shu[this.index].innerHTML=input[this.index].value;
        }
        boxreduce[i].index=i;
        boxreduce[i].onclick=function(){
            if(input[this.index].value=="1"){
                      input[this.index].value="1";
            }else{  input[this.index].value=Number(input[this.index].value)-1;
            }  shu[this.index].innerHTML=input[this.index].value;
            
        }
        
        
    }
    
    
    
    
    
    
    var div2=document.querySelectorAll(".gouwu .gouwu2 .div2");
    
    var div222=document.querySelector(".Settlement .div2");
    
    var total=document.querySelector(".Total");
    var qian=document.querySelectorAll(".box-span1");
    var jie=document.querySelector(".Settlement .div44 a span");
    div222.onclick=function(){
        var div22=document.querySelectorAll(".div2 div");
        var div=div222.querySelector('div');
      if(div.style.border=="none"){
          for(var z=0;z<div22.length;z++){
            div22[z].style.background='none';
                div22[z].style.border="1px solid #ccc";
            }
          total.innerHTML="￥0.00";
          jie.innerHTML="0";
        }else{
            
            for(var i=0;i<div22.length;i++){
                div22[i].style.background='url(../img/gouwu2.png) no-repeat';
                div22[i].style.border="none";  div22[i].style.backgroundSize='cover';
            }
            var q=0;
            for(var i=0;i<qian.length;i++){
//                console.log(qian[i].innerHTML)
                
                var pp=qian[i].innerHTML.substr(1,qian[i].innerHTML.length-1);
                var zzz=pp*Number(shu[i].innerHTML);
                q=Number(zzz)+q;
                
            }
            var zz=0;
            total.innerHTML="￥"+q+".00";
            for(var i=0;i<shu.length;i++){
                zz=Number(shu[i].innerHTML)+zz;
            }
            jie.innerHTML=zz;
        }
        
    }
    
    
    
    
    for(var i=0;i<div2.length;i++){
        div2[i].index=i;
        div2[i].onclick=function(){
            var gouwu22=div2[this.index].parentNode;
//            console.log(gouwu22);
            var div22=gouwu22.querySelectorAll(".div2 div");
            var boxspan1=gouwu22.querySelector('.box-span1');
            var boxspan2=gouwu22.querySelector('.box-span2 span');
             var totall=total.innerHTML.substr(1,total.innerHTML.length-1);
            
            
//            console.log(div22);
            if(div22[0].style.border==="none"){
                for(var z=0;z<div22.length;z++){
                    div22[z].style.background='none';
                   div22[z].style.border="1px solid #ccc";
//                    div22[z].style.backgroundSize='cover';

                }
                var ppp= boxspan1.innerHTML.substr(1,boxspan1.innerHTML.length-1);
                var zzz=Number(ppp)*Number(boxspan2.innerHTML);
                if(Number(totall)-Number(zzz)<0){
                    total.innerHTML="￥0.00";
                }else{
                    total.innerHTML="￥"+(Number(totall)-Number(zzz))+".00";
                }
                
                if(Number(jie.innerHTML)-Number(boxspan2.innerHTML)<0){
                    jie.innerHTML="0";
                }else{
                    jie.innerHTML=Number(jie.innerHTML)-Number(boxspan2.innerHTML);
                }
                
                
            }else{
                for(var z=0;z<div22.length;z++){
                    div22[z].style.background='url(../img/gouwu2.png) no-repeat';
                   div22[z].style.border="none";  div22[z].style.backgroundSize='cover';
                    
                }
               var ppp= boxspan1.innerHTML.substr(1,boxspan1.innerHTML.length-1);
               var zzz=Number(ppp)*Number(boxspan2.innerHTML);
                total.innerHTML="￥"+(Number(totall)+Number(zzz))+".00";
                jie.innerHTML=Number(boxspan2.innerHTML)+Number(jie.innerHTML);
            }
            
        }
        
    }
    
    
    

}

