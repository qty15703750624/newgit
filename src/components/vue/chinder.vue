<template>
  <div class="ann">
      这里是子组件
      这是父亲送我我礼物{{date}}
      <el-button @click="buu">妲己</el-button>
      <el-button @click="guyu">关羽</el-button>
      <!-- 匿名插槽 -->
      <slot></slot>
      <!-- <slot name="header"></slot> -->
  </div>
</template>

<script>
export default {
       props:['date'],
       data(){
        return{
            name:'妲己',
            nme:'关羽'
        }   
       },
      methods:{
           buu(){
           this.$emit('changer',this.name)
       },
       guyu(){
           this.$emit('chan',this.nme)
       }
      }
}
</script>

<style scoped>
.ann{
       width: 500px;
    height: 200px;
    border: 1px solid black;
    margin: 20px auto;
    padding: 20px;
}

</style>