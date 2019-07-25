import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import Details from './views/Details'
import Product from './views/Product'
import carouselSwiper from './components/carouselSwiper.vue'
import carousel from './components/carousel.vue'
import Login from './views/Login'
import Flist from './views/Flist'
import NewList from './views/NewList'
import Jia from './views/Jia'
import Cart from './views/Cart'
import Find from './views/Find'






Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:Index 
    },
    {
      path: '/index',
      component:Index 
    },

    {
      path: '/details',
      component:Details,
      props:true //将参数自动交给同名的props属性
    },
    {
      path: '/product',
      component:Product ,
      props:true 
    },
    {
      path: '/cindex',
      component:carouselSwiper  ,
     
    },
    {
      path: '/carousel',
      component:carousel,
      
    },
    {
      path: '/login',
      component:Login,
      
    },
    {
      path: '/newlist',
      component:NewList,
      
    },
    {
      path: '/flist',
      component:Flist,
      
    },
    {
      path: '/jia',
      component:Jia,
      
    },
    {
      path: '/cart',
      component:Cart,
      
    },
    {
      path: '/find',
      component:Find,
      
    },
   
  ]
})
