<template  >
<div>
    <div class="cart" v-if="!isLogin">
        <div class="table clearfix">
            <div class="selectAll">
                <input type="checkbox"  @click="selectAll" v-model="selects" >
                全选
            </div>  
            <div>商品</div>
            <div>单价</div>
            <div>数量</div>
            <div>小计</div>
            <div>操作</div>
        </div>
        <!-- 所选商品 -->
        <div class="table1" v-for="(item,index) of list" :key="index">
            <div><input type="checkbox" v-model="list[index].cb" @click="select(index)"></div>
            <div> 
            <img :src="item.img_url" alt="">
            <div>
                <p>{{item.title}}</p>
            </div>
            </div>
            <div>￥{{item.price}}</div>
            <div>
                <button v-on:click="subtract(index)">-</button>
                <!-- <span class="spans">1</span> -->
                <input type="text" name="" id="num"  v-model="item.count">
                <button v-on:click="add(index)">+</button>  
            </div>
            <div>￥{{item.price*item.count}}</div>
            <div><a class="del" href="#2" :data-cid="item.cid" @click="delItem">删除</a></div>
        </div> 
        <div class="table-bottom">
            <div class="fl">
            <input type="checkbox"  @click="selectAll" v-model="selects" >
            <a href="#">全选</a>
            <a href="#" @click="delAll">删除选中的商品</a>
            <a href="">继续购物</a>
            </div>
            <div class="fr">
                <span>共<small id="sl" style="color:red"></small>{{totalCount}}件商品</span>
                <span>合计:&nbsp;<small id="all">￥{{totalPrice}}</small></span>
                <a href="" class="count">结算</a>
            </div>
        </div>
    </div> 
    <div v-if="isLogin">
        <div class="cart-logo">
            <img src="../../public/img/cart.png" alt="">
            <h5 align="center" style="color:#d5bfa7">您的购物车空了</h5>
        </div>
    </div>
</div>
</template>
<script>
export default {
data(){
    return{
        list:[],
        selects:false,
        isLogin:false,
        totalCount:0,
        totalPrice:0
        // show: false
    }
},
methods: {
    sumPrice(){
        var sum=0;
        var n=0;
        for(var i=0;i<this.list.length;i++){
            if(this.list[i].cb==true){
                sum+=this.list[i].price*this.list[i].count;
                n++;
            } 
        }
          this.totalPrice=sum;
          this.totalCount=n;
         
    },
    // 调用数据
    loadMore(){
    //1:创建url
    var url ="cart/cart";
    //2:发送ajax请求
    this.axios.get(url).then(result=>{
    // this.list = result.data.data;
    //1:获取服务器数组
    // console.log(this.list);
    // console.log(this.list[0].count);
    var rows = result.data.data;
    //2:创建循环为数组中每个//对象添加cb属性
    //cb控制商品前复选框
    // for(var item of rows){
    // //2.1:添加cb属性
    // item.cb = false;
    // //2.2:更新购物车数量
    // this.$store.commit("increment",rows.length);
    // }
    //3:将新数据保存
    this.list = rows;
    for(var i=0;i<this.list.length;i++){
        this.list[i].cb=false;
    }
    })
    },
// 删除多个商品
// 1.创建变量保存空字符串
    delAll(){
    var str="";
    // 2.创建循环拼接字符串内容
    for(var item of this.list){
        if(item.cb){
            // console.log(item.cb);
        str += item.cid+",";
        }
    }
    str = str.substring(0,str.length-1);
    // console.log(str);
    // 3.判断如果用户没有选商品提示
    if(str.length==0){ alert("请选择商品");return;}
    // 4.发送ajax请求
    var url="cart/delAll";
    var obj={cids:str};
    this.axios.get(url,{params:obj}).then(result=>{
    // 5.重新加载数据
    this.loadMore();
    })
    },
 // 删除商品
    delItem(e){
    // 1.获取当前商品id
    var cid=e.target.dataset.cid;
    // console.log(cid);
    // 2.显示交互确认框
    // 3.如果用户选择"确认"
    if(confirm("是否删除指定数据")){
    var url="cart/delItem";
    var obj={cid:cid};
    this.axios.get(url,{params:obj})
     .then(result=>{
        // 重新加载数据
        this.loadMore();
    //   console.log(result);
    }).catch(err=>{
        return;
    })
    }
    },
// 5.如果用户选择"取消"
    selectAll(){
         
         this.selects=!this.selects;

        for(var i=0;i<this.list.length;i++){
            this.list[i].cb=this.selects;
            }
            this.sumPrice();
    },
    select(index){
        
        this.list[index].cb=!this.list[index].cb;
        this.sumPrice();
        console.log(this.list[index].cb)
        var n=0;    
        for(var i=0;i<this.list.length;i++){
            if(this.list[i].cb==true){
                n++;
            }
            //  console.log(this.list[i].cb);
        }
        if(n==this.list.length){
            this.selects=true;
        }else{
            this.selects=false;
        }
    },
//减少商品数量
    add:function(index){
        //  console.log(index);
        var list=this.list;
        var count= list[index].count;
        count=count+1;
        list[index].count=count;
         this.sumPrice();
    },
    subtract:function(index) {
        var list = this.list;
        var count= list[index].count;
        if(count > 1) {
        count= count - 1;
        list[index].count= count;
        }      
         this.sumPrice(); 
    },

},
computed:{
    // 商品总价
 //   totalPrice() {
       
    // var totalPrice = 0;
    // var len = this.list.length;   
    // for (var i = 0; i<len;i++){

    //      totalPrice += this.list[i].price * this.list[i].count;
    // }
    // return totalPrice;
  //  },
// //商品数量
//     totalCount() {
//     this.show = true;
//     var totalCount = 0;
//     var len = this.list.length;
//     for (var i = 0; i < len; i++) {
//         totalCount+=this.list[i].count;
//     }
//     return totalCount;
// }
},

created(){
var uname=sessionStorage.getItem("uname")
if(uname==null){
    this.isLogin=true;
}
this.loadMore();
// this.totalPrice();
},
}  
</script>
<style scoped>
.cart-logo{
    width: 1200px;
    height: 400px;
    margin: 0 auto;
}
.cart-logo>img{
    width:300px;
    margin: 0 auto;
    display: block;
}
#num{
    width:30px;
    height:25px;
    vertical-align: middle;
    text-align: center;
}
/* *{margin:0;padding:0;} */
a{font-size:12px;
text-decoration:none;
color:#000;}
.table{
    width:1200px;
    margin:0 auto;
    display:flex;
    justify-content:space-between;
    height:40px;
	line-height: 40px;
	background: #e9e9e9;
	border-bottom: none;
    margin-top:20px;
    }
.table>div{float:left;font-size:12px;display:block;margin:0 auto; margin:0;}
.table>div:nth-child(1){padding-left:10px;width: 50px;}
.table>div:nth-child(2){text-align:center;width: 250px;}
.table>div:nth-child(3){text-align:center;width: 250px;}
.table>div:nth-child(4){text-align:center;width: 250px;}
.table>div:nth-child(5){text-align:center;width: 250px;}
.table>div:nth-child(6){text-align:center;width: 150px;}
.clearfix:after {
    content: "";
    display: block;
    clear: both;
    height: 0;
    line-height: 0;
    visibility: hidden;
}

.table1>div:nth-child(1){padding-left:10px;width: 50px;}
.table1>div:nth-child(2){text-align:center;width: 250px;}
.table1>div:nth-child(3){text-align:center;width: 250px;}
.table1>div:nth-child(4){text-align:center;width: 250px;}
.table1>div:nth-child(5){text-align:center;width: 250px;}
.table1>div:nth-child(6){text-align:center;width: 150px;}

.table1{width:1200px;margin:0 auto;
    display:flex;
    justify-content:space-between;
    align-items: center;
        margin-top:20px;
        border-bottom: 1px dashed #dbdbdb;
      }
 button{
     width:27px;height:27px;
     vertical-align:middle;
     border: 1px solid #bdbbbb;
     } 
.spans{
    width:27px;height:27px;
    margin:0px 5px;
    text-align:center;
    box-sizing: border-box;
    line-height:27px;
    border:1px solid #a5a5a5;
    display:inline-block;
    vertical-align:middle;}
.table1>div>img{float: left;margin-right:10px;width:93px;}
.table1>div>div>p:nth-child(1){color: #262626; line-height:40px;}
.table1>div:not(:first-child){font-size:12px;line-height:130px;}
.table-bottom{
    width:1200px;margin:0 auto;
    height:40px;
	line-height: 40px;
	background: #e9e9e9;
    margin-top:20px;
    margin-bottom:20px;}
 .table-bottom>div>input{float:left;width:15px;
        height:15px;
        line-height:20px;
        margin-right:10px;margin-left:10px;
        margin-top:15px;
       }
.fl{float:left;}
.fl>a{margin-right:10px;}
.fl>a:nth-child(4){color:#A10000;}
.fr{float:right;overflow: hidden;}
.fr>span{font-size:12px;margin-right:60px;}
.fr>a{
      width: 150px;
     text-align: center;
     color: #fff;
     display: inline-block;
     background: rgb(193, 0, 0);}
</style>
