        $(".element-main-top-right-border #ul li").click(function () {
        $(this).addClass("element-main-top-right-ul-li").siblings().removeClass("element-main-top-right-ul-li")
        var a = $(this).index();
        $(".element-main-eq .element-main-top-right-div").eq(a).addClass("element-display").siblings().removeClass("element-display")
        })
        $(".l1").click(function(){
            $("#img").attr('src',"images/1_001.jpg");
            $("#img2").attr('src','images/1_05_05.png');
            $("#img3").attr('src',"images/1_11.jpg");
             console.log(img1)
        })
        $(".l2").click(function(){
              $(".element-main-top-right-border #ul li #img2").attr('src',"images/1_00.png");
              $(".element-main-top-right-border #ul li #img").attr('src',"images/pre_03.png");
              $(".element-main-top-right-border #ul li #img3").attr('src',"images/1_11.jpg");
              console.log(img2)
        })
        $(".l3").click(function(){
             $(".element-main-top-right-border #ul li #img3").attr('src',"images/1_08.png");
             $(".element-main-top-right-border #ul li #img2").attr('src','images/1_05_05.png');
             $(".element-main-top-right-border #ul li #img").attr('src',"images/pre_03.png");
             console.log(img3)
        })
       var c=0;
        $("#element-main").click(function(){
            $("#element-main-top-bottom").stop().slideToggle(1000);
            $("#element-main-bottom-bottom").stop().slideUp(1000);
            $("#element-main-center-bottom").stop().slideUp(1000);
            c++;
            c=c==3?1:c;
            console.log(c);
            if(c==1){
                $("#element-main .element-main-bottom-right-div-top-shu").removeClass("element-display-none")
                $("#element-main .element-main-bottom-right-div-top").removeClass("element-main-bottom-right-div-font")
                $("#element-main-center .element-main-bottom-right-div-top-shu").removeClass("element-display-none")
                $("#element-main-center .element-main-bottom-right-div-top").removeClass("element-main-bottom-right-div-font")
                $("#element-main-bottom .element-main-bottom-right-div-top-shu").removeClass("element-display-none")
                $("#element-main-bottom .element-main-bottom-right-div-top").removeClass("element-main-bottom-right-div-font")
                i=0;
                b=0;
            }else{
                $("#element-main .element-main-bottom-right-div-top-shu").addClass("element-display-none")
                $("#element-main .element-main-bottom-right-div-top").addClass("element-main-bottom-right-div-font")
                $("#element-main-bottom .element-main-bottom-right-div-top-shu").removeClass("element-display-none")
                $("#element-main-bottom .element-main-bottom-right-div-top").removeClass("element-main-bottom-right-div-font")
                $("#element-main-center .element-main-bottom-right-div-top-shu").removeClass("element-display-none")
                $("#element-main-center .element-main-bottom-right-div-top").removeClass("element-main-bottom-right-div-font")
                i=0;
                b=0;
            }
           
        })
         var i=0;
        $("#element-main-center").click(function(){
            $("#element-main-center-bottom").stop().slideToggle(1000);
            $("#element-main-top-bottom").stop().slideUp(1000);
             $("#element-main-bottom-bottom").stop().slideUp(1000);
                 i++;
                 i=i==3?1:i;
            console.log(i)
                 if(i==1){
                    $("#element-main-center .element-main-bottom-right-div-top-shu").addClass("element-display-none")
                    $("#element-main-center .element-main-bottom-right-div-top").addClass("element-main-bottom-right-div-font")
                    $("#element-main-bottom .element-main-bottom-right-div-top-shu").removeClass("element-display-none")
                    $("#element-main-bottom .element-main-bottom-right-div-top").removeClass("element-main-bottom-right-div-font")
                    $("#element-main .element-main-bottom-right-div-top-shu").removeClass("element-display-none")
                    $("#element-main .element-main-bottom-right-div-top").removeClass("element-main-bottom-right-div-font")
                    b=0;
                    c=1
                 }else{
                    $("#element-main-center .element-main-bottom-right-div-top-shu").removeClass("element-display-none")
                    $("#element-main-center .element-main-bottom-right-div-top").removeClass("element-main-bottom-right-div-font")
                    
                 }
        })
        var b=0;
        $("#element-main-bottom").click(function(){
            b++;
            b=b==3?1:b;
             if(b==1){
                $("#element-main-bottom .element-main-bottom-right-div-top-shu").addClass("element-display-none")
                $("#element-main-bottom .element-main-bottom-right-div-top").addClass("element-main-bottom-right-div-font")
                $("#element-main-center .element-main-bottom-right-div-top-shu").removeClass("element-display-none")
                $("#element-main-center .element-main-bottom-right-div-top").removeClass("element-main-bottom-right-div-font")
                $("#element-main .element-main-bottom-right-div-top-shu").removeClass("element-display-none")
                $("#element-main .element-main-bottom-right-div-top").removeClass("element-main-bottom-right-div-font")
                 i=0;
                 c=1;
            }else{
                $("#element-main-bottom .element-main-bottom-right-div-top-shu").removeClass("element-display-none")
                $("#element-main-bottom .element-main-bottom-right-div-top").removeClass("element-main-bottom-right-div-font")
             }
            
            $("#element-main-bottom-bottom").stop().slideToggle(1000);
            $("#element-main-center-bottom").stop().slideUp(1000);
            $("#element-main-top-bottom").stop().slideUp(1000);
            
        })