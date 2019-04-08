<template>
  <div class="g-tabbar" >
    <router-link to="/win_a/home" class="g-tabbar-item" v-for="(item,index) in navs" :key='index' >
      <img src="item.icon_img" /> 
      首页
    </router-link>
  <!--  <router-link to="/win_a/extension" class="g-tabbar-item">
      <img src="./home/images/zjwm.png" /> 
      走进我们
    </router-link>
    <router-link to="/win_a/mine" class="g-tabbar-item">
      <img src="./home/images/qywh.png" /> 
      企业文化
    </router-link>
    <router-link to="/win_a/extension" class="g-tabbar-item">
       <img src="./home/images/hyzx.png" /> 
        行业资讯
    </router-link>
    <router-link to="/win_a/shopcart" class="g-tabbar-item">
     <img src="./home/images/lxwm.png" /> 
        联系我们
    </router-link> -->
  </div>
</template>

<script>

export default {
  name: "CTabbar",
  props:{
    navs: {
      type: Array,
      required: true
    }
  },
  // data(){
  //   return{
  //     navs:this.navs
  //   }
  // },
  watch:{
    navs(newVal,oldVal){
      // console.log('new '+JSON.stringify(newVal) );
      // console.log('old '+JSON.stringify(oldVal) );
    }
  },
  // computed: {
  //   navs: function () {
  //   console.log(this.navs)
  //     return this.navs
  //   }
  // },
  methods: {
    
  },
};
</script>

<style scoped lang='scss'>
.g-tabbar {
  display: flex;
  width: 100%;
  height: 55px;
  background-color: #fff;
  &-item {
    flex: 1;
    display: flex;
    font-size: 10pt;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img{
      width:0.5rem;
      height:auto;
      margin-bottom: 4px;
    }
    .van-icon {
      margin-bottom: 4px;
      font-size: 0.5rem;
    }
  }
}
.g-tabbar a:nth-child(2) img{
  width:0.6rem;
}

.router-link-active {
  // color:#72DE47;
}
.iconfonts {
  margin-bottom: 5px;
}
</style>