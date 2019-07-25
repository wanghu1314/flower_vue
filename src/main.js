import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
//var 变量=requre("路径")
import axios from './axios'

import qs from 'qs'
Vue.prototype.$qs = qs
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
Vue.component("my-footer",MyFooter);
Vue.component("my-header",MyHeader);

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import'./font/iconfont.css'
Vue.use(VueAwesomeSwiper)

import carousel from './components/carousel.vue'
Vue.component("my-carousel",carousel);

import carouselSwiper from './components/carouselSwiper.vue'
Vue.component("my-carouselSwiper",carouselSwiper);


//将axios对象强行添加到Vue类型的原型对象中
// Vue.prototype.axios=axios;
//结果: 
//在所有组件中都可以用this.axios.get()发送请求。
//6：引入vuex
import Vuex from "vuex"
//7: 注册vuex组件
Vue.use(Vuex)
//8: 创建vuex实例 store 
var store = new Vuex.Store({
  //vuex中全局共享数据
  state:{cartCount:0},
  //修改vuex中全局共享数据
  mutations:{
    //购物车数量加 1
    increment(state){
      state.cartCount++;
    },
    clear(state){
      state.cartCount = 0;
    },
    //购物车数量增加指定值 5
    updateCount(state,c){
       state.cartCount+=c;
    }
  },
  //获取vuex中全局共享数据 
  getters:{
   getCartCount:function(state){
    return state.cartCount;
   }
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
