<template> <!--保存当前组件的HTML片段-->
   <header>
        <div class="header">
            <div class="header-m">
                <div class="header-fl">
                    <div class="header-phone">
                        <span><img src="img/headico.png" alt=""></span>
                        <span>4000-192-520</span>
                    </div>
                    <div class="header-app">
                        <span><img src="img/headico.png" alt=""></span>
                        <a href="">下载Rosewin鲜花APP</a>
                        <div class="header-app-code">
                            <a href="">
                                <img src="img/down_app.png" alt="">
                                <br>
                                扫码下载
                            </a>
                        </div>
                    </div>
                </div>
                <div class="header-ri">
                    <div v-if="!isLogin">
                        <span><router-link to="/login">登录</router-link></span>
                        <span><router-link to="/login">注册</router-link></span>
                    </div>
                     <div v-if="isLogin">
                        <span><a href="javascript:;">{{uname}}</a></span>
                        <span><a href="javascript:;" @click="goOut">退出</a></span>
                    </div>
                    <div>
                        <router-link to="/cart">
                            <span><img src="img/shop_car1.png" alt=""></span>
                            <span>购物车</span>
                            <span>0</span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>    
        <div class="header-middle">
            <div><a href=""><img src="img/huazan_logo.png" alt=""></a></div>
            <div class="search">
                <div class="search-int">
                    <input type="text" placeholder="请输入关键字" v-model="search"   @keyup.13="getSearch">
                    <button @click="getSearch"><a href="javascript:;"></a></button>
                </div>
            </div>
            <div>
                <img src="img/down_s.png" alt="">
                <a href="ios"></a>
                <a href="android"></a>
            </div>
        </div>
        <!--面包屑导航-->
        <div class="nav">
            <div>
                <ul class="breadcrumb">
                    <li class="breadcrumb-item "><router-link to="/">首页</router-link></li>
                    <li class="breadcrumb-item "><router-link :to="{path:'/flist',query:{sid:1}}">进口鲜花</router-link></li>
                    <li class="breadcrumb-item "><router-link :to="{path:'/flist',query:{sid:2}}">爱情鲜花</router-link></li>
                    <li class="breadcrumb-item "><router-link :to="{path:'/flist',query:{sid:3}}">生日鲜花</router-link></li>
                    <li class="breadcrumb-item "><router-link :to="{path:'/flist',query:{sid:4}}">问候长辈</router-link></li>
                    <li class="breadcrumb-item "><router-link :to="{path:'/flist',query:{sid:5}}">祝福庆贺</router-link></li>
                    <li class="breadcrumb-item "><router-link :to="{path:'/flist',query:{sid:6}}">探病慰问</router-link></li>
                    <li class="breadcrumb-item "><router-link :to="{path:'/flist',query:{sid:7}}">道歉鲜花</router-link></li>
                    <li class="breadcrumb-item "><router-link :to="{path:'/flist',query:{sid:8}}">生活鲜花</router-link></li>
                    <li class="breadcrumb-item "><router-link to="/product">全部鲜花</router-link></li>
                    <li class="breadcrumb-item "><router-link :to="{path:'/flist',query:{sid:9}}">开业花篮</router-link></li>
                    <li class="breadcrumb-item "><router-link :to="{path:'/flist',query:{sid:10}}">永生花</router-link></li>
                    <li class="breadcrumb-item "><router-link :to="{path:'/flist',query:{sid:8}}">礼品</router-link></li>
                </ul>
            </div>
        </div>
    </header>
</template>
<script>
  //组件本质就是一个对象，对象需要抛出到外部被别人使用
  import '../assets/css/base.css';
  export default {
    //没有template和el了
    data(){
      return {
         isLogin:false,
         uname:"",//保存用户名
        search:''//输入框关键字

      }
    },
    methods:{
       getSearch(){//当单击按钮时执行查询
        if(!this.search){return alert("请输入要查询的内容") }
            this.$router.push({path:'/find',query:{search:this.search}})
            // window.open('/#/find?search=${this.search}',Date.now())
       

        },
      goOut(){
          sessionStorage.removeItem("uname")
          sessionStorage.clear()
          this.$router.push('/login')
        //   this.isLogin=false
         if(uname==null){
           this.isLogin=false
       }else{
          this.isLogin=true
          this.uname=uname;
       }
      }
    },
    created(){
        
       var uname=sessionStorage.getItem("uname")
        // console.log(uname==null)
        // console.log(uname)
       if(uname==null){
           this.isLogin=false
       }else{
          this.isLogin=true
          this.uname=uname;
       }
      
     
    },
    computed:{

    },
    watch:{
      '$route' (to, from) {this.$router.go(0);
      }
    }
  }
</script>
<style scoped>
  /* 头部样式 */
.header{
    background: #fafafa;
    height:35px;
    border-bottom:1px solid #f5f5f5;   z-index: 101;
}
.header-m{
width: 1200px;
margin:0 auto;
padding-top:5px;
overflow: hidden;
padding-bottom:20px;

}
 .header-fl{
     float: left;
    } 
.header-phone span:nth-child(1){
    width: 20px;
    height: 20px;
    overflow: hidden;
    display:inline-block;
    vertical-align: middle; 
}
.header-phone{
    float:left;
    padding-right:20px;
    display:block;
    }
.header-phone span:nth-child(2){
font-size:12px;
color: #555555;
}

.header-phone{
    border-right:1px solid #d9d9d9;
}

.header-app span:nth-child(1){
    width: 20px;
    height: 20px;
    display:inline-block;
    overflow: hidden;
    position: relative;
    margin-left:20px;
    vertical-align: middle;
 
}
.header-app span img{
position: absolute;
top:0;
left:-20px;
}
.header-app a{
font-size:12px;
color: #555555;
}
.header-app{float: left;}

/* 右边购物车 */
.header-ri{float:right;width:210px;}
    .header-ri div span a{
        font-size:12px;
        margin:0px 10px;
    }
    .header-ri div span:nth-child(2) a{
        margin-right:15px;
    }
    .header-ri div:nth-child(1) {
    border-right:1px solid #d9d9d9;
    float: left;
    }
    .header-ri div:nth-child(2) {
        float: left;
        }
    .header-ri a span{
        font-size:12px; 
    }
    .header-ri a{
        position: relative;
        margin-left:10px;
    }
    .header-ri a span:nth-child(3){
    min-width: 13px;
    height: 13px;
    line-height: 13px;
    padding: 1px;
    border-radius: 50%;
    background: #333;
    color: #fff;
    position: absolute;
     top: 5px; 
    left: 85px;
    text-align: center;
    font-size: 12px;
    }
    .header-ri a span:nth-child(1){
        vertical-align: middle; 
        width: 20px;
        height: 20px;
        overflow: hidden;
        display:inline-block; 
        margin:0px 5px; 
    }
/* 中间 搜索 */
.header-middle{ 
    padding:35px 35px; 
    box-sizing:border-box; 
    position: relative;
    width: 1200px;
    margin: 0 auto;
    display:block;
    display: flex;
    justify-content: space-between;
    align-items: center;
    }
   .search-int input {
    text-indent: 20px;
    width: 400px;
    padding: 0;
    padding-right: 40px;
    border: none;
    height: 39px;
    border: solid 1px #e8e8e8;
    border-radius: 30px;
}
.search-int{
    position: relative;
}
.search button a{
    width: 20px;
    height: 20px;
    display:block;
   overflow:hidden; 
   position:absolute;
   top:10px;
   right:25px;
  background:url("../../public/img/headico.png") -60px 0 no-repeat;
}

/* 面包屑导航 */
.nav{
    border-bottom: 1px solid #d2d2d2;
    padding: 15px 0 15px;
    width: 100%;
    min-width: 1200px;
    z-index: 100;
    height: 60px;
    /* margin-bottom: 25px; */
    background: #fff;
}
.nav>div{width:1200px;height:40px;
        line-height:40px;
        margin:0 auto;}
.nav>div>ul>li{float:left;}
.nav>div>ul>li>a{margin:0 20px;font-size:12px;}
/* .breadcrumb{background:transparent;} */
.breadcrumb-item + .breadcrumb-item::before{
    content: '/'; color:#777; font-size:12px;}


    .header-app-code{
        background: #fff;
        padding: 10px 10px 3px 10px;
        border:1px solid  #ececec;
        position:relative;
        z-index: 101;
        width:130px;
        top:8px;
        left:10px;display:none;
        }
    .header-app-code a {
        display: block;
        text-align: center;
        color: #333;
        font-size: 12px;
        line-height: 2;
    }
    .header-app-code a img {
        width: 100%;
        vertical-align: middle;
        display: inline-block;
    }
    .header-app:hover .header-app-code{
        display:block;
    }
/* ul{
  list-style:none;
}
a{
  color: #555;
  text-decoration: none;
  background-color: transparent;
} */
</style>
