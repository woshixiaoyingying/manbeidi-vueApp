<template>
    <div class="home-news">
        <div class="ad-pic" v-for="(pic , key) in adpic" :key="key">
            <img :src="pic.cacheImg" alt="">
        </div>
        <div class="news-show">
            <img src="./images/new-title.png" alt="">
        </div>
        <div class="news-list">
            <div class="news-outbox">
                <ul>
                    <li class="news-box" v-for="(item,index) in news" :key='index' >
                        <div class="news-time">
                            {{item.date}}
                            <span>{{item.year}}</span>
                        </div>
                        <div class="news-info">
                            <div>
                                <h3>
                                    <router-link :to="{path:'//article/detail', query:{id:item.id}}" >
                                    <p class="new-title">{{item.title}}</p> 
                                    </router-link>
                                </h3>
                                <p class="new-content" v-html="item.content"></p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'HomeNews',
    props:['news','adpic'],
    mounted(){
       // console.log(this.news);
       // console.log(this.adpic)
    }
}
</script>
<style lang="scss" scoped>
.home-news{
    position: relative;
    top:1.1rem;
    margin-bottom: 20px;
}
.ad-pic img{
    width: 100%;
    height: auto;
}
    .news-show{
        text-align: center;
        padding: 15px 0 20px;
        img{
            width: 30%;
        }
    }
    .news-box{
            padding: 20px 10px;
        background: #fff;
        margin-bottom: 15px;
        display: flex;
    }
    .news-time{
        width: 25%;
        line-height: .4rem;
        font-size: 17px;
        text-align: center;
    }
    .news-info{
        width: 75%;
        div{
            border-left: 1px #cdcdcd solid;
            padding-left: 8%;
            .new-title{
                overflow: hidden;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                color: #000;
                font-size: .3rem;
            }
            .new-content{
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                color: #afafaf;
                font-size: .2rem;
                margin-top: 5px;
                line-height: .4rem;
            }
        }
    }
</style>
