Vue.component("my-li",{
    template:"<li>{{text}}{{ge}}个<slot></slot></li>",
    props:["text","ge"]
})

var app=new Vue({
    el:"#app",
    data:{
        messages:"",
        message:"",
        lists:[
        {name:"香蕉",id:0,shu:1},
        {name:"苹果",id:1,shu:1},
        {name:"鸭梨",id:2,shu:1}]
    },
    created:function(){
//        this.lists=localStorage.getItem(1).slice(",")
    },
    methods:{
        tianjia:function(){
            if(this.mesage!=""){
            this.lists.push({
                name:this.message,
                id:this.lists.length,
                shu:this.messages
            })
           
            this.message="";  
            this.messages="";   
            }else{
                alert("请输入内容")
            }
        },
        shanchu:function(e){
            this.lists.splice(e,1)
        }
    }
})


//var app=new Vue({
//    el:"#app",
//    data:{
//        message:"666",
//        tit:"777",
//        welcome:true
//        
//    },
//    methods:{
//        logmessage:function(){
//            this.welcome=!this.welcome;
//            alert(this.message)
//        }
//    }
//})