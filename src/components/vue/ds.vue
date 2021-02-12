<template>
  <div class="ap">
           <el-form label-width="60px" :model="form">
               <el-row>
                   <el-col :span="15">
                       <el-form-item label="手机号">
                <el-input placeholder="请输入您的手机号" v-model="form.pohoq"></el-input>
               </el-form-item>
                   </el-col>
               </el-row>
              <el-row>
                  <el-col :span="15">
                       <el-form-item label="验证码">
                   <el-input placeholder="请输入验证码" v-model="form.yanzhen"></el-input>
               </el-form-item>
                  </el-col>
                  <el-col :span="6">
                      <el-form-item>
                 <span @click="yanzheng" style="cursor:pointer;">获取验证码</span>
                      </el-form-item>
                  </el-col>
                 
              </el-row>
               
               <el-button type="primary" class="logn">登录</el-button>
           </el-form>
  </div> 
</template>

<script>
export default {
         data(){
             return {
                 form:{
                     pohoq:null,
                     yanzhen:null
                 },
                 reg:/holle/,
                 str:'hello web, hello ui,hello java',
                 res1:/hello/,
                 res2:/hello/g,
             }
         },
         methods:{
             yanzheng(){
                //  console.log('123');
                // console.log(this.reg);
                console.log(this.str.replace(this.res1,'你好'));
                console.log(this.str.replace(this.res2,'你好'));
             }
         }
}
</script>

<style scoped>
.ap{
    width: 550px;
    height: 200px;
    border: 1px solid #ccc;
    margin: 0 auto;
    padding: 20px;
}
.logn{
    margin-left: 100px;
}

</style>