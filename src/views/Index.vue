<template>
    <div class="container">
    <div class="content">
         <!-- 轮播 -->
         <my-carousel></my-carousel>
      
        <div class="hz_banner">
          <div class="floor_1">
            <div class="left">
              <a href="#">
                <img src="../../public/img/index/pic_005.png" alt="">
              </a>
            </div>
            <div class="right">
              <a href="#">
                <img src="../../public/img/index/pic_006.jpg" alt="">
              </a>
              <div class="right_font">
                <a href="#" class="color666">
                  <p>她总说不要送她礼物...<br>
                    但你心里自有打算。</p>
                  <h3>立即购买&gt;&gt;</h3>
                </a>
              </div>
            </div>
          </div>
          <!-- floor_2 -->
          <!-- 热卖单品推荐 -->
          <div class="floor_2">
            <h3>热卖单品推荐</h3>
            
            <List v-for="(elem,i) in p1" :key="i"
                :myhref="elem.href"
                :imgurl="elem.pic"
                :title="elem.title"
                :price="elem.price.toFixed(2)" >
            </List>
          </div>
          <!-- 抖音网红款推荐 -->
          <div class="floor_2">
            <h3>抖音网红款推荐</h3>
            <List v-for="(elem,i) in p2" :key="i"
                :myhref="elem.href"
                :imgurl="elem.pic"
                :title="elem.title"
                :price="elem.price.toFixed(2)" >
            </List>
          </div>
          <!-- 特惠鲜花推荐 -->
          <div class="floor_2">
            <h3>特惠鲜花推荐</h3>
            <List v-for="(elem,i) in p3" :key="i"
                :myhref="elem.href"
                :imgurl="elem.pic"
                :title="elem.title"
                :price="elem.price.toFixed(2)">
            </List>
          </div>
          <!-- 永生花推荐  -->
          <div class="floor_2">
            <h3>永生花推荐</h3>
            <List v-for="(elem,i) in p4" :key="i"
                :myhref="elem.href"
                :imgurl="elem.pic"
                :title="elem.title"
                :price="elem.price.toFixed(2)">
            </List>
          </div>
          <!-- 开业花篮-->
          <div class="floor_2">
            <h3>开业花篮</h3>
            <List v-for="(elem,i) in p5" :key="i"
                :myhref="elem.href"
                :imgurl="elem.pic"
                :title="elem.title"
                :price="elem.price.toFixed(2)">
            </List>
          </div> 
          <!-- floor_3-->
          <div class="floor_1">
              <div class="left right_2">
                <a href="#">
                  <img src="../../public/img/index/pic_005.png" alt="">
                </a>
              </div>
              <div class="right left_2">
                <a href="#">
                  <img src="../../public/img/index/pic_006.jpg" alt="">
                </a>
                <div class="right_font">
                  <a href="#" class="color666">
                    <p>
                      时光活力抱抱桶
                    </p>
                    <h3>前往了解&gt;&gt;</h3>
                  </a>
                </div>
              </div>
          </div>
          <div class="clearfix"></div>
          <!-- 新品推荐 -->
          <div class="floor_3">
            <div class="theme">
              <div class="mid_line abs"></div>
              <p class="theme_n">
                <span class="color666">新品推荐</span><br>
                <span>New Recommend</span>
              </p>
            </div>
            <div class="f3_banner">
              <ul>
                <li id="p6" v-for="(elem,i) of p6" :key="i">
                  <router-link :to="{path:'/details',query:{fid:elem.href}}" class="color666">
                    <img :src="elem.pic" alt="">
                    <div class="center">
                      <p v-text="elem.title">
                      </p>
                      <span @click="add(elem.fid)">加入购物车</span>
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
          </div> 
          <!-- 送花知识 -->
          <my-carouselSwiper></my-carouselSwiper>
          
        </div>   
    </div>
    </div>
</template>
<script>
import '../assets/css/base.css';
// import '../assets/js/index.js';
import List from '../components/List'
  export default{
    data(){
      return {
        p1:[],
        p2:[],
        p3:[],
        p4:[],
        p5:[],
        p6:[],
        p7:[],  
      }
    },
methods:{
  add(fid){
    this.$router.push('/cart')
    var fid=this.fid;
    // console.log(fid)
    this.axios.get("cart/cart",{params:{fid}}).then(result=>{
      // console.log(result)
    })
  }
},
created(){
      this.axios.get(
        "index/index"
      ).then(result=>{
        this.p1=result.data.slice(0,8);
        this.p2=result.data.slice(8,16);
        this.p3=result.data.slice(16,24);
        this.p4=result.data.slice(24,32);
        this.p5=result.data.slice(32,40);
        this.p6=result.data.slice(5,10);
        this.p7=result.data.slice(16,21);    
      })
    },
  components:{
    "List":List
  }
  }
</script>
<style scoped>
 .color666{
  color:#666;
}
/* 首页内容 */
.container>.content{
  width:1200px;
  /* height:9000px; */
  margin:0 auto;
  box-sizing: border-box;
}
/* 轮播样式 */
.slider{
  width:1200px;
  height:520px;
  margin-bottom:75px;
}
.slider_banner{
  width:1200px;
  height:520px;
  position: absolute;
  overflow: hidden;
}
/*轮播框*/
.slider_banner>#carousel_inner{
  width:6000px;
  height:500px;
  
}
#carousel_inner.transition{
  transition:all .5s linear;
}
.slider_banner>#carousel_inner>ul>li{
  width:1200px;
  height:500px;
  float:left;
  cursor: pointer;
}
/* 四个li */
.slider_banner>ul{
 width:120px;
 height:4px;
 margin:7px auto;
}
.slider_banner>ul>li{
  width:20px;
  height:4px;
  float:left;
  margin:0 5px;
  background-color:#cccccc;
  cursor: pointer;
}
.slider_banner>ul>li.active{
  background-color: #000;
}
/* 轮播图左右箭头 */
.btn-banner{
  width:27px;
  height:66px;
  background:url('../../public/img/index/pic_066.png') no-repeat;
  position:absolute;
  top:200px;
  opacity:0;
  cursor: pointer;
}
/* 定位 */
#btn-left{
  left:10px;
  background-position:0 -201px;
}
#btn-right{
  right:10px;
  background-position:0 -134px;
}
/*鼠标移入显示箭头*/
.slider_banner:hover .btn-banner{
  opacity:1;
}
/* hz_banner */
/*floor_1*/
.floor_1{
  width:1200px;
  height:700px;
  padding:60px 0px;
}
.floor_1>.left{
  float:left;
}
.floor_1>.right{
  float:right;
  width:460px;
  height:650px;
  padding-top:50px;
}
.floor_1>.right>.right_font{
  padding-top:30px;
}
.floor_1>.right>.right_font p{
  padding-left: 130px;
  line-height: 42px;
  padding-bottom: 25px;
  font-size: 22px;
  font-family: 'Sterling SSm A','Sterling SSm B','NSimSun','STSong',serif;
}
.floor_1>.right>.right_font h3{
  font-size: 36px;
  line-height: 40px;
  font-weight: bold;
  border-bottom: 1px solid #666;
  width: 190px;
  margin: 0px auto;
  font-family: 'Sterling SSm A','Sterling SSm B','NSimSun','STSong',serif;
}
/* floor_2  热卖单品推荐*/
.floor_2{
  width:1200px;
  height:888px;
  /* padding-top:60px; */
}
.floor_2>h3{
    font-size: 40px;
    font-weight: normal;
    font-family: 'Sterling SSm A','Sterling SSm B','NSimSun','STSong',serif;
    text-align: center;
    color:#555;
    padding-bottom: 20px;
}

/*floor_3*/
.right_2{
  float:right !important;
}
.left_2>div p{
  padding-left:135px !important;
}
.left_2{
  float:left !important;
}
/*新品推荐*/
.floor_3{
  padding-top:50px;
  width:1200px;
  height:380px;
  position: relative;
}
.floor_3>.theme{
  width:1200px;
  height:54px;
  margin: 23px 0 10px 0;
  position: relative;
}
.floor_3 .mid_line{ 
  width:100%;
  border-top:1px solid #e8e8e8;
  position: absolute;
  top: 5px;
  left: 0;
  z-index: 1;
}
.floor_3 .theme_n{
  width: 260px;
  position: relative;
  background: #fff;
  margin: 0 auto;
  text-align: center;
  font-size: 16px;
  font-family: 微软雅黑;
  color: #333;
  z-index: 2;
  color:#999;
}
/*floor_3 商品*/
.f3_banner li{
  width: 200px;
  height: 290px;
  margin: 5px 20px 0 20px;
  text-align: center;
  float: left;
}
/* 图片 大小 内边距 */
.f3_banner img{
  width:200px;
  height:200px;
}
/* 标题样式 */
.f3_banner p{
  width:200px;
  height:30px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow:hidden;
  padding-top:15px;
  font-size:12px;
  text-align: center;
}
.f3_banner span{
  font-size:12px;
  display: block;
  width: 100px;
  margin: auto;
  border: 1px solid #ccc;
  height: 24px;
  line-height: 24px;
  transition: all 0.2s;
}
.f3_banner span:hover{
  background-color: #000;
  color:#fff;
}

/*送花知识*/
.floor_3>.btn-right{
  right:20px !important;
}
.floor_3>.btn-left{
  left:20px !important;
}
 .floor_3:hover .btn-banner{
  opacity:1;
}
</style>