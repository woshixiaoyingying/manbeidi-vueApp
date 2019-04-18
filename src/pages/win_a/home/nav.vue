<template>
  <nav class="nav" >
    <ul class="nav-list">
      <li class="nav-item" v-for="(item, index) in dispatchData.nav" :key="index">
          <router-link :to="{path:'//article/detail', query:{id:item.id,title:item.name,link:item.link}}" class="nav-link">
            <img :src="item.cacheImg" class="nav-pic">
            <span class="nav-text">{{item.name}}</span>
          </router-link>
      </li>
      <li class="nav-item" >
          <router-link :to="{path:'//article/list', query:{id:dispatchData.hyzx.id,title:dispatchData.hyzx.name,link:dispatchData.hyzx.link}}" class="nav-link">
            <img :src="dispatchData.hyzx.cacheImg" class="nav-pic">
            <span class="nav-text">{{dispatchData.hyzx.name}}</span>
          </router-link>
      </li>
      <li class="nav-item" >
          <router-link :to="{path:'/product/main', query:{id:dispatchData.cpzx.id,title:dispatchData.cpzx.name,link:dispatchData.cpzx.link}}" class="nav-link">
            <img :src="dispatchData.cpzx.cacheImg" class="nav-pic">
            <span class="nav-text">{{dispatchData.cpzx.name}}</span>
          </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import settings from "@/settings";
import imgCache from "@/common/imgCache";

  export default {
    name: 'HomeNav',
    props:["navInfo"],
    computed:{
      dispatchData(){
        let navData={
          hyzx:{},
          cpzx:{},
          nav:[]
        }
         this.navInfo.map((item,i)=>{
           if(item.name=="行业资讯"){
             navData.hyzx=item;
           }else if(item.name=='产品中心'){
            navData.cpzx=item;
           }else{
             navData.nav.push(item);
           }
         })
         return navData;
        // console.log(this.cpzx,this.hyzx,this.navData);
       } 
    },
    mounted(){
      console.log('123',this.navInfo)
     // this.dispatchData();
      this.toggleBtn();
    },
    data() {
      return {
        barBtn:false,
        // navData:[],
        // hyzx:{},
        // cpzx:{}
      }
    },
    methods:{
      toggleBtn(data){
            this.barBtn=data;
        },
       
    },
    // created(){
    //   this.dispatchData();
    // }
    

  }
</script>

<style scoped lang="scss">
  .nav {
    width: 100%;
    padding-top: 0.2rem;
    background-color: #fff;
    z-index: 9;
    min-height: 1.2rem;
    &-list {
      display: flex;
      flex-wrap: wrap;
      padding: 0 10px;
    }
    &-item {
      width: 20%;
      margin-bottom: 10px;
    }
    &-link {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    &-pic {
      width: 30%;
      margin-bottom: 8px;
    }
    &-text{
      font-size: 12px;
    }
  }
</style>