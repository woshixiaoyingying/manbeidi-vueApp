<template>
    <div class="product-main" :style='fitPhoneTop'>
        <van-nav-bar :title="title" left-arrow>
            <router-link :to="{path:'/win_a/home' }" slot="left">
                <van-icon name="wap-home" size='0.5rem' />
            </router-link> 
            <router-link :to="{path:'/win_a/shopcart' }"  slot="right">
                <van-icon name="shopping-cart-o" size='0.5rem' />
            </router-link>
        </van-nav-bar>
        <ul class="product-sort" ref='sortBtn'>
            <li class="active">默认 <i></i></li>
            <li >销量<i></i></li>
            <li >评论数<i></i></li>
            <li >价格<i></i></li>
            <li >最新<i></i></li>
        </ul>
        <products :data='productData'></products>
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
import { mapGetters } from "vuex";
import Products from './products';
import imgCache from "@/common/imgCache";
import settings from "@/settings";
export default{
    components:{
        Products,
    },
    computed: {
    ...mapGetters({
      fitPhoneTop: "fitPhoneTop",
      fitPhoneBottom:"fitPhoneBottom"
    }),
    title(){
        return this.$route.query.title;
    },
    link(){
        return this.$route.query.link;
    }
  },
  data(){
      return{
          productData:[],
          page:1,
          pageSize:10,
          count:0,
          sort:null,
      }
  },
  created(){
      let products=localStorage.getItem('productDatas');
      if(products){
        this.setData(JSON.parse(products))
      }else{
          this.getData();
      }
  },
  mounted(){
      //点击不同按钮，数据重新排序
      let sortBtns= Array.from(this.$refs.sortBtn.children);
      Array.from(sortBtns).map((item,i,arr)=>{
          item.onclick=()=>{
            item.classList.add("active");
             this.sortType(item.innerText);
             let sibilings=this.sibilings(item,sortBtns);
             sibilings.map((item,i)=>{
                 item.classList.remove('active');
             })
          }
      })
  },
  methods:{
      sibilings(elm,p){
        let a = [];
        p.map((item,i)=>{
            if(item.nodeType==1&&item!=elm){
                a.push(item);
            }
        })
        return a;
      },
      sortType(text){
        switch(text){
            case '默认':
            this.sort=null;
            break;
            case '销量':
            this.sort=1;
            break;
            case '评论数':
            this.sort=2;
            break;
            case '价格':
            this.sort=4;
            break;
            case '最新':
            this.sort=5;
            break;
        }
        this.getData();
      },
      setData(data){
        console.log(data);
         localStorage.setItem("productDatas",JSON.stringify(data));
        this.productData=data.goods.data;
         this.page=data.goods.page.page;
         this.pageSize=data.goods.page.pageSize;
         this.count = data.goods.page.total;
      },
    getData(){
        let successCallback=data=>{
            let productList=data.goods.data;
            productList.map((item, index) => {
            imgCache(`${settings.imgBaseUrl}${item.img}`).then(res => {
              this.$set(productList, index, { ...productList[index], cacheImg: res });
              this.setData(data); 
            });
          });;
      };
      let url=this.link;
      console.log(url);
      let {page,pageSize,sort} = this;
      let params = {page,pageSize,sort};
      this.$store.dispatch({
          type: "getInformationList",
          url,
          params,
          successCallback
        });
    }
  },
}
</script>
<style lang="scss" scoped>
.product-main{
   width: 100%;
  height: 100%;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  background-color: #fff;
}
.product-sort{
    display: flex;
    justify-content: space-around;
    font-size: .3rem;
    line-height: .8rem;
    border-bottom: 1px solid #ddd
}
.product-sort .active i{
    display: inline-block;
    width: .3rem;
    height: .3rem;
    background-image: url('./images/sort_cur_desc.png');
    background-repeat: no-repeat;
    background-size: 100%;
}
.product-sort .active:nth-child(4) i{
    background-image: url('./images/sort_cur_asc.png');
}
.product-sort .active{
    background: url('./images/sub_current_bg.png') no-repeat scroll center bottom rgba(0, 0, 0, 0);
    background-size: 0.2rem 0.1rem;
    font-weight: 800;
}
</style>