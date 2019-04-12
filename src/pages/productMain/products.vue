<template>
    <div class="products">
        <ul>
            <li v-for="(item,index) in data" :key='index'>
                <img :src="item.cacheImg" alt="">
                <p>{{item.name}}</p>
                <p>{{item.sell_price}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default{
    name:'products',
    props:['data'],
    created(){
        console.log(this.data);
    }
}
</script>
<style lang="scss" scoped> 
.products{
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    overflow-y: auto;
    ul{
        text-align:center;
        li{
            display:inline-block;
            width:48%;
            padding:.2rem;
            img{
                width:100%;
            }
            p{
                font-weight:600;
                font-size:.3rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                width:100%;
            }
        }
    } 
}
</style>