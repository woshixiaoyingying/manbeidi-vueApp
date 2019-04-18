<template>
  <div class="mine" :style="fitPhoneTop">
    <van-nav-bar title='用户中心'  >
      <router-link :to="{path:'/win_a/home' }" slot="left">
        <van-icon name="wap-home" size='0.5rem' />
      </router-link>
      <router-link :to="{path:'/win_a/shopcart' }"  slot="right">
          <van-icon name="shopping-cart-o" size='0.5rem' />
      </router-link>
    </van-nav-bar>
    <!-- <v-content :rec="rec" :customer="customer" :user="user" @showData="getData"></v-content> -->
    <home-personal :rec="rec" :customer="customer" :user="user" @showData="getData"></home-personal>
  </div>
</template>

<script>

import { Dialog } from "vant";
import { mapState, mapGetters } from "vuex";
import authorization from "@/common/authorization";
import VContent from "./VContent";
import HomePersonal from './personal'
export default {
  components: {
    VContent,
    HomePersonal
  },
  data() {
    return {
      rec: {},
      customer: {},
      user: {},
      sourData:false
    };
  },
  computed: {
    ...mapState({
      phoneParams: "phoneParams",
      userAccount: "userAccount"
    }),
    ...mapGetters({
      fitPhoneTop: "fitPhoneTop"
    })
  },

  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      let successCallback = data => {
        this.rec = { ...data.rec };
        this.customer = { ...data.customer };
        this.user = { ...data.user };
        this.sourData = true;
      };
      this.$store.dispatch({ type: "getMinePageData", successCallback });
    },
    // 退出登录
    exitLogon() {
      authorization.clearLoginStatus();
      this.$router.replace("/login");
    }
  }
};
</script>

<style scoped lang="scss">
.mine {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: #f6f6f6;
}
</style>