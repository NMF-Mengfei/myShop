<template>
  <div class="home">
        <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="../../assets/images/c1.webp" alt="">
              </div>
              <div class="swiper-slide">
                <img src="../../assets/images/c2.jpg" alt="">
              </div>
              <div class="swiper-slide">
                <img src="../../assets/images/c3.webp" alt="">
              </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <div class="select">
        <ul class="select-ul">
          <li v-for="item in iconlist"><img :src="item.url" alt="" /><p>{{item.text}}</p></li>
        </ul>
      </div>
      <div class="content">
            <div class="floor1" v-for="flooritem in productData" >
                <!-- <h2 class="floor_header">每日精选</h2> -->
                <div class="floor_banner"><img  v-lazy="flooritem.floorImg"  alt=""></div>
                <div class="floor_content">
                    <ul>
                        <li class="floor_item" v-for="img in flooritem.itemImg"  >
                            <img v-lazy="img.src"  alt="">
                            <p class="goods_name">小米8 青春版</p>
                            <p class="goods_intro">索尼2400万自拍，超级夜景</p>
                            <p class="goods_money">￥1199起<span>￥1699</span></p>
                        </li>
                    </ul>
                    <h3><span>更多商品</span>></h3>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import { mapState } from 'vuex'
  export default {
    name:"Home",
     data(){
      return{
        carousel:[
        '/static/imgs/c1.webp','/static/imgs/c2.jpg','/static/imgs/c3.webp'
        ],
        iconlist:[
          {'url':'/static/imgs/tm.webp','text':'新品发布'},
          {'url':'/static/imgs/jhs.png','text':'小米众筹'},
          {'url':'/static/imgs/tmgj.png','text':'以旧换新'},
          {'url':'/static/imgs/wm.png','text':'1分拼团'},
          {'url':'/static/imgs/tmcs.webp','text':'超值特卖'},
          {'url':'/static/imgs/czzx.webp','text':'小米秒杀'},
          {'url':'/static/imgs/fz.png','text':'每日甄选'},
          {'url':'/static/imgs/jb.png','text':'电视热卖'},
          {'url':'/static/imgs/pm.png','text':'家电热卖'},
          {'url':'/static/imgs/fl.png','text':'米粉卡'},
        ],
        // floorlist:[
        //     {'src':'/static/imgs/floor1-banner.jpg'},
        //     {'src':'/static/imgs/floor2_banner.webp'},
        //     {'src':'/static/imgs/floor1-banner.jpg'}
        // ],
        // itemlist:[
        //     {'src':'/static/imgs/floor1-1.jpg'},
        //     {'src':'/static/imgs/floor1-2.png'},
        //     {'src':'/static/imgs/floor1-3.jpg'},
        //     {'src':'/static/imgs/floor1-1.jpg'},
        //     {'src':'/static/imgs/floor1-1.jpg'},
        //     {'src':'/static/imgs/floor1-1.jpg'},
        // ],
        imgheight:0
      }
    },
    mounted(){
      new Swiper('.swiper-container',{
        loop:true,
        autoplay:true,
        pagination:{
          el:'.swiper-pagination',
          clickable:true
        }
      })
                           //action类型
      this.$store.dispatch('getProducts') //vuex获取数据

    },
    computed:{
        ...mapState(['productData'])
    }
  }
</script>

<style lang="less">
  .home .swiper-slide{
    img{
      width:100%;
      height: 400px;
    }
  }
  .select{
    .select-ul{
        li{
            float: left;
            width: 20%;
            list-style: none;
            img{
                width: 100%;
            }
            p{
                font-size: .875rem;
            }
        }
    }
}
.content{
    clear:both;

    .floor_header{
        float: left;
    }
    .floor_banner{
        img{
            width: 100%;
            // height: auto;
        }
    }
    .floor_content{
        overflow: hidden;
        ul{
            overflow: hidden;
        }
        h3{
            border-top:1px solid #ddd;
            margin-top: 1.25rem;
            height: 2.5rem;
            line-height: 2.5rem;
            // span{}
            font-size: .875rem;
            color:#666;
        }
    }
    .floor_item{
        width: 50%;
        // height: 15.9375rem;
        padding-bottom: .625rem;
        float: left;
        img{
            width: 100%;
            // height: 12.5rem;
            // min-height: 12.5rem;
        }
        .goods_name{
            font-size: .875rem;
        }
        .goods_intro{
            color:#666;
            font-size: .75rem;
        }
        p{
            padding: 0px 10px;
            text-align: left;
        }
        .goods_money{
            font-size: .875rem;
            color:red;
            span{
                font-size: .75rem;
                color:#666;
                text-decoration:line-through;
            }
        }
    }
}
</style>
