<template>
  <swiper class="swiper" :options="swiperOption"  ref="mySwiper"  v-if="list.length">
    <!-- slides -->
    <swiper-slide id="list"  v-for="(elem,i) of list" :key="i"><a :href="elem.href"><img :src="elem.img" alt="elem.title"></a></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination " slot="pagination"></div>
    <div class="swiper-button-prev btn-banner" slot="button-prev"></div>
    <div class="swiper-button-next btn-banner" slot="button-next"></div>
  </swiper>
</template>
<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'

  export default {
    name: 'carrousel',
    data() {
      return {
        list:[{img:'img/index/pic_001.jpg'},{img:'img/index/pic_001.jpg'},{img:'img/index/pic_001.jpg'},{img:'img/index/pic_001.jpg'},{img:'img/index/pic_001.jpg'}],
        swiperOption: {
          // spaceBetween: 30, //板块间距
          loop: true, //无缝轮播
          centeredSlides: true,
          autoplay: {  //自动轮播
            delay: 3000,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        }
      }
    },
    created(){
    this.axios.get(
        "index/carousel"
      ).then(result=>{
       
       this.list=result.data
        //  console.log(this.list)

       
      })
    },
    components: {
      swiper,
      swiperSlide
    },
    // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    //   console.log('this is current swiper instance object', this.swiper);
      // this.swiper.slideTo(3, 1000, false)
    //   console.log('mounted');
      //鼠标覆盖停止自动切换
      this.swiper.el.onmouseover = function () {
        this.swiper.autoplay.stop();
        // console.log('stop');
      }
      //鼠标离开开始自动切换
      this.swiper.el.onmouseout = function () {
        this.swiper.autoplay.start();
        // console.log('start');
      }
    }
  }
</script>
<style scoped>
  .swiper {
    width: 1200px;
    height:500px;
    margin-top:15px;
   margin-bottom:15px;
  }

  swiper-slide {
    width: 100%;
    height:100%;
  }
  .swiper-button-prev,.swiper-button-next{
  width:27px;
  height:66px;
  background:url("../../public/img/index/pic_066.png") no-repeat;
  position:absolute;
  top:200px;
  opacity:0;
  cursor: pointer;
  z-index:9999;
  }
.swiper-button-prev{
  left:10px;
  background-position:0 -201px;
}
.swiper-button-next{
  right:10px;
  background-position:0 -134px;
}
/* 鼠标移入显示箭头 */
.swiper:hover .btn-banner{
  opacity:1;
}

</style>
