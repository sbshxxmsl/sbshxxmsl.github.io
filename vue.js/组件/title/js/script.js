//首页有好货和爱逛街的外层组件
Vue.component("tb-shop",{
    template:`<section>
            <header>
                <img :src="imgsrc" alt="">
                <span>{{e}}</span>
                <span>{{tit}}</span>
                <a href="#"><span>{{c}}</span></a>
            </header>
            <slot></slot>
        </section>`,
    props:["tit","imgsrc","e","c"]
})

//首页有好货全局组件
Vue.component("tb-shop-list",{
    template:`<div> 
        <a href="#">
            <span></span>
            <img :src="imgsrc" :alt="alt"></a>
        <h2>{{tit}}</h2>
        <p>价格：{{rmb}}</p>
    </div>`,
    props:["tit","imgsrc","rmb","alt"]
})

var app=new Vue({
    el:"#app",
    data:{
        tshirts:[{id:"0",tit:"彩虹飞碟T恤",imgsrc:"img/1.jpg",rmb:"5128"},
                {id:"1",tit:"博速 碳纤尾喉",imgsrc:"img/2.jpg",rmb:"308"},
                {id:"2",tit:"chicco超轻便易折",imgsrc:"img/3.jpg",rmb:"1078"}
                ],
        shoppings:[{id:"0",tit:"彩虹飞碟T恤",imgsrc:"img/7.jpg",rmb:"5128"},
                {id:"1",tit:"博速 碳纤尾喉",imgsrc:"img/8.jpg",rmb:"308"},
                {id:"2",tit:"chicco超轻便易折",imgsrc:"img/9.jpg",rmb:"1078"}]
    }
})
