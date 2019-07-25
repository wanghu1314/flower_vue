<template>
  <div class="background">
    <div id="content">
        <div class="pro_details clearfix">
          <div class="pro_img">
            <div class="img_min">
              <div class="prev_cur"></div>
              <div v-for="(elem,index) of pics" :key="index"><img :src="elem.img" alt="" @mousemove="changei(index)"></div>
              <div class="next_cur"></div>
            </div>
            <div id="imgMax" class="img_max" @mousemove="move($event)"   @mouseout="out" ref="previewBox">
              <img :src="pics[i].lg" alt="">
              <div id="zoom" class="box-zoom " ref="hoverBox" v-show="hoverVisiable">
              </div>
              <div id="super-zoom">
              </div>
            </div>
            <div class="max-none" ref="zoomBox" v-show="zoomVisiable">
              <img :src="pics[i].lg" alt="" ref="bigImg">
            </div>
          </div>

          <div class="details ">
            <h1 v-text="product.title"></h1>
            <div>
              <span>花赞价</span>
              <span class="details-jiage">￥<span v-text="product.price"></span></span>
              <div class="er">
                <span class="min-ewm"><img src="../../public/img/details/detail_app.png" alt=""></span>
                <p class="max-ewm">
                  <img src="../../public/img/details/app_download_ewm.png" alt="">
                </p>
              </div> 
                <!-- <span>APP折后价￥<span>359</span>元,省<span>40</span>元。</span> -->
              
            </div>
            <div>
              <div>编号</div>
              <div v-text="product.numeration"></div>
            </div>
            <div>
              <div>材料</div>
              <div v-text="product.material"></div>
            </div>
            <div>
              <div>包装</div>
              <div v-text="product.pack"></div>
            </div>
            <div>
              <div>花语</div>
              <div v-text="product.flower_language"></div>
            </div>
            <div>
              <div>附赠</div>
              <div>免费附送精美贺卡，代写您的祝福。(您下单时可填写留言栏)</div>
            </div>
            <div>
              <div>配送</div>
              <div>全国 （可配送至全国1000多个城市，市区免配送费）</div>
            </div>
            <div>
              <div>说明</div>
              <div v-text="product.details"></div>
            </div>
            <div>
              <div>数量</div>
              <div class="input_count">
                <div>
                  <input class="buy_num" type="text">
                </div>
                <div>
                  <a class="icon-a icon-top" href="javascript:;">
                    <svg t="1562849279462" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10260" width="12" height="12"><path d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3c-3.8 5.3-0.1 12.7 6.5 12.7h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z" p-id="10261"></path></svg>
                  </a>
                  <a class="icon-a icon-bottom" href="javascript:;">
                    <svg t="1562849179486" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10128" width="12" height="12"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3 0.1-12.7-6.4-12.7z" p-id="10129"></path></svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="buy">
              <p></p>
              <button class="btn_buy btn_jia">加入购物车</button>
              <button class="btn_buy btn_mai">即可购买</button>
              <div class="buy_shou"><a href="#"></a></div>
              <div class="buy_fen"><a href="#"></a></div>
            </div>
          </div>
        </div>
        <div class="pro_tab">
          <div class="proTab_m clearfix" :class="navBarFixed == true ? 'navBarWrap' :''">
            <ul>
              <li>商品详情</li>
              <li>售后保障</li>
            </ul>
            <div class="btn-xia" :class="[!navBarFixed ? 'btn-none' : '']">
              <button class="btn_buy btn_jia">加入购物车</button>
              <button class="btn_buy btn_mai">即可购买</button>
            </div>
          </div>
        </div>
        <div class="pro_main clearfix">
          <div class="tabCon-m">
            <div class="pro_pubtit">
              <div class="tabTitle">
                <div>Brand Story</div>
                <p>品牌故事</p>
              </div>
            </div>
            <div class="brand_story">
              <div>
                <p>Rosewin寓意花赞，鲜花礼赞爱情，专注于轻奢鲜花创意设计，10余年成就全国知名品牌。Rosewin精心打造的APP，订花更便捷：精准推荐设计师款，精心呈现每个细节，同时提供专业定制，致敬生活美学，将浪漫做到极致。</p>
              </div>
              <div>
                <img src="../../public/img/details/goods_brand_ico.jpg" alt="">
              </div>
            </div>
          </div>
          <div class="tabCon-m">
              <div class="pro_pubtit">
                <div class="tabTitle">
                  <div>Product Details</div>
                  <p>商品详情</p>
                </div>
              </div>
              <div class="proImg">
                <div style="text-align:center;">
                  <img src="../../public/img/details/1534931054_45561.jpg" alt="">
                  <img src="../../public/img/details/1534931054_78095.jpg" alt="">
                  <img src="../../public/img/details/1534931055_79567.jpg" alt="">
                  <img src="../../public/img/details/1534931055_12161.jpg" alt="">
                </div>
              </div>
          </div>
          <div class="tabCon-m">
            <div class="pro_pubtit">
                <div class="tabTitle">
                  <div>Guess Your Like</div>
                  <p>猜你喜欢</p>
                </div>
            </div>
            <div class="guess_img">
              <ul>
                <li>
                  <a href="#">
                    <img src="../../public/img/details/1530170253_35795.jpg" alt="">
                    <div class="guess_title">
                      <p>小幸运</p>    
                      <p>小清新礼盒装</p>
                      <p>￥599</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="../../public/img/details/1530170442_21427.jpg" alt="">
                    <div class="guess_title">
                        <p>陌上花开</p>    
                        <p>99朵粉红雪山</p>
                        <p>￥1199</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="../../public/img/details/1530174027_33351.jpg" alt="">
                    <div class="guess_title">
                        <p>闻香识爱</p>    
                        <p>16朵戴安娜</p>
                        <p>￥699</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="../../public/img/details/1533005114_32831.jpg" alt="">
                    <div class="guess_title">
                        <p>叶上胭脂</p>    
                        <p>19朵厄瓜多尔红玫瑰</p>
                        <p>￥1499</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="../../public/img/details/1534840829_53772.jpg" alt="">
                    <div class="guess_title">
                        <p>初遇</p>    
                        <p>52朵戴安娜玫瑰</p>
                        <p>￥799</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  function offset(el) {
  let top = el.offsetTop;
  let left = el.offsetLeft;
  while (el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }
  return {
    left: left,
    top: top
  }
}
  export default{
    data(){
      return {
        i:0,//表示现在选的是第几张图片
        // LIWIDTH:62,//每个li的宽度
        // ulStyle:{//支持小图片列表ul的宽和marginleft
        //   width:0,
        //   marginLeft:0
        // },
        product:[{price:0}],
        pics:[{img:'img/wenhou/wenhou_002lg.jpg'}],
        // num:"",
        // i:''
      navBarFixed:false,
      zoomVisiable: false,
      hoverVisiable: false
   
       
      }
    },
    // props:["lid"], //准备接参数
    created(){
     
       var fid=this.$route.query.fid;
        this.axios.get("product/details", {params:{fid:fid}}
        ).then(result=>{
          this.product=result.data.product[0];
          this.pics=result.data.pics;
          // console.log(this.product)
          // console.log(this.pics)
          // this.ulStyle.width=this.LIWIDTH*this.pics.length+"px";
        })
    },
    mounted () {
  // 事件监听滚动条
window.addEventListener('scroll',this.watchScroll); 
},
    methods:{
      out() {
      this.zoomVisiable = false;
      this.hoverVisiable=false;
      },
      move(ev) {
      this.init();
      // 鼠标距离屏幕距离
      let moveX = ev.clientX;
      let moveY = ev.clientY;
      // 大盒子距离顶部的距离
      let offsetLeft = offset(this.oPreviewBox).left;

      let offsetTop = offset(this.oPreviewBox).top;
      let left = moveX - offsetLeft - this.houverWidth / 2;
      let top
      if(this.scroll > 0) {
        top = moveY - offsetTop + this.scroll - this.houverHeight / 2;
      }else {
        top = moveY - offsetTop - this.houverHeight / 2;
      }
      let maxWidth = this.pWidth - this.houverWidth;
      let maxHeight = this.pWidth - this.houverHeight;
      left = left < 0 ? 0 : left > maxWidth ? maxWidth : left;
      top = top < 0 ? 0 : top > maxHeight ? maxHeight : top;
      let percentX = left / (maxWidth);
      let percentY = top / (maxHeight);
      this.oHoverBox.style.left = left + 'px';
      this.oHoverBox.style.top = top  + 'px';
      this.oBigImg.style.left = percentX * (this.bWidth - this.imgWidth) + 'px';
      this.oBigImg.style.top = percentY * (this.bHeight - this.imgHeight) + 'px';
      this.$emit('move', ev);
      this.zoomVisiable = true;
      this.hoverVisiable=true;
      },
      init(){
        this.oHoverBox = this.$refs.hoverBox;
        this.oPreviewBox = this.$refs.previewBox;
        this.imgBox = this.$refs.zoomBox;
        this.oBigImg = this.$refs.bigImg;
        this.houverWidth = this.oHoverBox.offsetWidth;
        this.houverHeight = this.oHoverBox.offsetHeight;
        this.pWidth = this.oPreviewBox.offsetWidth;
        this.pHeight = this.oPreviewBox.offsetHeight;
        this.bWidth = this.imgBox.offsetWidth;
        this.bHeight = this.imgBox.offsetHeight;
        this.imgWidth = this.oBigImg.offsetWidth;
        this.imgHeight = this.oBigImg.offsetHeight;
        this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
      },
      watchScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        //  当滚动超过 50 时，实现吸顶效果
        if (scrollTop > 870) {
          this.navBarFixed = true
        } else {
          this.navBarFixed = false
        }
     },
changei(index){
        this.i=index;
      }
    },
    destroyed () { //离开这个界面之后，删除，不然会有问题
    window.removeEventListener('scroll', this.watchScroll)
  },
watch: {    
    '$route' (to, from) {   
      this.$router.go(0);   
 }},
 
  }
</script>
<style scoped>
  /*商品详情页*/
  /* 背景色 */
  .background{
    background-color:#F5F5F5;
  }
/* 居中 */
#content{
  width:1200px;
  margin:0 auto;
}
/* img 详情 购买 */
.pro_details{
  width:1200px;
  padding:60px 0;
  background-color:#fff;
  
 
}
/*img*/
.pro_details>.pro_img{
  float:left;
  margin-left:95px;
  width:510px;
  position: relative;
}
.max-none{
  width:388px;
  height:450px;
  overflow: hidden;
  position: absolute;

  top:0px;
  left:542px;
  z-index:999;
}
.max-none>img{
 
  position: absolute;
  top: 0;
  left: 0;

}

.pro_img>.img_min{
  width: 52px;
  height: 420px;
  position:relative;
  overflow: hidden;
  z-index: 2;
  float: left;
}
.img_min img{
  width: 50px;
  height: 50px;
  vertical-align: middle;
  display: inline-block;
  border:solid 1px #ccc;
  margin:20px 0 10px 0;
}
.pro_img .prev_cur,.next_cur{
  width: 50px;
  height: 16px;
  display: block;
  position: absolute;
  background: url(../../public/img/details/projt.gif) no-repeat;
  cursor: pointer;
}
.pro_img .prev_cur{
  background-position: center -32px;
}
.pro_img .next_cur{
  background-position: center -48px;
}
.pro_img>.img_max img{
  width:100%;
  }
.pro_img>.img_max{
  float: left;
  margin-left:60px;  
  width:400px;
  height:400px;
  position: absolute;
  
}
.img_max>.box-zoom{
  width:194px;
  height:230px;
  background-color: #fff;
  -moz-opacity: 0.6;
  opacity: 0.6;
  position: absolute;
}
#super-zoom{
  width:400px;
  height:400px;
  position: absolute;
  top:0;
  left:0;
}
.d-none{
  display:none;
}


/* 详情购买 */
.details{
  display: block;
  position: relative;
  width:520px;
  padding-left:35px;
  float:left;
}
.details>h1{
  font-size: 24px;
  display: block;
  color: #333;
  max-width: 510px;
  margin-bottom:20px;
}
.details-jiage>span{
  font-size: 18px;
  font-weight: bold;
}
/*二维码*/
.max-ewm{
  width:200px;
  height:200px;
  position: absolute;
  top:30px;
  left:145px;
  display:none;
}
.min-ewm{
  display:inline-block;
  width:27px;
  height:27px; 
  position: relative;
  margin-right: 5px;
  margin-top: -10px;
  margin-left:10px;
}
.min-ewm>img{
  width:27px;
  height:27px;
  position: absolute;
  top:8px;
}
.er{
  display:inline-block;
}
.er:hover .max-ewm{
  display:block !important;
  box-shadow: 0px 0 4px 0 rgba(0,0,0,0.25);
  z-index:998;
}
.max-ewm>img{
  width:100%;
}
.details>div{
  font-size:12px;
  position: relative;
  float:left;
  line-height:24px;
  margin-bottom:8px;
}
.details>div>div:nth-child(1){
  letter-spacing:12px;
}
.details>div>:nth-child(1){
  min-width:55px;
  display:block;
  float:left;
  color: #8c8c8c;
  margin-right:10px;
}
.details>div>div:nth-child(2){
  float: left;
  width: 440px;
  display:block;
  color:#555;
}
.input_count{
  float: left;
}
.input_count .buy_num{
  width:28px;
  height:28px;
  outline:none;
  text-align: center;
  padding:0 10px;
  float: left;
  border: 1px solid #d2d2d2;
  border-right:0;
}
.input_count>:nth-child(2){
  width:22px;
  height:28px;
  border: 1px solid #d2d2d2;
  float: left;
}
.icon-a{
  float: left;
  width: 22px;
  height: 14px;
  line-height: 14px; 
  text-align: center;
  cursor: pointer;
}
.icon-top{
  border-bottom:1px solid #d2d2d2;
}
/*加入购物车 即可购买 收藏 分享*/
.buy{
  margin-top:50px;
  margin-bottom:0 !important;
}
.btn_buy{
  width:143px;
  height:45px;
  font-size: 14px;
  overflow: hidden;
  color: #fff;
  border: 0;
  cursor: pointer;
  border-radius: 2px;
  float: left;
}
.btn_jia{
  background-color: #333;
}
.btn_jia:hover{
  background-color:#f29c49;
}
.btn_mai{
  background-color:#c53f40;
  margin-left:10px;
  margin-right:20;
}
.btn_mai:hover{
  background-color:#ec5151;
}
/*收藏 分享*/
.buy>div{
  width:43px;
  height:43px;
  border: solid 1px #e8e8e8;
  float: left;
  margin-left:10px;
}
.buy>div>a{
  display: block;
  width:43px;
  height:43px;
  background:url("../../public/img/details/pst.gif")
}
.buy_shou>a{
  background-position:0px -13px !important;
}
.buy_fen>a{
  background-position:0px -56px !important;
}
/*商品详情  售后保障  固定定位*/
.pro_tab{
  margin-top: 20px;
  height: 60px;
  overflow: hidden;
  background-color:#fff;
}
.proTab_m{
  width:1200px;
  height:60px;
  border-bottom:1px solid #e8e8e8;
  line-height:60px;
  background: #fff;
}
.pro_tab>.proTab_m>ul>li{
  width:110px;
  height:60px;
  float: left;
  font-size:14px;
  text-align:center;
  line-height:60px;
}
.proTab_m>ul>:nth-child(1){
  background-color:#505050;
  color:#fff;
}
.navBarWrap{
  position:fixed;
    top:0;
    z-index:999;
    margin:0 !important;
}
.btn-none{
  display:none;
}
.btn-xia{
  float:right;
  margin-right:20px;
  margin-top:8px;
}
/*品牌故事*/
.pro_main{
  margin-top:20px;
}
.tabCon-m{
  padding:0 30px;
  margin-bottom:20px;
  background-color:#fff;
}
.pro_pubtit{
  height: 63px;
  padding-top: 15px;
  border-bottom: solid 1px #e8e8e8;
}
.tabTitle{
  height:45px;
  background:url(../../public/img/details/m.png) no-repeat center left;
  color: #1b1b1b;
  font-size: 14px;
  padding: 0 0 5px 70px;
  /* background: #f5f5f5; */
}
.tabTitle>div{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  padding: 4px 0 4px 0;
  color: #999;
}
.tabTitle>p{
  line-height: 1.8;
  color: #666;
  font-size: 12px;
}
.brand_story{
  padding:40px 0;
  display:flex;
  justify-content: flex-start;
  text-align: center;
}
.brand_story>div:nth-child(1){
  width: 690px;
  font-size: 14px;
  padding: 0 75px 0 45px;
  border-right:1px solid #e8e8e8;
}
.brand_story>div>p{
  color: #909090;
  text-align: justify;
}
p{
  white-space: normal;
  word-break: break-all;
  word-wrap: break-word;
}
.brand_story>div>img{
  vertical-align: middle;
}
.brand_story>div:nth-child(2){
  width:330px;
}
/*4个大图*/
.proImg{
  width: 1110px;
  margin: 0 auto;
  padding-top: 15px;
  padding-bottom: 30px;
}
.proImg>div>img{
  vertical-align: middle;
  display: inline-block;
}
/*底部五个图*/
.guess_img{
  padding: 20px 0px;
}
.guess_img>ul{
  display:flex;
  justify-content:space-around;
  text-align: center;
}
.guess_img>ul>li{
  width: 200px;
  height: 303px;
}
.guess_img img{
  width:200px;
  height:200px;
}
.guess_title{
  font-size:12px;
  color:#999;
  line-height:23px;
  padding-top:10px;
}
.guess_title>p:nth-child(1){
  color: #333;
  font-weight:bold;
}

</style>}