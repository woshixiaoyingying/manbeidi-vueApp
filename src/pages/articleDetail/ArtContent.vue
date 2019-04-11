<template>
  <div class="article">
    <div class="title-back">
      <h1 class="art_title art">{{article.title}}</h1>
      <div>
        <span>{{article.publish_time}}</span>
      </div>
    </div>
    <p class="art_content" v-html="article.content"></p>
  </div>
</template>

<script>
export default {
  name: "ArtContent",
  props: ["id","link"],
  data() {
    return {
      article: {}
    };
  },
  created() {
    if(this.link){//传过来link
      this.getData();
    }else{
      this.getArtData();
    }
    
  },
  methods: {
    getArtData() {
      if (this.id) {
        let successCallback = data => {
          this.article = data;
          //console.log(data);
        };
        let params = {
          id: this.id
        };
        this.$store.dispatch({
          type: "getArtContent",
          params,
          successCallback
        });
      }
    },
    getData(){
      let successCallback=data=>{
         this.article = data;
        //console.log(data);
      };
      let params=this.link;
      this.$store.dispatch({
          type: "getHelp",
          params,
          successCallback
        });
    }
  }
};
</script>

<style lang='scss' scoped>
.article {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  overflow-y: auto;
}
.title-back{
      background-color: #e66466;
    color: #fff;
    border-bottom: 1px #ddd dotted;
    padding: .5rem;
    div{
      text-align: right;
      font-size: .2rem;
    }
}
.art_title {
  text-align: center;
  font-weight: 800;
  color: #fff;
  line-height: 30px;
  font-size: .5rem;
    margin-bottom: .3rem;
}
.art_content {
  text-align: left;
  padding: 20px;
  line-height: 28px;
  font-size: 16px;
}
</style>