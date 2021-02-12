<template>
    <div>
        <p class="app">欢迎来到vue页面，很高兴见到你</p>
        <span v-bind:title="message">鼠标悬停几秒钟查看此处动态绑定的提示信息！</span>
        <!-- <span>{{message}}</span> -->
        <!-- 鼠标悬停显示内容 -->
        <el-row>
            <el-col :span="6">
               <el-input value="按钮" :title="mytitle"></el-input>
            </el-col>
        </el-row>

        <!-- 条件渲染内容 -->
        <p v-if="seer">你现在看到我了</p>
        <el-button @click="btn">开关</el-button>
        
        <!-- v-for 循环数组  渲染数据 -->
          <ol >
              <li v-for="(item,index) in list" :key="index">{{item.text}}</li>
              <!-- <li>{{item.tex}}</li>
              <li>{{item.tt}}</li> -->
          </ol>
          <el-button @click="btn">点击添加</el-button>
<!-- 
          <ul v-for="item in list" :key="item">
              <li>{{item.text}}</li>
          </ul> -->

          <!-- v-on 的使用 点击事件-->
          <p>{{mase}}</p>
          <btton></btton>
          <el-button @click="btn">点击反转</el-button>

          <!-- computed计算属性 -->
          <p>mag:{{mag}}</p>
          <p>messh:{{messh}}</p>
          <p>jiage:{{jiage}}</p>
          <btton></btton>
          <p>kkk:{{kk}}</p>
          <p v-if="p1">我显示了</p>
          <p v-else>我有显示啊</p>
          <ul>
              <li v-for="item in list" :key="item.text">{{item.text}}</li>
          </ul>
          <ul>
              <li v-for="item in funt" :key="item">{{item}}</li>
          </ul>
          <btton></btton>
          <button @keyup.up="enter"> 上</button>
          <button @keyup.down="enters">下</button>
          <button @keyup.left="enterz"> 左</button>
          <button @keyup.right="entery"> 右</button>
          <!-- 下拉列表 -->
          <select v-model="input" @change="popo">
              <option value="上海">上海</option>
              <option value="北京">北京</option>
              <option value="成都">成都</option>
          </select>
          <!-- 单选框 -->
          <br>

          <input type="radio" value="one" v-model="picked">
          <label for="one">one</label>
          <br>
          <input type="radio" value="two" v-model="picked">
          <label for="two">two</label>
          <br>
          <span>picked:{{picked}}</span>
          <!-- 复选框 -->
          <br>
          <input type="checkbox" value="北京" v-model="chengsi" @change="popo">
          <label for="two">北京</label>
           <input type="checkbox" value="上海" v-model="chengsi" @change="popo">
          <label for="two">上海</label>
            <input type="checkbox" value="南昌" v-model="chengsi" @change="popo">
             <label for="two">南昌</label>
            <span>城市：{{chengsi}}</span>
    </div>
</template>

<script>
import Btton from '../../componts/btton'
    const aaa=[];
export default {
           aaa,
           components:{

               Btton
           },
    data(){
        return {
            chengsi:[],
            picked:null,
            input:'',
            p1:true,
            mag:'hello',
            message:'页面加载于'+new Date().toLocaleString(),
            mytitle:'这是自己定义的一个title',
            seer:true,
            list:[
                {text:'学习 java'},
                {text:'学1习 vue'},
                {text:'整个牛项目'}
            ],
            funt:{
                title:'how to in vue',
                 author:'jane',
                pibday:'2015-1-23'
            },
            mase:'我是一个河南人',
            tt:1,
            uuu:[1,2,5,0,12,92,13],
            aw:[1,2,3],
            bw:[4,5,6]
        }
    },
    methods:{
        popo(){
          console.log(this.chengsi);
        },
         enterz(){
            alert('左')
        },
         entery(){
            alert('有')
        },
        enters(){
            alert('下')
        },
        enter(){
            alert('上')
        },
        btn(){
            let yy=this.uuu.slice(2,4)
        //    let uu=this.aw.filter(function(er){
        //        console.log(er,'kk');
        //        return er-1==2
        //    })
           console.log(yy,'ll');
            // let gg=this.bw.concat(this.aw)
            // // console.log(gg.length);
            // for(let i=0;i<gg.length;i++){
            //     for(let j=i+1; j<gg.length;j++){
            //         if(gg[i]>gg[j]){
            //             let hh=gg[i]
            //                gg[i]=gg[j]
            //                   gg[j]=hh
                               

            //         }
            //     }
            // }
            // console.log(gg,'pp');
        //   console.log(this.bw.concat(this.aw));
            //   console.log(this.uuu.reverse());
            // this.list.push({text:'联合共赢'})
            // console.log(Math.random());
        //    if(this.p1==true){
        //        this.p1=false
        //    }else if(this.p1==false){
        //        this.p1=true
        //    }
            // if(this.mag.indexOf('p')==0){
            //     console.log('找到了');
            // }else{
            //     console.log('不存在');
            // }
            // console.log(this.tt++);
            // this.mag.split('').reverse().join('')
            // this.seer=false
            // this.list.push({text:'新项目'})
            // this.list.push({})
            // this.mase = this.mase.split('').reverse().join('')
            // console.log(typeof aaa);
            // console.log(aaa instanceof Array);
            // console.log(aaa instanceof String);
            // console.log(Array.isArray(aaa),'1234');
            // console.log(this.mag.split('').reverse().join(''),'pp');
        }
    },
    computed:{
        messh:function(){
            // 将一个字符串通过split()方法分割成数组字符串，在通过reverse()方法将数组字符串进行反向排列,最后通过join()方法将数组字符串拼成一个字符串

            return this.mag.split('').reverse().join('')
        },
        jiage(){
            return 100+10+1
        },
        kk(){
            return 123
        }
    },
    watch:{
        tt(tnew,told){
              console.log('新值：'+tnew,'旧值:'+told);
        }
    }
}
</script>

<style scoped> 
   .app{
       color:orange;
       font-size: 18px;
   }
</style>