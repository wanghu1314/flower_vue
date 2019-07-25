<template>
     <ul class="f2_banner">
              <li>
                <router-link :to="{path:'/details',query:{fid:myhref}}">
                  <img :src="imgurl" alt="">
                  <div>
                      <h3>{{title}}</h3>
                      <h2>￥{{price}}</h2>
                      <p>APP折后价￥<span class="update_app_price">179</span>元，省<span class="save_money">20</span>元。</p>	
                  </div>
                </router-link>  
              </li>
            
            </ul>
</template>
<script>

    import '../assets/css/base.css';
// import '../assets/js/index.js';
  export default{
    data(){
      return {
        
       
      }
      
    },
    props:{
        myhref:{default:""},
        imgurl:{default:""},
        price:{default:""},
        title:{default:""},
      },
    created(){
      
    }
  }

</script>
<style scoped>

/*鼠标悬浮图片移动效果*/
.f2_banner>li img:hover{
  transform: translateX(-10px);
}
.f2_banner>li img{
  width:240px;
  height:240px;
  overflow: hidden;
  transition: all 0.2s;
}
.f2_banner>li{
  float: left;
  width:240px;
  padding:29px;
  cursor: pointer;
}
/*f2 div上内边距 文字居中 color 大小*/
.f2_banner>li div{
  text-align: center;
  padding-top: 20px;
}
.f2_banner>li h3{
  font-size: 14px;
  color: #000;
  line-height: 30px;
}
.f2_banner>li h2{
  font-size: 14px;
  color: #000;
  font-weight: bold;
}
.f2_banner>li p{
  font-size:13px;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  padding-top: 5px;
  color: #b2904c;
  height: 20px;
}
</style>


