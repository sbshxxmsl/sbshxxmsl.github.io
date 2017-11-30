////document.querySelector("#app").innerHTML="hello,js";



//选择app给它增加内容
//vue只能选择一个(偏向于用id选择)
var app=new Vue({
    el:"#app",
    //el选择器（固定）
    data:{
        message:"hello,Vue",
        url:"#",
        title:"你好！",
        text:"hello",
        //图片路径
        img:"img/1.jpg",
        //图片的title值
        pic:"图片(绑定)",
        alt:"图片1"
    }
    //data传数据（固定）
});

//通过app变量来改变text里面的值
app.text="你好！";

var add=new Vue({
    el:"#add",
//    methods里面放函数
    methods:{
        dian:function(){
            alert("你好！")
        }
    }
    
})

//点击切换图片

var cdd=new Vue({
    el:"#cdd",
    data:{
        img:"img/1.jpg",
//        sty更改css属性值(改样式（重新写样式会全部覆盖）)
        sty:"color:red;padding:5px",
        alt:"图片",
        //布尔值、数字等一般不用加引号
        t:true
    },
    methods:{
        dian:function(){
            //通过判断t的值使图片来回切换
            if(this.t){
                this.img="img/2.jpg"
            }else{
                 this.img="img/1.jpg"
            }
            this.t=!this.t//如果t为true，使t为false。如果t为false，使t为true
        }
    }
})
