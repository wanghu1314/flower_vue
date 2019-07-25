<template> <!--保存当前组件的HTML片段-->
    <footer class="footer" >
        <div class="footer-top">
           <div class="footer-top-nav">
                <a class="">
                    <div class="">高档花材<span class="">100%品质保证</span></div>
                </a>	
                <a class="">
                    <div class="">同城配送<span class="">1-3小时送达</span></div>
                </a>
                <a class="">
                    <div class="">特色服务<span class="">高端私人定制</span></div>
                </a>
                <a class="">
                    <div class="">时尚原创花艺<span class="">资深花艺师独家设计</span></div>
                </a>	
           </div>	
        </div>
        <div class="footer-down">
            <div class="footer-text">
                <ul>
                    <li><a href="">购物说明</a></li>
                    <li><a href="">APP专享介绍</a></li>
                    <li><a href="">购物流程</a></li>
                    <li><a href="">支付说明</a></li>
                </ul>
                <ul>
                    <li><a href="">配送说明</a></li>
                    <li><a href="">配送范围</a></li>
                    <li><a href="">配送费用</a></li>
                    <li><a href="">配送时间</a></li>
                </ul>
                <ul>
                    <li><a href="">售后保障</a></li>
                    <li><a href="">取消/修改订单</a></li>
                    <li><a href="">关于签收</a></li>
                    <li><a href="">关于投诉</a></li>
                </ul>
                <ul>
                    <li><a href="">关于我们</a></li>
                    <li><a href="">品牌介绍</a></li>
                    <li><a href="">实力证明</a></li>
                    <li><a href="">花语大全</a></li>
                    <li><a href="">鲜花百科</a></li>
                </ul>
                <ul>
                    <li class="footer_t"><a href="">同城配送</a></li>
                    <li><a href="">北京鲜花</a></li>
                    <li><a href="">上海鲜花</a></li>
                    <li><a href="">广州鲜花</a></li>
                    <li><a href="">更多城市</a></li>
                </ul>
                <div>&nbsp;&nbsp;友情链接：</div>
            </div>
            <div class="footer-phone">
                <span class="footer_t">客服电话</span>
                <h5>4000-192-520</h5>
                <p>工作日 08:30-21:30</p>
                <p>节假日 06:00-24:00</p>
            </div>
            <div class="footer-app">
                <div class="footer-f">
                    <span>Iphone下载</span>
                    <div><span class="app_img"></span></div>
                </div>
                <div class="footer-r">
                    <span>Android下载</span>
                    <div><span class="wechat_img"></span></div>
                </div>
                <p>手机扫码即可下载Rosewin鲜花APP</p> 
            </div>
        </div>
    </footer>
</template>
<script>
  //组件本质就是一个对象，对象需要抛出到外部被别人使用
  import '../assets/css/base.css';
  export default {
    //没有template和el了
    data(){
      return {

      }
    },
    created(){

    },
    methods:{

    },
    computed:{

    },
    watch:{
      
    }
  }
</script>
<style scoped>
 .footer .footer-top{
    background: #000;
    
}
.footer-top-nav{
    width: 1200px;
    margin: 0 auto;
    display:flex;
    justify-content:space-between;
    
}
.footer-top a:nth-child(1){
    background:url("../../public/img/foot_ico_hc.png") no-repeat left center;
    width: 330px;
    margin-left: 45px;
}
.footer-top a:nth-child(2){
    background:url("../../public/img/foot_ico_ps.png") no-repeat left center;
    width: 330px;
    margin-left: 45px;
}
.footer-top a:nth-child(3){
    background:url("../../public/img/foot_ico_service.png") no-repeat left center;
    width: 330px;
    margin-left: 45px;
}
.footer-top a:nth-child(4){
    background:url("../../public/img/foot_ico_flower.png") no-repeat left center;
    width: 330px;
    margin-left: 45px;
}
.footer-top a {
    height: 70px;
    display: block;
    float: left;
    color: #fff;
}
.footer-top a div{
    margin-left: 60px;
    font-size: 16px;
    padding-top: 14px;
}
.footer-top a div span{
    display: block;
    margin-top: 4px;
    font-size: 12px;

}

.footer-down{
    display:flex;
    justify-content: space-between;
    width: 1200px;
    margin: 0 auto;
    padding-top: 40px;
}

.footer-text{
    display: flex;
    flex-wrap: wrap;/*子元素换行*/
    justify-content: space-between;
}
.footer-text ul{
    width: 114px;
    margin-bottom: 10px;
    padding-left: 10px;
}
.footer-text ul li{
    line-height: 25px;
}
.footer-text ul li a{
    font-size:12px;
    color: #555;
}
.footer-text ul li:first-child a{
    margin-bottom: 8px;
    color: #333;
    font-size:14px;
}
.footer-text div{
    color: #333;
    font-size: 12px;
}


.footer-phone{
    text-align: center;
    height: 278px;
    width: 278px;
    border-right: 1px solid #e8e8e8;
    border-left: 1px solid #e8e8e8;
}
.footer-phone .footer-t{
    display: block;
    padding-top: 5px;
    color: #333;
    font-size: 14px;
}
.footer-phone h5{
    line-height: 65px;
    font-size: 24px;
    color: #555;
}
.footer-phone p{
    line-height: 30px;
    font-size: 12px;
    color: #555;
}


.footer-app{
    padding-left: 25px;
    text-align:center;
    width: 275px;
}
.footer-f{
    float: left;
}
.footer-r{
    float:right;
}
.footer-f div,.footer-r div{
    margin-top: 13px;
    border: 1px solid #e8e8e8;
    padding: 5px;
}
.footer-phone span,.footer-app span{
    color: #333;
    font-size: 14px;
}
.app_img, .wechat_img {
    display: block;
    width: 100px;
    height: 100px;
}
.app_img {
    background: url("../../public/img/foot_app_ios.jpg");
    background-size: contain;
}
.wechat_img {
    background: url("../../public/img/foot_app_android.jpg");
    background-size: contain;
}
.footer-app p{
    float:left;
    width:275px;
    line-height:60px;
    color: #999;
    font-size: 12px;
    text-align:center;
    display: block;
}
</style>
