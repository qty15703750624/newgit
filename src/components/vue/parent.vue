<template>
  <div>
      <div  class="add">
           这里是父组件
           <el-button @click="bun">法拉利</el-button>
           <el-button  @click="ban">宝马</el-button>
          三国人物：{{name}}
          <!-- <slot name="header"></slot> -->
           <!-- <slot name="nn">我是一只猪</slot> -->
           
      </div>
     
      <chinder :date="date" @changer="changer($event)" @chan="chan($event)">
         <p> qqqqqqqqq</p>
          <div slot="header">我是子组件插槽页头123</div>
          <!-- <slot name="header"><slot> -->
      </chinder>
  </div>
</template>

<script>
 import Chinder from './chinder'
export default {
    components:{
        Chinder
    },
    data(){
         return{
             date:'法拉利',
             name:"刘备"
         }
    },
    methods:{
        bun(){
               this.date='法拉利'
        },
        ban(){
            this.date="宝马"
        },
        changer(date1){
            this.name=date1
        },
        chan(aa){
              this.name=aa
        }
    }

}
</script>

<style scoped>
.add{
    width: 500px;
    height: 200px;
    border: 1px solid black;
    margin: 0px auto;
    padding: 20px;
}

</style>