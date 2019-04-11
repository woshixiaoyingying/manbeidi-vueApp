<template>
    <div class='search'>
        
        <form action="/" class="search-box">
        <van-icon name="bars" size='0.5rem' v-on:click="toggle"/>
            <van-search class="van-search"
                placeholder="请输入搜索关键词"
                shape="round"
            />
        <router-link :to="{path:'/win_a/shopcart' }"  slot="right">
            <van-icon name="shopping-cart-o" size='0.5rem' />
        </router-link>
        </form>

    </div>
</template>    



<script>
import { mapState, mapGetters } from "vuex";
export default {
    name:'Search',
    computed: {
    ...mapState({
      phoneParams: "phoneParams"
    }),
    ...mapGetters({
      fitPhoneTop: "fitPhoneTop"
    })
  },
    data(){
        return{
            barBtn:false,
        }
    },
    methods: {
        toggle(){
            this.barBtn=!this.barBtn;
            this.$emit("toggleBar",this.barBtn);
        }
    },

}
</script>


<style lang="scss">
    .search{
        background-color:#fff;
        z-index:99;
        position:relative;
    }
    .van-search{
        display:inline-block;
        flex:1;
    }
    .search-box{
        display: flex;
        padding: 0 5px;
        justify-content: center;
        align-items: center;
    }
</style>