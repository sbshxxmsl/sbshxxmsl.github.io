Vue.component("my-li",{
    template:`<li>
                <h4>
                    {{tit}}
                </h4>
                <p>{{p1}}</p>
                <p>人气{{p2}}</p>
            </li>`,
    props:["tit","p1","p2"]
})



Vue.component("my-mai",{
    template:`<li>
                <a href="">
                    <img :src="b">
                </a>
                <a href="" class="a1">
                    {{bb}}
                </a>
                <div class="div">
                    <a href="">
                        评论
                        <em>{{bb2}}</em>
                    </a>
                    <a href="">
                        收藏
                        <em>{{bb3}}</em>
                    </a>
                </div>
                <div class="div2">
                    <a href="" class="a2">
                    <span>￥</span><em>{{bb4}}</em>
                    </a>
                    <a href="" class="a3">
                    月销<em>{{bb5}}</em>笔
                    </a>
                </div>
            </li>`,
    props:["b","bb","bb2","bb3","bb4","bb5"]
})





var app=new Vue({
    el:"#app",
    data:{
        lifes:[
            {id:"0",tit:"好运妈咪帮",p1:"孕期通关手册",p2:"620724"},
               {id:"1",tit:"超级买手",p1:"专注买买买",p2:"560639"},
               {id:"2",tit:"超级大学生",p1:"我的校园生活",p2:"1494565"},
               {id:"3",tit:"理想家",p1:"想要这个家",p2:"1729549"}
              ],
        mais:[{b:"img/1.jpg",bb:"天然碧玺吊坠108佛珠水晶手串旺夫女朋友",bb2:"0",bb3:"18",bb4:'100',bb5:"32"},
              {b:"img/2.jpg",bb:"天然碧玺吊坠108佛珠水晶手串旺夫女朋友",bb2:"0",bb3:"18",bb4:'100',bb5:"32"},
              {b:"img/3.jpg",bb:"天然碧玺吊坠108佛珠水晶手串旺夫女朋友",bb2:"0",bb3:"18",bb4:'100',bb5:"32"},
              {b:"img/4.jpg",bb:"天然碧玺吊坠108佛珠水晶手串旺夫女朋友",bb2:"0",bb3:"18",bb4:'100',bb5:"32"},
              {b:"img/5.jpg",bb:"天然碧玺吊坠108佛珠水晶手串旺夫女朋友",bb2:"0",bb3:"18",bb4:'100',bb5:"32"}
              
              
            ]
    }
})
