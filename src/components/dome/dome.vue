<template>
  <div>
         <el-button type="text" @click="dolongVasbe"  >点击打开</el-button>
         <!-- <v-optins :dolongVasbel1="dolongVasbel" @change="change($event)" ></v-optins>  -->

          <!-- 走马灯 轮博图 -->
          <!-- <el-carousel :interval="4000" type="card" height="300px">
    <el-carousel-item v-for="item in image" :key="item"> -->
      <!-- <h3 class="medium">{{ item }}</h3> -->
      <!-- <img :src=item alt="">
    </el-carousel-item>
  </el-carousel> -->
  <!-- 轮博图 -->
   <!-- <el-carousel indicator-position="outside" style="width:50%; margin:0 auto;">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
  <el-image
      style="width: 100px; height: 100px"
      :src="url"
      :fit="fit"></el-image> -->
      <!-- 图片 -->
      <!-- <el-image style="width:200px;height:200px;" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=225148692,2289627145&fm=26&gp=0.jpg" :fit="fit"></el-image> -->
  
     <!-- 回到顶部 -->
     <!-- <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop> -->
      <!-- <el-backtop  visibility-height="" target=".page-component__scroll .el-scrollbar__wrap" :bottom="100"> -->
    <!-- <div
      style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }"
    >
      UP
    </div>
  </el-backtop> -->

   <v-chilld >
     <!-- 具名插槽 -->
     <!-- <div slot="header"> 
       <div>我是子组件头部1</div>
       <div>我是子组件头部2</div>
     </div> -->
     <!-- <template v-slot:list="props">
         <li>{{props:item}}</li>
     </template> -->
   </v-chilld>
   <!-- 去掉数组中的重复项 -->
        <el-button @click="buu">打印数组</el-button>
  </div>
</template>

<script> 
import vChilld from './chilld.vue'
import vOptins from './optins.vue'
export default {
   
  data() {
    return {
      arry:[1,2,1,3,5,7,7,2,3,5,7,4,6],
       fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
       str:['hello','node','element','node','hello','blue','red'],
        str1:[],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      dolongVasbel:false,
      image:["https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2743268655,1778161208&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=225148692,2289627145&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1657471424,2319316184&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=225148692,2289627145&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2886252100,614784704&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=225148692,2289627145&fm=26&gp=0.jpg"
       ]
          // total:"总数",
          // rows:{
          //     stuld:'学号',
          //     stuName:'姓名',
          //     sax:'姓名',
          //     age:"年龄"
          // }
    }
  },
  

 
  components:{
      vOptins ,
      vChilld,
  },
  created(){
       
  },
  methods:{
      //  <!-- 去掉数组中的重复项 -->
       buu(){
        //  const aa=12
        //        this.aa+=1
         let aa=12
          aa=14
      console.log(aa,'ll');
        //  使用splice方法去除重复项
        //  console.log('1');
        //  for(let i=0; i<this.arry.length; i++){
        //    console.log('2');
        //    for(let j=i+1; j<this.arry.length; j++){
        //      console.log('3');
        //      if(this.arry[i]==this.arry[j]){
        //        console.log('4');
        //        console.log(this.arry[j],'555');
        //        console.log('5');
        //        console.log(j,'kkk');
        //         this.arry.splice(j,1)
        //         j--; 
        //         console.log(j,'pp');
        //      }
        //    }
        //  }
// console.log( '打印成功');
  // console.log(this.arry);


    // 使用indexOf()方法去除重复项
      // for(let i=0; i<this.arry.length; i++){
      //   if(this.str1.indexOf(this.arry[i])==-1){
      //       this.str1.push(this.arry[i])
      //   }


      // }
      // console.log(this.str1,'2133');


      //  localStorage 的使用
      if(!window.localStorage){
            alert("浏览器支持localstorage");
            return false;
        }else{
            //主逻辑业务
            // console.log('123');
            //  var storage=window.localStorage;
            //写入a字段
            // storage["a"]=1;
            //写入b字段
            // storage['b']=2;
            //写入c字段
            // storage.setItem("c",3);
            // console.log(typeof storage["a"]);
            // console.log(typeof storage["b"]);
            // console.log(typeof storage["c"]);

        //  sessionStorage.setItems('5','5')
        }
      
       },
      dolongVasbe(){      
        this.dolongVasbel=true
          console.log(this.dolongVasbel);
      },
      change(data){

          this.dolongVasbel=data
            console.log(this.dolongVasbel);
        console.log("123");
      }
  }
};
</script>

<style scoped>
/* .el-carousel__item h3 {
    color: #475669;
    font-size: 25px;
    opacity: 0.75;
    text-align: center;
    line-height: 300px;
    margin: 0;
    color: orange;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

   img{
     width:100%;
     height:100% ;
   } */

 .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
    text-align: center;
    color: yellow;
    /* line-height: ; */
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  
</style>