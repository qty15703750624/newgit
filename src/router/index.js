import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index'
import Dome from '../components/dome/dome'
import VueIndex from '../components/vue/VueIndex'
import None from '../components/vue/none'
// import HomeIndex from "../componts/hndex"
import Parent from '../components/vue/parent'
import Poho from '../components/vue/poho'
import Ds from '../components/vue/ds'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:VueIndex
    },
    {
      path:'/index',
      component:Index
    },{
      path:'/dome',
      component:Dome
    },{
      path:'/none',
      component:None
    },{
      path:'/parent',
      component:Parent
    },{
      path:'/poho',
      component:Poho
    },{
      path:'/ds',
      component:Ds
    }
  
  ]
})
