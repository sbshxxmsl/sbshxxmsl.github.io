var app=new Vue({
    el:"#app",
    data:{
        newlist:"",
        lists:["学习","学习vue"],
        autofocus:"autofocus",
        //input默认内容
        placeholder:"接下来要做的事情"
    },
    //created页面刷新后执行（vue被调用后）
    created:function(){
      //  getItem获取
        if(localStorage.getItem(1)!=""){
  this.lists=localStorage.getItem(1).split(",")
  }else{
      this.lists=[];
  }
    },
    methods:{
        //添加代办事项的功能
        addlist:function(){
            if(this.newlist!=""){
            //给当前数组，追加input里面的内容
//            unshift()向前追加
             //push()向后追加
            this.lists.unshift(this.newlist);
            //让当前input里面为空
            this.newlist="";
            
            //存储数据
            //l
//            setItem存储
            localStorage.setItem(1,this.lists);
            
            
            }else{
                alert("请填写追加内容");
            }
        },
        dellist:function(i){
            //删除函数执行的时候要做的事情
            //删除lists数组里面的当前的这条数据
            this.lists.splice(i,1);
            //存储数据
            localStorage.setItem(1,this.lists);
        }
    }
})
