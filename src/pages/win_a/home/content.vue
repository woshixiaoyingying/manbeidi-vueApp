<template>
  <div class="content">
    <!--<div class="gg">
      <a @click="$router.push(`//gift/make`)">
        <div id="ad-hvudi8h1-llsw-fymz-pge4-kkn5cwga" class="gg-item">
          <img src="static/images/4da4580a37f3a715a8922ea7d657b2e8.jpg" title>
        </div>
      </a>
    </div>-->
    <div class="product-show">
      <img src="./images/product-title.png" alt="">
    </div>
    <div class="products">
      <div class="pro-list-cp pro-list-all" v-for="(item,index) in goodsInfo" :key="index">
        <!--<div class="tcon">
          <img class="lazy" :src="item.titleImg">
        </div>-->
        <div class="mcon" @click="$router.push(`///product/${item.id}`)">
          <div class="pic">
            <img class="lazy" :src="item.cacheImg">
          </div>
          <div class="intro">
            <h4>{{item.name}}</h4>
            <div class="info">{{item.subtitle}}</div>
           <!-- <div class="price">¥ {{item.sell_price}}</div>-->
           <!-- <div class="shou">已售 18521</div>-->
          </div>
        </div>
      </div>
    </div>
    
    <!--<div class="pro-list-cp3 pro-list-all">
      <div class="tcon">
        <img class="lazy" alt src="static/images/pro-title03.png">
      </div>
      <div class="mcon">
        <div class="pic">
          <img class="lazy" alt src="static/images/tu3.jpg">
           <img class="lazy" alt :src="../../../../static/images/tu3.jpg"> 
           <img class="lazy" alt :src="pic[2].url"> 
        </div>
      </div>
    </div>-->
  </div>
</template>

<script>
import settings from "@/settings";
export default {
  name: "HomeContent",
  props: ["goodsInfo"],
    data() {
    return {
      settings,
    };
  },
  created(){
   // console.log('shangpin',this.goodsInfo)
  }
};
</script>

<style scoped lang='scss'>
.content{
  position: relative;
  z-index: 0;
  top: .7rem;
}
.product-show{
  text-align: center;
  padding: 15px 0 20px;
  img{
    width: 30%
  }
}

.gg {
  padding: 20px;
  overflow: hidden;
  border-bottom: 1px #f2f2f4 solid;
  background-color: #fff;
  margin-top: 10px;
}

.gg img {
  width: 100%;
  height: auto;
}

.gg-item {
  width: 100%;
}
.products{
  text-align: center;
}
.pro-list-all {
  background-color: #fff;
  display: inline-block;
  width: 45%;
  margin: 0 5px;
  border-bottom: 1px #f2f2f4 solid;
  margin-bottom: 10px;
}

.tcon {
  padding: 20px 0;
}

.tcon img {
  display: block;
  margin: 0 auto;
  width: 45%;
}

.mcon img {
  width: 100%;
  height: auto;
}

.intro {
  position: relative;
  padding: 10px 10px 12px;
}

.mcon {
  // padding-bottom: 15px;
}

.mcon h4 {
    font-size: .3rem;
    text-align: left;
    color: #000;
    line-height: .4rem;
}

// .mcon .shou {
//   position: absolute;
//   right: 0;
//   top: 5px;
//   color: #f8c301;
//   font-size: 11pt;
// }

.pro-list-all .mcon .info {
  font-size: .2rem;
    color: #d71d1d;
    margin-top: .1rem;
}

.pro-list-all .mcon .price {
  color: #ff0000;
  font-size: 12px;
  font-weight: bold;
}

.pro-list-all .mcon img {
  width: 100%;
  height: auto;
}
</style>