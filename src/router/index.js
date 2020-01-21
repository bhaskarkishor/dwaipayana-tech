import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path:'/contactus',
    name:'contactus',
    component:function(){
      return import('../views/contactus.vue')
    }
  },
  {
    path:'/career',
    name:'career',
    component:function(){
      return import('../views/career.vue')
    }
  },
  {
    path:'/clients',
    name:'clients',
    component:function(){
      return import('../views/clients.vue')
    }
  },
  {
    path:'/services',
    name:'services',
    component:function(){
      return import('../views/services.vue')
    }
  },
  {
    path:'/portfolio',
    name:'portfolio',
    component:function(){
      return import('../views/portfolio.vue')
    }
  },
  {
    path:'/mobile',
    name:'mobile',
    component:function(){
      return import('../components/portfolio/mobile.vue')
    }
  },
  {
    path:'/website',
    name:'websites',
    component:function(){
      return import('../components/portfolio/websites.vue')
    }
  },
  {
    path:'/hardware',
    name:'hardware',
    component:function(){
      return import('../components/portfolio/hardwares.vue')
    }
  },
  {
    path:'/software',
    name:'softwares',
    component:function(){
      return import('../components/portfolio/softwares.vue')
    }
  },
  {
    path:'*',
    name:'error',
    component:function(){
      return import('../views/error.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
