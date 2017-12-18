$(function() {
	$(".contactusdiyou").hover(function() {
		$(".hoverimg").attr("src","images/hoverbtnbg1.gif");
		$('.diyoumask').fadeIn();
		$('.contactusdiyou').animate({right:'0'},300); 
	}, function() {
		$(".hoverimg").attr("src","images/hoverbtnbg.gif");
		$('.contactusdiyou').animate({right:'-230px'},300,function(){});
		$('.diyoumask').fadeOut();
	});
});

$(".approach-box span").click(function(){
    var i=$(this).index();
    console.log(i);
    $(this).addClass("approach-box-a").siblings().removeClass();
    $(".approach-jianjie").eq(i).addClass("block").siblings().removeClass("block");
})


$(".league span").click(function(){
    var i=$(this).index();
    console.log(i);
    $(this).addClass("approach-box-a").siblings().removeClass("approach-box-a");
    $(".league-league").eq(i).addClass("block").siblings().removeClass("block");
})



$(".trademark-box .trademark-box3").click(function(){
    var i=$(this).index();
    $(".trademark-box .trademark-box3").find("span").removeClass("trademark-box4")
    $(this).find("span").addClass("trademark-box4");
    
    $(".trademark-bo1").eq(i).addClass("trademark-block").siblings().removeClass("trademark-block");
})

