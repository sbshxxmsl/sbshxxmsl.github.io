Vue.component('my',{
	 props:["head"],
	template:'<h1>{{head}}</h1>'
})
Vue.component('sbsh',{
	template:`<ul>
 			<li><a href="1.html">首页</a></li>
 			<li><a href="2.html">素材一</a></li>
 			<li><a href="3.html">素材二</a></li>
 			<li><a href="4.html">素材三</a></li>
 		
 		</ul>`
})

Vue.component('sj',{
	 props:["main","main1"],
	template:'<div><p>{{main}}</p><p>{{main1}}</p></div>'
})
Vue.component('mys',{
	
	template:'<p>浙江法具有限公司 | 浙 ICP 备15045692 号 | 售后服务热线： 400-800-9696 技术支持：创锐科技-衙州网站建</p>'
})

var app=new Vue({
	el:"#app"
})