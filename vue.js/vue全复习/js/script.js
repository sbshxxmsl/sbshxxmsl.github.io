//message
var app=new Vue({
    el:"#app",
    data:{
        message:"hello"
    }
})
//属性绑定v-bind
var app1=new Vue({
    el:"#app1",
    //属性绑定v-bind
    data:{
        title:"属性title"
    },
    //事件绑定v-on
    methods:{
        btn(){
            alert("hello");
        }
    }
})

//<!--  利用v-on点击切换图片-->
var app2=new Vue({
    el:"#app2",
    data:{
        src:"img/1.jpg",
        t:true
    },
    methods:{
        qie(){
            if(this.t){
                this.src="img/2.jpg"
            }else{
                this.src="img/1.jpg"
            }
            this.t=!this.t
        }
    }
})
//<!--  v-for循环输出水果-->
var app3=new Vue({
    el:"#app3",
    data:{
        lists:['香蕉','苹果','鸭梨'],
        listss:[
            {shuiguo:"香蕉"},
            {shuiguo:"苹果"},
            {shuiguo:"鸭梨"}
              ]
    }
})

//传递参数
var app4=new Vue({
    el:"#app4",
    methods:{
        e(s){
            console.log(s+"word")
        }
    }
})

//通过索引删除数组里的内容
var app5=new Vue({
    el:"#app5",
    data:{
        lists:['香蕉','苹果','鸭梨']
    },
    methods:{
        e(s){
            this.lists.splice(s,1);
        }
    }
})
//v-model双向绑定
var app6=new Vue({
    el:"#app6",
    data:{
        message:""
    }
})
//v-if判断（如果为true使p显示要不就隐藏）
var app7=new Vue({
    el:"#app7",
    data:{
        t:true
    }
})
//样式绑定
var app8=new Vue({
    el:"#app8",
    data:{
        classObject:{
            h:true
        }
    }
})