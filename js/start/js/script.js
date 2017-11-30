
//回调函数


//function s(call){
//    console.log("xxx")
//    call()
//}
//s(h);
//
//
//function h(){
//    console.log("hhh");
//}

//用回调函数无限次弹出警告框
//var n=0
//function a(){
//    console.log(n);
//    n++;
//    if(n<10){
//        a();//函数自己调自己
//    }
//}
//a();

//var c=0;
//for(var i=1;i<=10;i++){
//    c=c+i;
//}
//console.log(c)

function h(n){
    if(n==1){
        return 1;
        console.log(n)
    }else{
        return n + h(n-1);
        //return 10+9+h(9-1);
        
//        h(10-1)返回
        //return 9+h(9-1);
    }
}
var s=h(10)
console.log(s)


function c(n){
    if(n==1|n==0){
        return 1
    }else{
        return c(n-1)+c(n-2);
        
//        c(3);
//        
//        c(2)+c(1);1
//        c(1)+c(0);2
//        
//        
//        c(2)
//        c(1)+c(0);2
        
        
//        c(4);
//        c(3)+c(2);5
//        c(3);3
        
    }
}
var z=c(4);
console.log(z)












