<template>
       <div>
             <el-dialog title="账号登录" :visible.sync="dolongVasbel1" width="30%" :before-close="handleClose">
          <el-form label-width="120px">
             <el-row>
                 <el-col :span="20">
                  <el-form-item label="账号">
                  <el-input></el-input>
              </el-form-item>
             </el-col>
             </el-row>
             <el-row>
                 <el-col :span="20">
           <el-form-item label="密码">
                  <el-input></el-input>
              </el-form-item>
             </el-col>
             </el-row>
        <el-row>
             <el-col :span="20">
             <el-form-item label="确认密码">
                  <el-input></el-input>
              </el-form-item>
         </el-col>
        </el-row>
              <el-form-item>
                  <el-button type="primary" @click="dolongVasbel">登录</el-button>
              </el-form-item>
          </el-form>
            <span slot="footer" class="dialog-footer">
    <!-- <el-button @click="dolongVasbel">取 消</el-button>
    <el-button type="primary" @click="dolongVasbel">确 定</el-button> -->
  </span>
         </el-dialog>
       </div>
</template>

<script>
export default {
    props:["dolongVasbel1"],
           data(){
               return{
                dolongVasbel1:'dolongVasbel1'
               }
           },
           methods:{
               dolongVasbel(){
                   this.$emit('change',false)
               },
                 handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
            this.$emit('change',false)
          })
          .catch(_ => {
              this.$emit('change',false)
          });
      }
           },
         
}
</script>

<style>

</style>