<template>
    <div class="home-rec">
        <div class="rec-show">
            <img src="./images/Recommend-title.png" alt="">
        </div>
        <div class="rec-outbox">
            <ul class="rec-list">
                <li v-for="(item,index) in rec" :key='index'>
                    <div class="rec-list-box">
                        <div class="rec-box">
                            <div class="rec-pic" @click="$router.push(`///product/${item.id}`)">
                                <img :src="item.cacheImg" alt="" >
                            </div>
                            <div class="rec-info">
                                <p>{{item.name}}</p>
                                <div>{{item.content}}</div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        
    </div>
</template>
<script>
export default {
    name:'HomeRec',
    props:["rec"],
    methods:{

    },
    mounted(){
       // console.log(this.rec);
    }
}
</script>
<style lang="scss" scoped>
    .home-rec{
        position: relative;
        top: 1rem;
    }
    .rec-show{
        text-align: center;
        margin-bottom: 10px;
        img{
            width:30%;
        }
    }
    .rec-outbox{
        padding: 0px 15px;
        display: inline-block;
        margin-bottom: 1rem;
    }
    .rec-list{
        li{
            width: 100%;
            float: left;
            margin: 0 auto 0px;
            background: #fff;
            .rec-list-box{
                padding: 15px 15px 10px;
                display: block;
                .rec-box{
                    border: 4px #30b352 solid;
                     margin-bottom: -40px;
                }
            }
        }
    }
    .rec-list li:nth-child(1){
        margin: 0 auto 50px;
    }
    .rec-box .rec-pic{
        img{
            width: 100%;
            height: auto;
            margin: 0 auto;
            display: block;
        }
    }
    .rec-info{
        margin: 0 auto;
        padding: 10px 10px;
        position: relative;
        background: #30b352;
        p{
            font-weight: 600;
            font-size: .3rem;
            margin: 0;
            text-align: center;
            color: #fff;
            background: url('./images/Recommend-title-bg.png') no-repeat center center;
        }
        div{
            font-weight: normal;
            font-size: .2rem;
            margin-bottom: 10px;
            color: #fff;
            padding: 5px 0 0;
           line-height: 24px;
        }
    }
</style>
