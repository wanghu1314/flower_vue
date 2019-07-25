<template>
  <div>
    <div>
       <div class="theme">
          <div class="mid_line abs"></div>
          <p class="theme_n">
            <span class="text-color">送花知识</span>
            <br>
            <span>Flowers Knowledge</span>
          </p>
        </div>
    </div>
    <div class="swiper-banner">
      <!-- swiper -->
      <swiper :options="swiperOption" class="banner" v-if="list.length">
       <swiper-slide id="list" v-for="(elem,i) of list" :key="i">
          <router-link :to="{path:'/details',query:{fid:elem.href}}" class="color666">
            <img :src="elem.pic" alt="">
            <div class="center">
              <p v-text="elem.title">
              </p>
            </div>
          </router-link>
        </swiper-slide>
        
        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
        <div class="swiper-button-prev btn-banner" slot="button-prev"></div>
        <div class="swiper-button-next  btn-banner" slot="button-next"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
data() {
  return {
    list:[],
    swiperOption: {
    //  width:1200,
      slidesPerView: 5,
      spaceBetween:0,
      slidesPerGroup:1,
      loop: true,   
      autoplay: {
      delay:2000,
      disableOnInteraction: false,
      },
      loopFillGroupWithBlank: true,
      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable: true
      // },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }
  }
},
  created(){
this.axios.get(
    "index/cindex"
  ).then(result=>{
    
    this.list=result.data.slice(8,18)
    //  console.log(this.list)

    
  })
}
}
</script>
<style scoped>
.theme{
  width:1200px;
  height:54px;
  margin: 23px 0 10px 0;
  position: relative;
  margin: 0 auto;
  text-align: center;
  margin-top: 80px;
}
.text-color{
  text-align: center;
   color: #333 !important;
  }
.theme_n{
  width: 260px;
  text-align: center;
  position: relative;
  background: #fff;
  margin: 0 auto;
  text-align: center;
  font-size: 16px;
  font-family: 微软雅黑;
  z-index: 2;
  color:#999;
}
.mid_line{ 
  width:100%;
  border-top:1px solid #e8e8e8;
  position: absolute;
  top: 20px;
  left: 0;
  z-index: 1;
}
.theme_n p{
  width:200px;
  height:30px;
  overflow:hidden;
  padding-top:15px;
  font-size:14px;
  text-align: center;
}
.theme_n span{
  font-size:16px;
  width: 100px;
  margin: auto;
  height: 24px;
  line-height: 24px;
  color:#999;
}
.banner{
  width: 1200px;
  margin: 0 auto;
}
.color666{
  width: 200px;
  height: 290px;
  margin: 5px 20px 0 20px;
  text-align: center;
  float: left;
}
/* 图片 大小 内边距 */
.color666 img{
  width:200px;
  height:200px;
}
.color666 p{
  width:200px;
  height:30px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow:hidden;
  padding-top:15px;
  font-size:12px;
  text-align: center;
}
.swiper-button-prev,.swiper-button-next{
  width:27px;
  height:66px;
  background:url("../../public/img/index/pic_066.png") no-repeat;
  position:absolute;
  top:90px;
  opacity:0;
  cursor: pointer;
  z-index:9999;
  }
.swiper-button-prev{
  left:20px;
  background-position:0 -201px;
}
.swiper-button-next{
  right:20px;
  background-position:0 -134px;
}
/* 鼠标移入显示箭头 */
.banner:hover .btn-banner{
  opacity:1;
}
</style>




