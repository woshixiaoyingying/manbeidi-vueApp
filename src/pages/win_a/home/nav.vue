<template>
  <nav class="nav" >
    <ul class="nav-list">
      <li class="nav-item" v-for="(item, index) in navInfo" :key="index">
        <router-link :to="{path:'//article/detail', query:{id:item.id}}" class="nav-link">
          <img :src="item.cacheImg" class="nav-pic">
          <span class="nav-text">{{item.name}}</span>
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
    mounted(){
      // console.log('123',this.navInfo)
      this.toggleBtn();
    },
    data() {
      return {
        barBtn:false,
      }
    },
    methods:{
      toggleBtn(data){
            this.barBtn=data;
        }
    },
    

  }
</script>

<style scoped lang="scss">
  .nav {
    width: 100%;
    padding-top: 0.2rem;
    background-color: #fff;
    z-index: 9;
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