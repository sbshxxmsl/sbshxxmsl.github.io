var swiper = new Swiper('.swiper-container', {
            direction: 'vertical', //horizontal:水平方向  vertical:垂直方向
            //            loop: true, //loop:循环不间断
//            autoplay: {
//                delay: 5000, //5秒切换一次
//            }, //自动轮播
            initialSlide: 0, //索引值，默认是0，直接呈现第几张图片
            //             speed:3000, //滑动速度
            pagination: {
                el: '.swiper-pagination' //出现分页器
                    
                , clickable: true, //可以点击
            }
            , scrollbar: {
                el: '.swiper-scrollbar'
            , }
            , navigation: {
                nextEl: '.swiper-button-next'
                , prevEl: '.swiper-button-prev'
            , }, // 如果需要前进后退按钮
           
            on:{
              init: function(){
                swiperAnimateCache(this); //隐藏动画元素 
                swiperAnimate(this); //初始化完成开始动画
              }, 
              slideChangeTransitionEnd: function(){ 
                swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
              } 
            }
           
        })
       
        var dynamic=document.querySelector(".dynamic .img");
        
        var i=0;
        function time(){
            i=i+0.1;
            if(i>1){
                i=1;
//                clearInterval(t);
            }
            dynamic.style.opacity=i;
        }
        var t=setInterval(time,100);
        var slide=document.querySelector('.slider2');
        slide.addEventListener("touchstart",function(e){
//            var _x=e.touches[0].pageX;
            var _y=e.touches[0].pageY;
            time78(_y);
//            console.log("start",_x);
        });
        
        slide.addEventListener("touchend",function(e){
//            var _x=e.changedTouches[0].pageX;
            var _y=e.changedTouches[0].pageY;
            time78(_y);
        });
        
        
        var c=[];
        function time78(e){
            c.push(e);
//            console.log(c);
            if(Number(c[0])<Number(c[1])){
                endHandler();
                  console.log(c);
            }
        }
        function endHandler() {
                dynamic.removeEventListener('animationend',endHandler);
                dynamic.className = '';
                    setTimeout(function () {
                        dynamic.className = 'img';
                    }, 0);
        }
//        var dynamic7img=document.querySelector('.img2');
//        
//        function endHandler2() {
//                    dynamic7img.removeEventListener('animationend', endHandler2);
//                    dynamic7img.className = '';
//                    setTimeout(function () {
//                        dynamic7img.className = 'img2';
//                    }, 0);
//        }
        
        
        
        
        
        
        
        
        
        var dynamic3=document.querySelectorAll(".dynamic3 img");
        var e=1;
//        console.log(dynamic3)
        function time2(){
            e=e-0.1;
            if(e<=-1){
                e=1;   
            }
            for(var c=0;c<dynamic3.length;c++){
                dynamic3[c].style.opacity=e;
            }
            
        }
        
        setInterval(time2,70);
        
        var dynamic4=document.querySelector(".dynamic4");
        var audio1=document.querySelector(".dynamic4 audio");
    
//        sudo apt-get install php7.0-cli php7.0-cgi php7.0-fpm
        dynamic4.onclick=function(){
            
            if(audio1.paused) {
                audio1.play(); 
                dynamic4.style.backgroundImage="url(images/musicon.png)";
                dynamic4.style.animation="box2 1s linear infinite";
                
            }
            else{
                audio1.pause();
                dynamic4.style.backgroundImage="url(images/musicoff.png)";
                dynamic4.style.animation="none";
            }
        }