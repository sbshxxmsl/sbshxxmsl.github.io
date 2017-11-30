
var caa=new Vue({
    el:"#caa",
    data:{
        ok:"b",
         d:{
            color:true
         }
    }
});

var ddc=new Vue({
    el:"#ddc",
    data:{
        o:true
       
    }
})



//component定义全局组件
//Vue.component('名字'，{对象})
//slot组件插槽
Vue.component('sbsh',{
    template:`<div>
    <div>123</div>
    <div>123</div>
    <div>123</div>
    <slot></slot>
    <hr>
    </div>`
})
Vue.component('sbsh1',{
    template:'<div>12345</div>'
})
var app=new Vue({
    el:"#app"
})

//{}定义局部组件
var sbshChild={
    template:'<div>jjj<slot></slot><hr></div>'
}

var cdd=new Vue({
    el:"#cdd",
    components:{
        sbsh:sbshChild
    }
    //components:定义局部组件的属性
})


Vue.component("my-component",{
    props:["message"],
    //props传递参数
    template:"<div>{{message}}</div>"
    
})

Vue.component("my-sbsh",{
    props:["t1","t2"],
    template:`<div>
            <p>{{t1}}</p>
            <p>{{t2}}</p>
        </div>`
})

var bcc=new Vue({
    el:"#bcc"
})
