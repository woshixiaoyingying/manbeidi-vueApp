<template>
  <div class="home">
    <header class="g-header-container">
     <!-- <home-header :header_category_id="notice_category_id"></home-header> -->
     <Search @toggleBar="toggleBtn"></Search>
    </header>
    <div class="g-body-container" :class="barBtn?'hide':null">
        <home-nav :navInfo="navInfo" ref='nav'></home-nav>
        <home-slider :ads="ads" v-if="ads.length>0"></home-slider>
        <!-- <img src="http://szsctest.ys.wangqi.vc/data/uploads/2019/03/25/eebea54d8dad51c89d4c9e42790c4167.png" alt="" class="bannerImg"> -->
      
        <home-notice :cate_name="cate_name" :notice_category_id="notice_category_id"></home-notice>
        <home-content :goodsInfo="goodsInfo"/>
        <main-push :main_push="main_push"></main-push>
        <home-rec :rec="rec"></home-rec>
        <home-news :news='news' :adpic="adpic"></home-news>
       <!-- <home-footer :healthInfo="healthInfo" :footer_category_id="footer_category_id"/> -->
    </div>
   
  </div>
</template>

<script>
import settings from "@/settings";
import imgCache from "@/common/imgCache";
import { mapGetters } from "vuex";
//组件
import HomeHeader from "./header";
import HomeSlider from "./slider";
import HomeNav from "./nav";
import HomeNotice from "./notice";
import HomeFooter from "./footer";
import HomeContent from "./content";
import Search from './search';
import MainPush from './mainpush';
import HomeRec from './rec';
import HomeNews from './news';
export default {
  components: {
    HomeHeader,
    HomeSlider,
    HomeNav,
    HomeNotice,
    HomeFooter,
    HomeContent,
    Search,
    MainPush,
    HomeRec,
    HomeNews
  },
  data() {
    return {
      barBtn:false,
      hotGoodsData: [],
      settings,
      arts: [],
      cate_name: '',//公告标题
      notice_category_id:'1',//公告的文章列表category_id
      footer_category_id:'3',//养生中心文章列表
      ads: [],//广播轮播
      navInfo: [],//hoem-nav当中传的数据
      goodsInfo: [],//中间主内容
      healthInfo:[],//养生中心
      recImg: null,
      newImg1: null,
      newImg2: null,
      hotGoodsPage: 1,
      hotGoodsPageSize: 5,
      loading: false,
      finished: false,
      low_price: null,
      main_push: null,
      ztt: null,
      rec:[],//推荐组合,
      news:[],//新闻,
      adpic:[]//广告图片
    };
  },
  computed: {
    ...mapGetters({
      fitPhoneTop: "fitPhoneTop"
    })
  },
  created() {
    this.getCache();
    this.getData();
    this.getAdvData();
  },
  methods: {
    onLoad() {
      this.hotGoodsPage = this.hotGoodsPage + 1;
    },
    //传递顶部切换按钮
    toggleBtn(data){
      this.barBtn=data;
    },
    //点击分类商品
    categroyClick(item) {
      let arr = item.link.split("/");
      let id = arr[arr.length - 1];
      let cate = arr[arr.length - 2];
      if (cate == "id") {
        this.$router.push(`///product/${id}`);
      } else if (cate == "cid") {
        this.$router.push(`/category/${id}/${item.name}`);
      }
    },
    // 设置缓存
    setCache(type) {
      let successCallback = () => {
        let data = {
          navInfo: this.navInfo,
          ads: this.ads,
          goodsInfo:this.goodsInfo,
          healthInfo:this.healthInfo,
          recImg: this.recImg,
          newImg1: this.newImg1,
          newImg2: this.newImg2,
          main_push:this.main_push,
          rec:this.rec,
          news:this.news,
          adpic:this.adpic,
          // hotGoodsData:this.hotGoodsData
        };
        localStorage.setItem("homePageData", JSON.stringify(data));
      };
      this.cacheImg(type, successCallback);
    },
    //缓存图片
    cacheImg(type, successCallback) {
      
      switch (type) {
        case "navInfo":
         this.navInfo.map((item, index) => {
            imgCache(`${settings.imgBaseUrl}${item.icon_wap}`).then(res => {
              this.$set(this.navInfo, index, { ...this.navInfo[index], cacheImg: res });
              successCallback();
            });
          });;
          break;
        case "ads":
          this.ads.map((item, index) => {
            imgCache(`${settings.imgBaseUrl}${item.path}`).then(res => {
              this.$set(this.ads, index, { ...this.ads[index], cacheImg: res });
              successCallback();
            });
          });
          break;
        case "rec":
          this.rec.map((item, index) => {
            imgCache(`${settings.imgBaseUrl}${item.img}`).then(res => {
              this.$set(this.rec, index, { ...this.rec[index], cacheImg: res });
              successCallback();
            });
          });
          break;
        case "goodsInfo":
            this.goodsInfo.map((item, index) => {
            imgCache(`${settings.imgBaseUrl}${item.img}`).then(res => {
              this.$set(this.goodsInfo, index, { ...this.goodsInfo[index], cacheImg: res });
              //this.$set(this.goodsInfo, index, { ...this.goodsInfo[index], titleImg: `static/images/pro-title0${index+1}.png` });
              successCallback();
            });
          });
          break;
        case "healthInfo":
         this.healthInfo.map((item, index) => {
            imgCache(`${settings.imgBaseUrl}${item.img}`).then(res => {
              this.$set(this.healthInfo, index, { ...this.healthInfo[index], cacheImg: res });
              successCallback();
            });
          });
          break;
          case "mainPush":
          this.main_push.map((item, index) => {
            imgCache(`${settings.imgBaseUrl}${item.img}`).then(res => {
              this.$set(this.main_push, index, { ...this.main_push[index], cacheImg: res });
              successCallback();
            });
          });
          break;
          case "adpic":
          this.adpic.map((item, index) => {
            imgCache(`${settings.imgBaseUrl}${item.path}`).then(res => {
              this.$set(this.adpic, index, { ...this.adpic[index], cacheImg: res });
              successCallback();
            });
          });
          break;
          case "news":
          this.news.map((item, index) => {
              let year=item.publish_time.slice(0,4);
              let date=item.publish_time.slice(5,10);
              this.$set(this.news, index, { ...this.news[index], year:year,date:date});
              successCallback();
          });
          break;
        default:
          break;
      }
    },
    //获取缓存
    getCache() {
      let data = JSON.parse(localStorage.getItem("homePageData"));
      console.log('获取缓存数据',data)
      if (!data) {
        return;
      }
      for (let key in data) {
        this[key] = data[key];
      }
    },
    //获取三个广告位
    getAdvData() {
      let successCallback = data => {
        this.recImg = data.recImg;
        this.newImg1 = data.newImg[0];
        this.newImg2 = data.newImg[1];
        this.setCache("rec");
      };
      let params = {};
      this.$store.dispatch({
        type: "getHomePageAdvData",
        params,
        successCallback
      });
    },
    getData() {
      let successCallback = data => {
       // console.log('getData ' );
       // console.log(data);
        let {product, ads, low_price, main_push, ztt,article,com_art,nav,rec ,news,ad_pic} = data;
        let item;
        this.navInfo = [];//清空缓存当中的信息
        this.navInfo=nav;
        this.news=news;
        this.adpic=ad_pic.content;
        this.rec=rec;
        this.goodsInfo = product;
        this.ads = ads;
        this.cate_name = article;
        this.low_price = low_price;
        this.main_push = main_push;
        this.ztt = ztt;
        this.healthInfo = [];//清空缓存当中的信息
        this.setCache("ads");
        this.setCache("goodsInfo");
        this.setCache("healthInfo");
        this.setCache("navInfo");
        this.setCache("mainPush");
        this.setCache("rec");
        this.setCache("adpic");
        this.setCache('news');
      };

      this.$store.dispatch({ type: "getHomePageData", successCallback });
    }
  }
};
</script>

<style scoped lang="scss">
.home {
  height: 100%;
  overflow: auto;
  position: relative;
  background-color: #f4f4f4;
}
.bannerImg {
  width: 100%;
  max-height: 488px;
}
.g-body-container{
  position: relative;
  top:-1.2rem;
}
.hide{
  top:0;
}
</style>