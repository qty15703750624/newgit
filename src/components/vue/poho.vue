<template>
  <div> 
        <div class="add">
            <el-form label-width="100px" :ref="form" :model="form" :rules='rules' style="margin-top:50px">
                <el-form-item label="账号" prop="zhanghao">
                   <el-row>
                       <el-col :span="20">
                            <el-input></el-input>
                       </el-col>
                   </el-row>
                </el-form-item>
                <el-form-item label='密码' prop="pass">
                    <el-row>
                        <el-col :span="20">
                             <el-input></el-input>
                        </el-col>
                    </el-row>
         
                </el-form-item>
                <el-button type="primary" class="dl" @click="logi">登录</el-button>
                <el-button type="success" class="dle">注册</el-button>
               <div class="logo">
                   <router-link to="/ds">使用第三方进行登录</router-link>
               </div>
            </el-form>
        </div>
  </div>
</template>

<script>
export default {
           data(){
               return{
                   form:{
                       zhanghao:null,
                       pass:null,
                   },
                   rules:{
                      zhanghao:[{required: true, message: '请输入账号', trigger: 'blur' }],
                      pass:[{required: true, message: '请输入密码', trigger: 'blur' }]
                   }
               }
           },
           methods:{
               logi(){
                //    alert('点击成功')
               this.$refs[this.form].validate((vaild)=>{
                //    console.log(vaild);
                       if(vaild){
                            alert('验证成功')
                       }else{
                        //    console.log('验证失败');
                        // alert('验证失败'
                        return false
                       }
               })
               }
           }
}
</script>

<style scoped>
.add{
    width: 500px;
    height: 300px;
    border: 1px solid #ccc;
    margin: 0 auto;
}
.dl{
    /* text-align: center; */
    /* margin: 0 auto; */
    margin-left: 100px;
}
.dle{
     margin-left: 50px;
}
.logo{
    margin-top: 30px;
    margin-left:100px;
}
</style>