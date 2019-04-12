<template>
  <div class="art" :style="fitPhoneTop">
    <div class="header" >
      <!--<van-nav-bar title="琞珍商城" @click-left="$router.go(-1)" left-arrow>
            <img src="static/images/share.png" slot="right" class="share"> 
        </van-nav-bar>-->
        <van-nav-bar :title='title' >
         <!-- <router-link :to="{path:'/win_a/home' }" slot="left">
            <van-icon name="wap-home" size='0.5rem' />
          </router-link> -->
          <div slot="left" @click="$router.go(-1)">
            <van-icon name='arrow-left'  size='0.5rem'/>
          </div>
           
          <!-- <img src="static/images/share.png" slot="right" class="share"> -->
          
          <router-link :to="{path:'/win_a/shopcart' }"  slot="right">
             <van-icon name="shopping-cart-o" size='0.5rem' />
          </router-link>
        </van-nav-bar>
    </div>
    <art-content  :id='id' :link='link' ></art-content>
  </div>
</template>

<script>
import ArtContent from './ArtContent';
import {mapState,mapGetters} from 'vuex'
export default {
    components:{
        ArtContent
    },
  computed:{
       ...mapGetters({
      fitPhoneTop:"fitPhoneTop",
      fitPhoneBottom:"fitPhoneBottom"
    }),
      id(){
          return this.$route.query.id
      },
      title(){
        return this.$route.query.title
      },
      link(){
        if(this.$route.query.link){
          return this.$route.query.link;
        }else{
          return null;
        }
      }
  },
  methods:{
    
  },
  
};
</script>

<style scoped>
.art{
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  background-color: #fff;
}
.share{
  position: relative;
  transform: translate(0%,60%);
  width:20px;
}
.van-nav-bar .van-icon{
  color: #929292;
}
</style>