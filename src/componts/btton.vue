<template>
  <div>
      <el-button @click="nu++">我一共挑战了{{nu}}次</el-button>
  </div>
</template>

<script>
export default {
   data(){
       return{
        nu:0
       }
   }
}
</script>

<style>

</style>