<template>
  <div class="hello">
    <p>
      <span class="listall">{{ msg }} {{listall}}</span>
    </p>

    <table class="table table-hover">
      <thead>
      <tr>
        <th>商品</th>
        <th>名称</th>
        <th>单价</th>
        <th>数量</th>
        <th>小计</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>

      <tr v-for="(list,index) in lists">
        <th scope="row">
          <img :src="list.img" alt="">
        </th>
        <td>
          <h3>
            <i v-show="list.icon1" class="jingxuan"></i>
            <i v-show="list.icon2" class="shengxian"></i>
            <p>{{list.title}}</p>
            <small>颜色：{{list.color}}</small>
          </h3>
        </td>
        <td>
          <p>￥ {{list.price}}</p>
        </td>
        <td>
          <input type="number" v-model="list.number" @click="e(index)">
          <p>{{ list.stock > 0 ? '有货' : '没货' }}</p>
        </td>
        <td>
          <p>￥{{list.xiaoji}}</p>
          <p>{{list.zhong}}kg</p>
        </td>
        <td>
          <a href="" @click.prevent="del(index)">删除</a>
        </td>
      </tr>

      </tbody>

    </table>

    <div class="text-right">
      总价：<span class="priceall">{{priceall}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: '全部商品',
        lists: [
          {
            id: 0,
            img: `./src/assets/orange.jpg`,
            icon1: true,
            icon2: true,
            title: `美仑达 赣南脐橙 2017新上市 3斤装 铂金果`,
            color: `赣南脐橙铂金果 3斤装`,
            price: `25.80`,
            number: `1`,
            stock: `100`,
            weight: `1.68`,
            xiaoji: `25.80`,
            zhong: `1.68`
          },
          {
            id: 1,
            img: `./src/assets/blueberry.jpg`,
            icon1: false,
            icon2: true,
            title: `Camposol 秘鲁进口精选蓝莓 4盒装 单盒约125g 新鲜水果`,
            color: `秘鲁蓝莓 4盒装`,
            price: `46.90`,
            number: `1`,
            stock: `100`,
            weight: `1.25`,
            xiaoji: `46.90`,
            zhong: `1.25`
          },
          {
            id: 2,
            img: `./src/assets/mango.jpg`,
            icon1: false,
            icon2: true,
            title: `欢乐果园 广西青皮芒果 2个装 单果约260g以上 新鲜水果`,
            color: `青皮芒 2粒 尝鲜装`,
            price: `10.90`,
            number: `1`,
            stock: `100`,
            weight: `0.75`,
            xiaoji: `10.90`,
            zhong: `0.75`
          },
          {
            id: 3,
            img: `./src/assets/pear.jpg`,
            icon1: false,
            icon2: true,
            title: `爱奇果 新疆库尔勒香梨 约2.5kg 当季新果 特级装 单果约120-`,
            color: `2.5kg单果约120-150g`,
            price: `39.90`,
            number: `1`,
            stock: `100`,
            weight: `2.6`,
            xiaoji: `39.90`,
            zhong: `2.6`
          },
          {
            id: 4,
            img: `./src/assets/apple.jpg`,
            icon1: false,
            icon2: true,
            title: `宏辉果蔬 苹果 烟台红富士 12个 单果约75mm 总重量2.1kg`,
            color: `12粒75mm红富士`,
            price: `34.90`,
            number: `1`,
            stock: `100`,
            weight: `2.1`,
            xiaoji: `34.90`,
            zhong: `2.1`
          }
        ]
      }
    },
    computed: {
      listall () {
        return this.lists.length
      },
      priceall () {
        var all = 0
        for (var i = 0; i < this.lists.length; i++) {
          var one = Number(this.lists[i].price)
          var num = Number(this.lists[i].number)
          all += one * num
        }
        // 如果小数点末尾数量小于2，则在末尾加一个0
        var len = all.toString().split(`.`)[1].length
        if (len < 2) {
          return all + `0`
        }
        return all.toFixed(2)
      }
    },
    methods: {
      del (index) {
        if (confirm(`确定删除？`)) {
          this.lists.splice(index, 1)
        }
      },
      e (i) {
            this.lists[i].xiaoji=(this.lists[i].price * this.lists[i].number).toFixed(2)
            this.lists[i].zhong=(this.lists[i].weight * this.lists[i].number).toFixed(2)
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img {
    width: 80px;
    height: 80px;
  }

  h3 {
    font-size: 12px;
  }

  input {
    width: 44px;
    text-align: center;
    outline: none;
  }

  i {
    background-image: url(../assets/aicon.png);
    display: inline-block;
  }

  .jingxuan {
    background-position: -1px -276px;
    width: 57px;
    height: 16px;
  }

  .shengxian {
    background-position: -1px -300px;
    width: 48px;
    height: 16px;
  }

  .listall {
    color: red;
    font-size: 16px;
    font-weight: bold;
    display: inline-block;
    border-bottom:2px solid red;
  }

  .priceall {
    font-size: 16px;
    font-weight: bold;
    color: red;
  }
</style>
