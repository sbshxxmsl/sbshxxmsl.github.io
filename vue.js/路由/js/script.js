//组件
//const可以代替var（区别const为唯一的，不覆盖）
const home={
    template:"<h2>首页</h2>"
}
const event={
    template:"<h2>活动</h2>"
}
const routes=[
    //当路径为path里的值是，执行component里面的组件
    {path:"/",component:home},
    {path:"/events",component:event}
    
]
//vue的路由实例
const router=new VueRouter({
    //调用routes这个数组
    routes:routes
})
const app=new Vue({
    el:"#app",
    router
})