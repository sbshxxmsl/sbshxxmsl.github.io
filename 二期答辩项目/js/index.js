function tiandong(){
			var i=110;
			var o=128;
			var p=137;
			$(".img").animate({"margin-top":i+"px"},1000);
			$(".img").animate({"margin-top":o+"px"},1000);
			$(".img").animate({"margin-top":i+"px"},1000);
			$(".img").animate({"margin-top":p+"px"},1000);
		}
		tiandong()
		setInterval(tiandong,5000)
       $(".main-bottom-white").mouseover(function(){
           $(".main-bottom-white").stop().animate({"opacity":"0.95"},"slow");
       }).mouseout(function(){
           $(".main-bottom-white").stop().animate({"opacity":"0"},"slow");
       })
       $(".main-bottom-small-white").mouseover(function(){ $(this).stop().animate({"opacity":"0.95"},"slow");
       }).mouseout(function(){ $(this).stop().animate({"opacity":"0"},"slow");
       })
       $(".main-bottom-big-white").mouseover(function(){ $(this).stop().animate({"opacity":"0.95"},"slow");
       }).mouseout(function(){ $(this).stop().animate({"opacity":"0"},"slow");
       })
       $(".lunbo-div").click(function(){
           $(".lunbo").css({"display":"none"});
           $(".lunbo-img").css({"display":"none"})
       })
       $(".bianda1").click(function(){
           $(".lunbo").css({"display":"block"})
           $(".lunbo-img").css({"display":"block"})
           var a=0;
            $(".lunbo-left").click(function(){
                a=a==0?10:a;
                 a--;
                 var margin=a*-700;
                $(".lunbo-img-width").stop().animate({"margin-left":margin},50)
            })  
            $(".lunbo-right").click(function(){
                 a=a==9?-1:a;
                 a++;
                 var margin=a*-700;
                $(".lunbo-img-width").stop().animate({"margin-left":margin},50)
            })
       })
        $(".bianda2").click(function(){
           $(".lunbo").css({"display":"block"})
           $(".lunbo-img").css({"display":"block"})
           $(".lunbo-img-width").css({"margin-left":"-700px"})
           var a=1;
            $(".lunbo-left").click(function(){
                a=a==0?10:a;
                 a--;
                 var margin=a*-700;
                $(".lunbo-img-width").stop().animate({"margin-left":margin},50)
            })  
            $(".lunbo-right").click(function(){
                 a=a==9?-1:a;
                 a++;
                 var margin=a*-700;
                $(".lunbo-img-width").stop().animate({"margin-left":margin},50)
            })
       })
         $(".bianda3").click(function(){
           $(".lunbo").css({"display":"block"})
           $(".lunbo-img").css({"display":"block"})
           $(".lunbo-img-width").css({"margin-left":"-1400px"})
           var a=2;
            $(".lunbo-left").click(function(){
                a=a==0?10:a;
                 a--;
                 var margin=a*-700;
                $(".lunbo-img-width").stop().animate({"margin-left":margin},50)
            })  
            $(".lunbo-right").click(function(){
                 a=a==9?-1:a;
                 a++;
                 var margin=a*-700;
                $(".lunbo-img-width").stop().animate({"margin-left":margin},50)
            })
       })
          $(".bianda4").click(function(){
           $(".lunbo").css({"display":"block"})
           $(".lunbo-img").css({"display":"block"})
           $(".lunbo-img-width").css({"margin-left":"-2100px"})
           var a=3;
            $(".lunbo-left").click(function(){
                a=a==0?10:a;
                 a--;
                 var margin=a*-700;
                $(".lunbo-img-width").stop().animate({"margin-left":margin},50)
            })  
            $(".lunbo-right").click(function(){
                 a=a==9?-1:a;
                 a++;
                 var margin=a*-700;
                $(".lunbo-img-width").stop().animate({"margin-left":margin},50)
            })
       })
           $(".bianda5").click(function(){
           $(".lunbo").css({"display":"block"})
           $(".lunbo-img").css({"display":"block"})
           $(".lunbo-img-width").css({"margin-left":"-2800px"})
           var a=4;
            $(".lunbo-left").click(function(){
                a=a==0?10:a;
                 a--;
                 var margin=a*-700;
                $(".lunbo-img-width").stop().animate({"margin-left":margin},50)
            })  
            $(".lunbo-right").click(function(){
                 a=a==9?-1:a;
                 a++;
                 var margin=a*-700;
                $(".lunbo-img-width").stop().animate({"margin-left":margin},50)
            })
       })
             $(".bianda6").click(function(){
           $(".lunbo").css({"display":"block"})
           $(".lunbo-img").css({"display":"block"})
           $(".lunbo-img-width").css({"margin-left":"-3500px"})
           var a=5;
            $(".lunbo-left").click(function(){
                a=a==0?10:a;
                 a--;
                 var margin=a*-700;
                $(".lunbo-img-width").stop().animate({"margin-left":margin},50)
            })  
            $(".lunbo-right").click(function(){
                 a=a==9?-1:a;
                 a++;
                 var margin=a*-700;
                $(".lunbo-img-width").stop().animate({"margin-left":margin},50)
            })
       })
        $(".bianda7").click(function(){
           $(".lunbo").css({"display":"block"})
           $(".lunbo-img").css({"display":"block"})
           $(".lunbo-img-width").css({"margin-left":"-4200px"}) 
           var a=6;
            $(".lunbo-left").click(function(){
                a=a==0?10:a;
                 a--;
                 var margin=a*-700;
                $(".lunbo-img-width").stop().animate({"margin-left":margin},50)
            })  
            $(".lunbo-right").click(function(){
                 a=a==9?-1:a;
                 a++;
                 var margin=a*-700;
                $(".lunbo-img-width").stop().animate({"margin-left":margin},50)
            })
       })
       $(".bianda8").click(function(){
           $(".lunbo").css({"display":"block"})
           $(".lunbo-img").css({"display":"block"})
           $(".lunbo-img-width").css({"margin-left":"-4900px"})
           var a=7;
            $(".lunbo-left").click(function(){
                a=a==0?10:a;
                 a--;
                 var margin=a*-700;
                $(".lunbo-img-width").stop().animate({"margin-left":margin},50)
            })  
            $(".lunbo-right").click(function(){
                 a=a==9?-1:a;
                 a++;
                 var margin=a*-700;
                $(".lunbo-img-width").stop().animate({"margin-left":margin},50)
            })
       })
         $(".bianda9").click(function(){
           $(".lunbo").css({"display":"block"})
           $(".lunbo-img").css({"display":"block"})
           $(".lunbo-img-width").css({"margin-left":"-5600px"})
           var a=8;
            $(".lunbo-left").click(function(){
                a=a==0?10:a;
                 a--;
                 var margin=a*-700;
                $(".lunbo-img-width").stop().animate({"margin-left":margin},50)
            })  
            $(".lunbo-right").click(function(){
                 a=a==9?-1:a;
                 a++;
                 var margin=a*-700;
                $(".lunbo-img-width").stop().animate({"margin-left":margin},50)
            })
       })
         $(".bianda10").click(function(){
           $(".lunbo").css({"display":"block"})
           $(".lunbo-img").css({"display":"block"})
           $(".lunbo-img-width").css({"margin-left":"-6300px"})
           var a=9;
            $(".lunbo-left").click(function(){
                a=a==0?10:a;
                 a--;
                 var margin=a*-700;
                $(".lunbo-img-width").stop().animate({"margin-left":margin},50)
            })  
            $(".lunbo-right").click(function(){
                 a=a==9?-1:a;
                 a++;
                 var margin=a*-700;
                $(".lunbo-img-width").stop().animate({"margin-left":margin},50)
            })
       })