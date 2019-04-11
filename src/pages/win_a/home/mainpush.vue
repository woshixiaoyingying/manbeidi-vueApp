<template>
    <div class="main">
        <div class="main-push" v-for='(main,index) in main_push' :key='index'>
            <img class="main-img" :src="main.cacheImg" alt="">
            <div class="main-right">
                <div v-html="main.content"></div>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    name:'MainPush',
    props:["main_push"],
    methods:{

    },
    mounted(){
       // console.log(this.main_push);
    }
}
</script>
<style lang="scss" scoped>
    .main{
        position: relative;
        top:.7rem;
    }
    .main-push{
        height: 3.5rem;
        display: flex;
        img{
                width: 46%;
            height: auto;
            position: absolute;
        }
        .main-right{
            background-image: url('./images/main.png');
            background-size: 100%;
            background-repeat: no-repeat;
            position: absolute;
            height: 100%;
            z-index: 5;
            padding-left: 50%;
            padding-top: .8rem;
            div{
                color: #fff;
                line-height: .3rem;
                font-size: .2rem;
            }
        }
    }

</style>

