<template>
<!--  登录-->
    <div class="container">
        <div class="login-wrap">
            <div class="login-form">
                <div class="login-box">
                    <div class="switch-type">
                        <ul class="clearfix">
                            <li class="login " :class="[!isLogin ? 'on' : '']" @click="isLogin=false">账号登录</li>
                            <li class="reg" :class="[isLogin ? 'on':'']" @click="isLogin=true">用户注册</li>
                        </ul>
                    </div>
                    <div class="msg" v-text="msg"></div>
                    <!-- 账号登录 -->
                    <div class="switch-container">
                        <div class="content">
                            <!-- 登录 -->
                            <div class="content-login" v-if="!isLogin">
                                <div class="item">
                                   <i class="iconfont icon-yonghu2"></i>
                                   <input type="text" placeholder="请输入用户名" v-model="uname" @blur="unameBlur">
                                </div>
                                <div class="item">
                                   <i class="iconfont icon-suo"></i>
                                   <input type="password" placeholder="请输入密码" v-model="upwd" @blur="pwdBlur">
                                </div>
                                <div class="item-button">
                                   <input type="submit" value="登录" class="btn" @click="goLogin">
                                </div>
                                <a href="#" class="notpwd">忘记密码?</a>
                            </div>
                             <!-- 注册 -->
                            <div class="reg-box" v-if="isLogin">
                                <div class="item">
                                   <i class="iconfont icon-yonghu2"></i>
                                   <input type="text" placeholder="请输入用户名" @blur="regName" v-model="regname">
                                </div>
                                <div class="item">
                                   <i class="iconfont icon-suo"></i>
                                   <input type="password" placeholder="请输入密码" v-model="password" @blur="regpwd">
                                </div>
                                <div class="item">
                                   <i class="iconfont icon-suo"></i>
                                   <input type="password" placeholder="请确认输入密码" v-model="password1" @blur="regpwd1">
                                </div>
                                <div class="item-button">
                                   <input type="submit" value="注册" class="btn" @click="goReg">
                                </div>
                                <a href="#" class="notpwd">忘记密码?</a>
                            </div> 
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
import qs from "qs"

export default {
    data(){
        return{
            uname:"",
            upwd:"",
            regname:"",
            msg:"",
            isLogin:false,
            password:"",
             password1:"",
            
        }
    },
    watch: {'$route'(to, from){this.$router.go(0);}},
    methods:{
        // 用户验证
        unameBlur(){
            var uname=this.uname;
            var reg=/^\w{4,8}$/i;
            if(uname==""){
                this.msg="用户名不能为空"
            }else if(!reg.test(uname)){
                this.msg="用户名4-8位字符"
            }else{
                   this.msg=""
                    }   
        },
        // 密码验证
        pwdBlur(){
            var reg=/^\w{6,8}$/
            var upwd=this.upwd;
            if(!upwd){
                this.msg="密码不能为空";
            }else if(!reg.test(upwd)){
                this.msg="密码6-12位字符"
            }else {
                this.msg=""
            }
        },
        // 登录验证
        goLogin(){ 
            var uname=this.uname;
            var upwd=this.upwd;
            this.axios.post("user/login",qs.stringify({uname,upwd}))
            .then(result=>{
                if(result.data.code>0){
                    this.$router.push({path:'index'})
                    sessionStorage.setItem("uname",this.uname)
                }else{
                    this.msg="用户名密码错误";
                    this.uname="";
                    this.upwd="";
                } 
            })
        },
        // 注册验证
        regName(){
             var uname=this.regname;
            var reg=/^\w{4,8}$/i;
            if(uname==""){
                this.msg="用户名不能为空"
            }else if(!reg.test(uname)){
                this.msg="用户名4-8位字符"
            }else{
                 this.axios.post("user/check",qs.stringify({uname:this.regname}))
                .then(result=> {
                    // console.log(result)
                    if(result.data.code>0){
                        this.msg="用户已注册"
                    }else{
                        this.msg="";
                    }
            })
            }
            
        },
        // 注册密码验证
        regpwd(){
             var reg=/^\w{6,8}$/
            var password=this.password;
            if(!password){
                this.msg="密码不能为空";
            }else if(!reg.test(password)){
                this.msg="密码6-12位字符"
            }else {
                this.msg=""
            }
        },
        // 密码确认
        regpwd1(){
             var password1=this.password1;
            if(!password1){
                this.msg="密码也不能为空";
            }else if(this.password!=password1){
                this.msg="密码输入不一致"
            }else {
                this.msg=""
            }
        },
        // 注册
        goReg(){
            var uname=this.regname;
            var upwd=this.password;
            if(uname==""||upwd==""){alert("用户名或密码不能为空")}else{
            this.axios.post("user/reg",qs.stringify({uname:this.regname,upwd:this.password}))
            .then(result=>{
                if(result.data.code>0){
                    sessionStorage.setItem("uname",uname);
                    this.$router.push({ path:'/index'})
                }
                })
             }
         }
      }  
}
</script>
<style scoped>
    .container{
        width:100%;
        height:600px;
        background-image: url('../../public/img/bg.jpg');
        margin:30px 0;


    }
    .container .login-wrap{
        width:1200px;
        height:600px;
        margin: 0 auto;
        position:relative;
        
    }
    .container .login-wrap .login-from{
        width:350px;
        height:530px;
    }
.container .login-wrap .login-box{
    float: right;
    position: relative;
    top: 70px;
    width: 350px;
    background-color: #fff;
    padding:20px 30px 0 30px;
    box-sizing: border-box;
}
.container .login-wrap .login-box .msg{
    color:red;
    font-size: 13px !important;
}
.container .login-wrap:after{
    content:"";
    display:block;
    clear:both;
}
  .container .login-wrap .login-box .switch-type{
    position: relative;
    width: 290px;
    overflow: hidden;
  }
  .container .login-wrap .login-box .switch-type ul{
    position: relative;
    font-size: 16px;
    font-weight: bold;
    color: #888;
    border-bottom: 1px solid #d1d1d1;
    width: 290px;
    
  }
  .container .login-wrap .login-box .switch-type ul .login{
    position: relative;
    float: left;
    width: 145px;
    text-align: center;
    padding: 13px 0;
    cursor: pointer;
  }
   .container .login-wrap .login-box .switch-type ul .reg{
    position: relative;
    float: left;
    width: 145px;
    text-align: center;
    padding: 13px 0;
    cursor: pointer;
   }
   .container .login-wrap .login-box .switch-type ul>li.on{
    color: #333;
    border-bottom: 2px solid #333;
    margin-bottom: -1px;
    
   }
.container .login-wrap .login-box .msg{
    padding:10px 0;
    height:20px;
    line-height: 20px;
    font-size: 16px;
}
 .container .switch-container {
    width: 300px;
    overflow: hidden;
    margin: 0 auto;
    position: relative;
 }  
 .container .switch-container .content{
     position: relative;
     width: 100%;
     box-sizing: content-box;
     
 }
 .container .switch-container .content .content-login{
     width: 300px;
     height: 232px;
    
     
 }
 .container .switch-container .content .item{
    position: relative;
    width: 290px;
    height: 38px;
    line-height: 38px;
    border: 1px solid #d2d2d2;
    margin-bottom: 18px;
    box-sizing: content-box;
 }
 .container .switch-container .content .item .iconfont{
    position: absolute;
    color: #e8e8e8;
    left: 10px;
    top: 11px;
    font-size: 18px;
    width: 18px;
    height: 18px;
    line-height: 18px;
    z-index: 5;
    
 }
  .container .switch-container .content .item>input{
    position: absolute;
    border: 0;
    width: 290px;
    padding: 5px 10px 5px 35px;
    height: 38px;
    outline: 0;
    box-sizing: border-box;
   
  }
  .container .switch-container .content .btn{
    width: 290px;
    height: 40px;
    border: 0;
    font-size: 16px;
    font-weight: bold;
    outline: 0;
    border-radius: 3px;
    background: #333;
    color:#fff;
    cursor: pointer;
  }
  .container .switch-container .content .notpwd{
    margin-top: 8px;
    display: block;
    font-size: 12px;
    color: #8c8c8c;
    
  }
  .container .switch-container .content a.notpwd:hover 
  {
      text-decoration: underline;
      color:#333;
  }
  /* 注册 */
.container .switch-container .content .reg-box{
      width:300px;
      height:260px;
     
  }
</style>


