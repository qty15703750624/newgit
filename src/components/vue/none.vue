<template>
  <div>
      <!-- split()的使用 -->
      <p>{{name}}</p>
      <home-index></home-index>
      <el-button @click="btn">点击打印</el-button>
      <p v-for="item in arr" :key="item">{{item}}</p>
      <!-- <p>{{list}}</p> -->
       <!-- <home-index></home-index> -->
      
      <!-- v-model -->
      <el-input v-model="nan"></el-input>
      <!-- instanceof 判断 一个变量是否为数组 -->
      <!-- <home-index></home-index> -->
  </div>
</template>

<script>
import HomeIndex from '../../componts/hndex'
//   var aa=[],
export default {
    components:{
    HomeIndex
    },
    data(){
        return {
            name:'我喜欢爬山',
            arr:['我喜欢爬山01','我喜欢游泳','我喜欢睡觉'],
            lit:['我','喜','换','爬','山'],
            list:[],
            ll:{},
            nan:'hellw'
        }
    },
    methods:{
        btn(){
           if(this.list==Object){
                     console.log('数组');
           }else{
               console.log('对象');
           }
            // console.log(this.lit.join(''));
            //   console.log(this.arr.reverse().join(''))
            // console.log(this.name.split(''));
            // console.log(this.name.split('').reverse());
            // console.log(this.name.split('').reverse().join(''));
        }
    }

}
</script>

<style>

</style>