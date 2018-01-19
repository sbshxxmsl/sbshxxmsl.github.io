window.onload=function(){
    


var bannerImg=document.querySelectorAll('.header-banner1 img');

var banner1=document.querySelector(".header-banner1");

    var banner2A=document.querySelectorAll(".header-banner2 li a");
//    var banner2li=document.querySelectorAll(".header-banner2 li");

//console.log(banner.clientWidth);
for(var i=0;i<bannerImg.length;i++){
    bannerImg[i].height=bannerImg[0].height;
}
var i=0;
function banner(){
    i++;
    if(i==1){
        banner1.style.transition= "1.5s";
    }
    var v=Number(banner1.clientWidth)/Number(bannerImg.length);
//    console.log(bannerImg.length);
    var m=-v*i;
    i=i==6?0:i;
//   
    
    banner2A[i].className="aaa";
    if(i==0){
       banner2A[5].classList.remove("aaa");
    }else{
        banner2A[i-1].classList.remove("aaa");
    }
    banner1.style.marginLeft=m+"px";
     if(i==0){
        setTimeout(banner22,1600);
    }
//    console.log(i); 
}
var t=setInterval(banner,4000);
function banner22(){
    banner1.style.transition= "0s";
    banner1.style.marginLeft="0px"; 
}
var mainFestival=document.querySelectorAll(".main-festival-main1");


for(var z=1;z<mainFestival.length/2;z++){
    mainFestival[z].style.height=mainFestival[0].clientHeight+"px";
}
for(var z=mainFestival.length/2+1;z<mainFestival.length;z++){
    mainFestival[z].style.height=mainFestival[mainFestival.length/2].clientHeight+"px";
}
    
    
    
    function scro(){
        var scrollTop = window.pageYOffset|| document.documentElement.scrollTop || document.body.scrollTop;
//        console.log(scrollTop);
        var img=document.querySelectorAll(".header .header-banner img");
        
        if(scrollTop>img[0].clientHeight){
            var ser=document.querySelector(".search");
            ser.style.background="red";
        }else if(scrollTop<=img[0].clientHeight){
            var ser=document.querySelector(".search");
            ser.style.background="-webkit-linear-gradient(top, #000000 0%, transparent 100%)";
        }
        
    }
    setInterval(scro,10);
    
    var img=document.querySelectorAll(".header .header-banner img");

       var banner222=document.querySelector(".header-banner1");
banner222.ontouchmove = function(e){
    console.log(1);
}

//    banner222.addEventListener('touchmove', function (e) {
//    //touchmove:触摸进行时
//    console.log(1);
//});
    
    
}
 

    