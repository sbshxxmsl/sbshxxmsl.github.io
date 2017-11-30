//点击切换图片
var app=new Vue({
    el:"#app",
    data:{
        text:"按钮",
        c:"color:red",
        d:"img/1.jpg",
        h:"图片",
        tit:"图片1",
        t:true
    },
    methods:{
        e:function(){
            if(this.t){
                this.d="img/2.jpg";
                this.tit="图片2"
            }else{
                this.d="img/1.jpg";
                this.tit="图片1"
            }
            this.t=!this.t;
        }
    }
})


var cdd=new Vue({
    el:"#cdd",
    data:{
        colors:[{name:"红色",url:"hong.html"},
                {name:"蓝色",url:"lan.html"},
                {name:"绿色",url:"lu.html"}]
    }
    
})

var bbc=new Vue({
    el:"#bbc",
    data:{
        cs:[{name:"小红"},
           {name:"小名"}]
    },
    methods:{
        e:function(str){
            console.log(str);
        }
        
    }
})

