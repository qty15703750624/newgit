<template>
     <div>
         <!-- 具名插槽 -->
         <!-- <div>我是一个子组件</div>
         <slot name="header"> 这是header</slot> -->

         <!-- 作用域插槽 -->
         <ul>
             <li>
                 <slot name="list" v-for="item of arr" :item="item"></slot>
             </li>
         </ul>
     </div>
</template>

<script>
export default {
    data(){
        return{
            arr:['web大前端',,'ul设计','互联网营销','java开发','python开发','大数据','云计算','unity','软件测试']
        }
    }
}
</script>

<style>

</style>