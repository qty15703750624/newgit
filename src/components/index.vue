<template>
  <div>
     <div class="app">
     <el-form  ref="form"  :model="form" :rules="rules" label-width="120px" >
       <el-form-item label="活动名称"  prop="name">
            <el-input v-model="form.name"></el-input>
       </el-form-item>
       <el-form-item  label="活动区域" prop="quyu">
         <el-select v-model="form.quyu">
           <el-option label="活动区域一" value="活动区域一"></el-option>
           <el-option label="活动区域二" value="活动区域二"></el-option>
         </el-select>
       </el-form-item>
       <el-form-item label="活动时间" required>
         <el-col :span="11">
           <el-form-item prop="date">
              <el-date-picker
      v-model="form.date"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
           </el-form-item>
         </el-col>
         <el-col :span="2" class="col">-</el-col>
     <el-col :span="11">
       <el-form-item prop="time">
         <el-time-picker
    v-model="form.time"
    :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
    placeholder="任意时间点">
  </el-time-picker>
       </el-form-item>
     </el-col>
       </el-form-item>
       <el-form-item label="即时配送">
        <el-switch v-model="form.peiso"> </el-switch>
       </el-form-item>
        <el-form-item label="活动性质" prop="xizhi">
          <el-checkbox-group v-model="form.xizhi">
            <el-checkbox label="美食/餐厅线上活动" style="width:150px"></el-checkbox>
            <el-checkbox label="地推活动" style="width:150px"></el-checkbox>
            <el-checkbox label="线下主题活动" style="width:150px"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" style="width:150px"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源" prop="radio">
          <el-radio-group v-model="form.radio">
            <el-radio label="线上品牌赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式" prop="text">
                <el-input type="textarea" v-model="form.text"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('form')">立即创建</el-button>
          <el-button type="info" @click="resetForm('form')">取消</el-button>
        </el-form-item>
     </el-form>
  
   </div>
      <!-- 表格 -->
     <div class="talble">
       <el-table :data="tanelData" style="100%">
       <el-table-column prop="name" label="姓名" width="100px">
          <template slot-scope="scope">
        <el-popover trigger="hover" placement="left">
          <p>姓名: {{ scope.row.name }}</p>
          <p>爱好: {{ scope.row.happy }}</p>
          <div slot="reference" >
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
       </el-table-column>
       <el-table-column prop="age" label="年龄" width="100"></el-table-column>
       <el-table-column prop="happy" label="兴趣爱好 " width="100"></el-table-column>
       <el-table-column  label="操作" width="400">
        <template slot-scope="scope">
        <!-- <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button> -->
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          <el-button 
          size="mini" type="primary" @click="xinzeng">新增</el-button>
          <el-button     size="mini" type="success" @click="xiug(scope.$index, scope.row)">修改</el-button>
          <el-button     size="mini" type="warning" @click="chk(scope.$index, scope.row)">查看</el-button>
      </template>
       </el-table-column>
     </el-table>
     </div>
     <el-dialog
  :title="title"
  :visible.sync="dialogVisible"
  width="30%"
 >
  <el-form ref="tabelTlist" :model="tabelTlist" :rules="rules" label-width="70px">
    <el-form-item label="姓名">
      <el-input v-model="tabelTlist.name"></el-input>
    </el-form-item>
    <el-form-item label="年龄">
      <el-input v-model="tabelTlist.age"></el-input>
    </el-form-item>
    <el-form-item label="兴趣爱好">
      <el-input v-model="tabelTlist.happy"></el-input>
    </el-form-item>
  </el-form>
  <span slot="footer" class="dialog-footer">
     <el-button type="primary" @click="dialogVisible1">确 定</el-button>
    <el-button @click="dialogVisible = false">取 消</el-button>
   
  </span>
</el-dialog>
        <div class="talble">
          <el-table :data="tableData" border row-key="id"  lazy
    :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
            <el-table-column label="日期" prop="date"></el-table-column>
            <el-table-column label="姓名" prop='name'></el-table-column>
            <el-table-column label="地址" prop="address"></el-table-column>
          </el-table>
        </div>
         <!-- 标签 -->
         
         <el-tag>标签一</el-tag>
         <el-tag type="success">标签二</el-tag>
         <el-tag type="info">标签二</el-tag>
         <el-tag type="warning">标签三</el-tag>
         <el-tag type="danger">标签四</el-tag>
         <br>
         <el-tag v-for="(item,index) in tagArr" :key="item" @close="handleClose(index)"  closable  :disable-transitions="false">{{item}}</el-tag>
         <el-input
  class="input-new-tag"
  v-if="inputVisible"
  v-model="inputValue"
  ref="saveTagInput"
  size="small"
  @keyup.enter.native="handleInputConfirm"
  @blur="handleInputConfirm"
>
</el-input>
<el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
<br>
<!-- 进度条 -->
<div style="width:300px">
  <el-progress :percentage="60" ></el-progress>
  <el-progress :percentage="80" :format="format" :text-inside="true" :stroke-width="26"></el-progress>
  <el-progress :percentage="80"   :text-inside="true" :stroke-width="20" status="success"></el-progress>
  <el-progress :percentage="100" status="warning"></el-progress>
  <el-progress :percentage="100" status="exception"></el-progress>
</div>
<!-- 环形进度条 -->
  <div style="width:100px;margin-top:100px">
    <el-progress type="dashboard" :percentage="percentage" :color="colors"></el-progress>
    <el-button icon="el-icon-minus" @click="decrease"></el-button>
    <el-button icon="el-icon-plus" @click="increase"></el-button>
  </div>
  <!-- 树形控件 -->
   <div style="width:200px;margin-top:100px">
      <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
  </div>

  <!-- 分页 -->
    <el-pagination
    layout="prev, pager, next"
    :total="100"
    :pager-count="9">
  </el-pagination>
  <el-pagination
  background
  layout="prev, pager, next"
   :pager-count="9"
  :total="1000">
</el-pagination>
<!-- 标记 -->
   <el-badge :value="shu" class="item" type="primary" :max="percentage">
     <el-button size="small">评论</el-button>
   </el-badge>
   <el-button @click="bttn">评论按钮</el-button>
     <!-- 加载 -->
     <el-button type="primary" @click="open1"  v-loading.fullscreen.lock="fullscreenLoading">指令方式</el-button>
     <el-button type="primary" @click="open2" >服务方式</el-button>
     <!-- 消息提示框 -->
     <br>
     <el-button @click="open3" :plain="true">成功</el-button>
     <el-button @click="open4" :plain="true">警告</el-button>
     <el-button @click="open5" :plain="true">错误</el-button>
     <el-button @click="open6" :plain="true">消息</el-button>
     <!-- 弹窗 -->
      <el-button type="text" @click="open7">点击打开 Message Box</el-button>

       <!-- c侧边栏导航 -->
       <el-row>
         <el-col :span="10">
           <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="1">
        <template>
          <span>导航二</span>
        </template>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
         </el-col>
       </el-row>
       <!-- 选项卡 -->
       <el-tabs type="card" v-model="activeName" @tab-click="handleClick"  :tab-position="tabPosition" >
         <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
         <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
         <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
         <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
         <el-tab-pane label="账单流水">1</el-tab-pane>
         <el-tab-pane label="时间管理">2</el-tab-pane>
       </el-tabs>
        <el-tabs :tab-position="tabPosition">
    <el-tab-pane label="用户管理">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
  </el-tabs>
  <!-- 面包屑 -->
   <el-breadcrumb  separator-class="el-icon-arrow-right">
   <el-breadcrumb-item :to="{path:'dome'}">首页</el-breadcrumb-item>
   <el-breadcrumb-item> <a href="/">活动管理</a> </el-breadcrumb-item>
  <el-breadcrumb-item> <a href="/">活动列表</a> </el-breadcrumb-item>
   <el-breadcrumb-item>活动列表</el-breadcrumb-item>
   <el-breadcrumb-item>活动详情</el-breadcrumb-item>
   </el-breadcrumb>
   <!-- 步骤条 -->
   <el-steps :active="active" finish-status="success">
     <el-step title="步骤一"></el-step>
     <el-step title="步骤二"></el-step>
     <el-step title="步骤三"></el-step>
   </el-steps>
   <el-button style="margin-top:20px" @click="next">下一步</el-button>
   <!-- 回到顶部 -->
         <el-backtop  target=".page-component__scroll .el-scrollbar__wrap" :bottom="100">
           <div
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
  </el-backtop>

   <!-- 抽屉 -->

   <div style="margin-top:100px">
     <el-radio-group v-model="direction">
     <el-radio label="ltr">从左往右开</el-radio>
     <el-radio label="rtl">从右向左开</el-radio>
     <el-radio label="ttb">从上往下开</el-radio>
     <el-radio label="btt">从下往上开</el-radio>
   </el-radio-group>
   <el-button type="primary" @click="drawer=true">点我打开</el-button>
   <el-drawer title="我是标题"   :visible.sync="drawer" :direction="direction"
  :before-close="handleClose">
     <span>我来了</span>
   </el-drawer>
   </div>
  </div>
</template>

<script>
export default {
        data(){
         return{
           direction:'ltr',
           drawer:false,
           tabPosition:"left",
           activeName:'second',
           fullscreenLoading:false,
            data: [{
          label: '一层1',
          children: [{
            label: '二层 1-1',
            children: [{
              label: '三层 1-1-1'
            }]
          }]
        }, {
          label: '一层 2',
          children: [{
            label: '二层 2-1',
            children: [{
              label: '三层 2-1-1'
            }]
          }, {
            label: '二层 2-2',
            children: [{
              label: '三层 2-2-1'
            }]
          }]
        }, {
          label: '一层 3',
          children: [{
            label: '二层 3-1',
            children: [{
              label: '三层 3-1-1'
            }]
          }, {
            label: '二层 3-2',
            children: [{
              label: '三层 3-2-1'
            }]
          }]
        }],
        shu:10,
        defaultProps: {
          children: 'children',
          label: 'label'
        },
           percentage:99,
           colors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ],
           inputValue:null,
        inputVisible:false,
           tagArr:["标签一","标签二","标签三","标签四","标签五"],
            tableData: [{
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          children:[{
            id:29,
            date:'2016-05-02',
            name:'张三',
            address:'上海市普陀区金沙江路1518弄',

          },{
            id:30,
            date:'2016-05-02',
            name:'李四',
            address:'河南平顶山郏县',

          }]
        }, {
          id: 2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          children: [{
              id: 31,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              id: 32,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
          }]
        }, {
          id: 4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
           Index:null,
           title:'新增数据',
           dialogVisible:false,
           form:{
             name:null,
             quyu:null,
             date:null,
            time:null,
            xizhi:[],
            text:null,
            radio:null,
            peiso:null,
           },
         rules:{
           name:[{required:'true' ,message:'请输入活动名称',trigger:"blur"}],
           quyu:[{required:'true',message:'请选择活动区域',trigger:'change'}],
          date:[{required:'true',message:'请选择活动日期',trigger:'blur'}],
          time:[{required:'true',message:'请选择活动时间',trigger:'blur'}],
          xizhi:[{required:'true',message:'请选择活动性质',trigger:'change'}],
        radio:[{required:'true',message:'请选择特殊资源',trigger:'change'}],
        text:[{required:'true',message:'请输入活动形式',trigger:'blur'}]
         },
         tabelTlist:{
           name:null,
           age:null,
           happy:null
         },
         tanelData:[{
           name:'邓紫棋',
           age:'20',
           happy:'游泳',
           id:0
         },{
           name:'赵丽颖',
           age:'30',
           happy:'旅游',
           id:1
         }],
         active:0,
         }
        },
        methods:{
          handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
          next(){ 
            if(this.active++ >2){
              this.active=0
            }

          },
             handleClick(tab, event) {
        console.log(tab, event);
        console.log(this.activeName);
      },
      //     handleClose(key, keyPath) {
      //   console.log(key, keyPath);
      // },
          handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
          open7(){
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
          },
           open6(){
            this.$message("这是一条消息")
          },
           open5(){
            this.$message.error("这是一条错误消息")
            
          },
          open4(){
            this.$message({
              message:'这是一条警告消息',
              type:'warning',
            })
          },
          open3(){
            this.$message({
              message:'好消息，好消息啊',
              type:"success",
            })
          },
          open2(){
           const loading = this.$loading({
          lock: true,
          text: '拼命加载中',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
        }, 2000);
      },
          open1(){
            this.fullscreenLoading=true
            setTimeout(()=>{
              this.fullscreenLoading=false
            },2000)
          },
          bttn(){
                this. shu+=1
          },
           handleNodeClick(data) {
        console.log(data);
      },
          // 增加
          increase(){
            this.percentage+=10
            if(this.percentage>=100){
                 this.percentage=100
            }
          },
          // 减少
          decrease(){
              this.percentage-=10
               if(this.percentage<=0){
                 this.percentage=0
            }
          },
           format(percentage) {
        return percentage === 100 ? '满' : `${percentage}%`;
      },
          handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.tagArr.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
    
    },
          showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },
          // handleClose(tag){
          //   // console.log(tag);
          //   this.tagArr.splice(tag,1)
          // },
        submitForm(formName) {
          console.log('1');
        this.$refs[formName].validate((valid) => {
          console.log('2');
          console.log(valid);
          if (valid) {
            console.log('3');
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(form){
        this.$refs[form].resetFields()
      },
      // splice 删除数组中指定的数据
      handleDelete(index){
          this.tanelData.splice(index,1)
      },
      // 在数组的头部添加一条数据
      xinzeng(){
        this.title="新增数据"
        this.dialogVisible=true
            this.tabelTlist={}
        // this.tanelData.push({})
      },
      dialogVisible1(){
 
        if(this.title=='新增数据'){
                 this.tanelData.push(this.tabelTlist)
            this.$message({
              type: 'success',
              message: '新增成功'
            });
        this.dialogVisible=false
        this.tabelTlist={}
        }else{
          //  this.xiug()
           this.xiu()
        }
        
      },
      xiug(index){
      this.title='修改数据'
      
       this.dialogVisible=true
        this.tabelTlist=this.tanelData[index]
           this.Index=index
      },
      xiu(){
       this.tanelData[this.Index]  = this.tabelTlist
          this.$message({
              type: 'success',
              message: '修改成功'
            });
              this.dialogVisible=false
              this.tabelTlist={}
      },
      chk(index){
        this.dialogVisible=true
          this.title="查看数据"
            this.tabelTlist=this.tanelData[index]
             
      }
        }
         
}
</script>

<style scoped>
.app{
  width: 600px;
  margin: 0 auto;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding:20px;
}
.col{
  text-align: center;
}
.talble{
  width: 700px;
   box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
   margin: 50px auto;
   text-align: center;
}
.input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
  .item{
    margin-top: 10px;
    margin-right: 30px;
  }
</style>