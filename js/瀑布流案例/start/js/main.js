window.onload=function(){
    //当页面完全加载完成后才执行js代码
    imgLocation()
}
function imgLocation(){
    
    //获取container的宽度
    var container=document.querySelector('.container');
    var box=document.querySelectorAll('.box');
    
    var boxwidth=box[0].offsetWidth;//一 张图片的宽度
    
    var iewidth=document.body.clientWidth;//内置当前游览器的宽度（body的控制台中找到）
    
    console.log(iewidth);
    console.log(boxwidth);
    
    var num=Math.floor(iewidth/boxwidth);//游览器的宽度比一张图片的宽度等于一排图片的个数
    console.log(num);
    
    var containerwidth=boxwidth*num;//一排图片的个数乘以一张图片的宽度等于container的宽度
    console.log(containerwidth);
    
    container.style.width=containerwidth+"px";
    
    
    //瀑布流排列
    
    var boxHeightArr=[];//盒子高度的数组；
    for(var i=0;i<box.length;i++){
        if(i<num){
            boxHeightArr[i]=box[i].offsetHeight;//获取第一排的所有高度
            console.log(boxHeightArr)
        }else{
            var minHeight=Math.min.apply(null,boxHeightArr);//获取第一排中最小高度。（获取每次运行最小值）
            
            box[i].style.position="absolute";//改变除第一排所有的style
            box[i].style.top=minHeight+"px";
            
            
            
            var minIndex=getMinHightLocation(boxHeightArr,minHeight);//最小高度的图片的位置（也就是i的值）
            box[i].style.left=box[minIndex].offsetLeft+"px";
            console.log(minIndex)
            console.log(minHeight);
            //重新赋值3个arr数组；
            boxHeightArr[minIndex]=boxHeightArr[minIndex]+box[i].offsetHeight;
            //boxHeightArr[minIndex]为最小高度
            console.log(boxHeightArr)
            console.log(boxHeightArr[minIndex])
            
        }
    }
//    console.log(boxHeightArr)
}


//获取最小高度的图片的位置
function getMinHightLocation(boxHeightArr,minHeight){
    for(var i in boxHeightArr){
        if(boxHeightArr[i]===minHeight){
            return i;
        }
    }
}

