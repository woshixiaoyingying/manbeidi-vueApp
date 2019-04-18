<template>
    <div class="products">
        <ul  v-for="(dataArry,i) in dealData" :key='i'>
            <!-- {{dealData}} -->
            <li v-for="(item,index) in dataArry" :key='index' @click="$router.push(`///product/${item.id}`)">
                <img :src="item.cacheImg" alt="">
                <p>{{item.name}}</p>
                <p>￥{{item.sell_price}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default{
    name:'products',
    props:['productData'],
    computed:{
        dealData(){
           let result=[];
            for(var i=0;i<this.productData.length;i+=2){
                result.push(this.productData.slice(i,i+2));
            }
            return result;
        }
    },
    // data(){
    //     return{
    //         //dealData:[]
    //     }
    // },
    created(){
        //console.log(this.data);

    },
    methods:{
        
    }
}    
</script>
<style lang="scss" scoped> 
.products{
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    overflow-y: auto;
    margin: 10px 0;
    ul{
        border-top: 1px solid #efefef;
        li{
            display:inline-block;
            width:50%;
            padding:.2rem;
            border-right: 1px solid #efefef;
            img{
                width:100%;
            }
            p{
                font-weight:600;
                font-size:.3rem;
                line-height: .3rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                width:100%;
                margin-top: 5px;
            }
        }
    } 
}
</style>