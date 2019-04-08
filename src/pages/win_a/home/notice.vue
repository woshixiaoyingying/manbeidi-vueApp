<template>
    <div class="notice-news">
        <div class="notice-left" ref='noticeLeft'>
            <h3>行业资讯</h3>
        </div>
        <van-swipe  vertical class="notice-right" :show-indicators='false'>
            <van-swipe-item v-for="(notice ,index) in cate_name" :key="index" class="notice-right-item">
                <i></i>
                <p>{{notice.title}}</p>
            </van-swipe-item>
        </van-swipe>
        <!-- <div class="img">
            <img class="lazy" alt="" src="static/images/laba.png"></div>
        <p class="notic-text">{{cate_name.content}}</p>
        <router-link :to="{path:'//article/list',query:{category_id:notice_category_id}}" class="notice-more">
            <img class="lazy" alt="" src="static/images/more.png">
        </router-link> -->
    </div>
</template>

<script>
    export default {
        name: 'HomeNotice',
        props:["cate_name","notice_category_id"],
        
        created(){
           
        },
        mounted(){
                 console.log(this.cate_name) ;
        }
    }
</script>

<style scoped lang="scss">
    .notice-news {
        padding: .2rem .3rem;
        font-size: 12px;
        position: absolute;
        color: #7f8699;
        // background-color: #fff;
        display: flex;
        align-items: center;
        height: 1.5rem;
        top: 4.7rem;
        z-index: 10;
        .notice-left{
            font-size: 0.3rem;
            width: 20%;
            padding: .2rem 0.3rem;
            text-align: center;
            background-color: #1cca5a;
            color: #fff;
            border-top-left-radius: 0.3rem;
            border-bottom-left-radius: 0.3rem;
            h3{
                font-weight: 600;
                line-height: 0.4rem;
            }
        }
        .notice-right{
            width: 80%;
            height: 1.2rem;
            background-color: #fff;
            border-top-right-radius: .3rem;
            border-bottom-right-radius: .3rem;
            .notice-right-item{
                display: flex;
                justify-content: center;
                background-image: url('./images/new-list-bg.png');
                padding-left: .2rem;
                background-repeat: no-repeat;
                background-position-y: center;
                line-height: 1.2rem;
                padding-right: .5rem;
                margin-left: 10px;
                color: #000;
                p{
                    width: 97%;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
            }
        }
    }
    
    
    .notice-news:before {
       // content: ' ';
        position: absolute;
        pointer-events: none;
        box-sizing: border-box;
        left: 25px;
        right:25px;
        top: 0;
        border-bottom: 1px solid #ebedf0;
    }
    
    .notice-news .img img {
        width: .6rem;
        display: inline-block;
        padding-right: 10px;
    }
    .notice-news a {
        display:block;
        position: absolute;
        right: 0;
        bottom: 30%;
        img {
            width: 50%;
        }
    }   
    .notic-text {
        font-size:12px;
        flex: 2;
    }
</style>