<template>
  <div class="art" :style="fitPhoneTop">
    <div class="header" >
      <van-nav-bar :title="title" @click-left="$router.go(-1)" left-arrow>
          <router-link :to="{path:'/win_a/home' }" slot="left">
            <van-icon name="wap-home" size='0.5rem' />
          </router-link> 
          <!-- <img src="static/images/share.png" slot="right" class="share"> -->
        </van-nav-bar>
    </div>
    <art-list :artInfo="artInfo"></art-list>
    <div class="bottom" :style="fitPhoneBottom">
      <van-pagination
        v-if="count>0"
        v-model="page"
        :total-items="count*1"
        :items-per-page="pageSize"
      />
    </div>
  </div>
</template>

<script>
import ArtList from './artlist';
import {mapState,mapGetters} from 'vuex'
export default {
    components:{
        ArtList
    },
    data(){
        return {
            artInfo:[],
            page:1,
            pageSize:20,
            count:0,
        }
    },
    computed:{
           ...mapGetters({
      fitPhoneTop:"fitPhoneTop",
      fitPhoneBottom:"fitPhoneBottom"
    }),
      title(){
        return this.$route.query.title
      },
      id(){
      return this.$route.query.id
    },
  },
  created(){
    this.getList();
  },

    methods:{
      getList(){
      let successCallback=data=>{
         this.artInfo = data.data;
         this.page=data.page.page;
         this.pageSize=data.page.pageSize;
         this.count = data.page.total;
        //console.log(data);
      };
      let url=this.$route.query.link;
      let {page,pageSize} = this;
      let params = {page,pageSize};
      this.$store.dispatch({
          type: "getInformationList",
          url,
          params,
          successCallback
        });
    }
        // getArtList(){
        //     let successCallback = data=>{
        //     this.artInfo = data;

        //   }
        //   let params = {
        //     category_id:this.category_id,
           
        //   }
        //   this.$store.dispatch({type:'getArtList',params,successCallback})
        // }
    }
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
</style>