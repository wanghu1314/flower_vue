<template>
  <div class="container">
    <div class="content">
      <div class="front">
        <div class="front_assort1">
          <span>排序:</span>
          <router-link :to="{path:'/newlist',query:{xin:0}}" title="新品">新品</router-link>
          <router-link :to="{path:'/newlist',query:{xin:1}}" title="人气">人气</router-link>
          <a href="#" title="价格">
            价格
            <em class="prSort01"></em>
          </a>
        </div>
        <div class="fenye">
          <div class="page-b"  type="primary" @click="loadMore">
            <div class="page" v-if="pc!==1">
                <span @click="prev" v-if="pno!==1">&lt;</span>
                <span @click="first" v-if="firstPage == true" v-bind:class="{active:1==pno}">1</span>
                <span class="point" v-if="pointN == true">...</span>
                <span v-bind:class="[{active : page == pno},{point : page == '...'}]"
                      v-for="(page, index) of pageArr" :key="index"  @click="goTo(page)">{{page}}</span>
                <span class="point" v-if="pointL == true">...</span>
                <span @click="last" v-if="lastPage == true"
                      v-bind:class="{active : pc == pno}">{{pc}}</span>
                <span @click="next" v-if="pno !== pc">&gt;</span>
            </div>
          </div>
        </div>
        <div class="front_assort2">
          <span>{{pages}}</span>个结果
        </div>
      </div>
      <div class="product">
        <ul id="p">
          <li v-for="(item,i) of p" :key="i"> 
            <router-link :to="{path:'/details',query:{fid:item.fid}}">
              <div class="freely">
                <img :src="item.pic" alt="">
              </div>
              <p class="pro_name" v-text="item.title"></p>
              <div class="pro_price">
                <p>￥<span v-text="item.price"></span></p>
                <p>APP折后价￥899元，省100元</p>
              </div>  
            </router-link>
          </li>
        </ul> 
      </div>
      <div class="fenye_bottom">
        <div class="fenye">
            <div class="page-b"  type="primary" @click="loadMore">
                <div class="page" v-if="pc!==1">
                    <span @click="prev" v-if="pno!==1">&lt;</span>
                    <span @click="first" v-if="firstPage == true" v-bind:class="{active:1==pno}">1</span>
                    <span class="point" v-if="pointN == true">...</span>
                    <span v-bind:class="[{active : page == pno},{point : page == '...'}]"
                          v-for="(page, index) of pageArr" :key="index"  @click="goTo(page)">{{page}}</span>
                    <span class="point" v-if="pointL == true">...</span>
                    <span @click="last" v-if="lastPage == true"
                          v-bind:class="{active : pc == pno}">{{pc}}</span>
                    <span @click="next" v-if="pno !== pc">&gt;</span>
                </div>
            </div>
        </div>
      </div>  
    </div>
  </div>
</template>
<script>
import '../assets/css/base.css';
export default {
    data(){
      return{
       p:[],
       pics:[],
       pages:"",
       pc:"",//页总数
       pno:1,//页码
       ps:16 , //页大小
       firstPage:'',//是否显示第一页
       lastPage:'',//是否显示最后一页
       pointN:'',//省略号前部
       pointL:'',//省略号后部
      }
    },
methods:{   
      first:function () { 
             this.pno=1;
            },
      prev:function () {
          this.pno = this.pno-1;
      },
      next:function () {
          this.pno = this.pno+1;
      },
      last:function () {
          this.pno = this.pc;
      },
      goTo:function (index) {
          this.pno = index;
      },
xinpin(){ },
loadMore(){//加载更多的数据
      //  console.log(123);
        var url ="product/product";
        //将当前页码加1
      if(this.pno<1){
        this.pno++;
        // this.show(this.pno,this.ps);
        }
        //创建参数对象
        // var sid=session.sid;
        var obj = {pno:this.pno,pageSize:this.ps};
        this.axios.get(url,{params:obj}).then(result=>{
           this.p=result.data.data;
          //  console.log(result)
           this.pages=result.data.pages;
           this.pc=result.data.pc;
          // 数据覆盖
          this.list = result.data.data;
            // console.log(this.list)
        })
      }
},
created(){ this.loadMore();},
computed:{
      pageArr:function () {
          var arr = [];
          if(this.pc<9){//页数小于9全部显示
              this.firstPage =true;
              this.lastPage = true;
              this.pointN = false;
              this.pointL = false;
              for (var i=2;i<=this.pc-1;i++){
                  // console.log(i);
                  arr.push(i); 
                  }
              return arr;
          } 
      }
}
}
</script>
<style scoped>

.page{
  font-size:16px;
}
.page span{
  margin:18px 5px;
  color: #666;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  display: block;
  float: left;
  border: solid 1px #333;
  border-radius: 2px;
}
 span.active{background-color: #333;color:#fff;}
 /* span:hover{background-color: #333;color:#fff;} */


/*商品副界面*/
/*主体居中*/

.content{
  width:1200px;
  margin:0 auto;
  position: relative;
  overflow: hidden;
}
/* 上下边框线 行高 字体*/
.front{
  height:55px;
  border-top:1px solid #d2d2d2;
  border-bottom:1px solid #d2d2d2;line-height:55px;
  font-size:12px;
}
/*左*/
/**/
.front>.front_assort1{
  margin-left:25px;
  display:inline-block;
}
.front>.front_assort1>a{
  margin-left:35px;
  padding-right:12px;
  display: inline-block;
  position: relative;
  color:#666;
}
.front>.front_assort1 em{
  display: inline-block;
  width:10px;
  height:12px;
  background:url("../../public/img/crumbsIco.gif");
  position:absolute;
  right:0;
  top:22px;
}
/*价格选项*/
/* 默认 */
.front>.front_assort1 em.prSort01{
  background-position:-62px 0;
}
/* 通过点击改变class图片定位 上*/
.front>.front_assort1 em.prSort02{
  background-position:-72px 0;
}
/* 通过点击改变class图片定位 下 */
.front>.front_assort1 em.prSort03{
  background-position:-82px 0;
}
/*右*/
.front>.front_assort2{
  float:right;
  color:#b3b3b3;
  margin:2px 25px 0 0;
}
.front>.fenye{
  float:right;
  /* margin: 18px 0 0 0; */
  /* display: inline; */
}
.fenye>span{
  background: #333;
  color: #fff !important;
  border: solid 1px #333;
  border-radius: 2px;
}
.fenye>span,.fenye>a{
  float: left;
  display: block;
  color:#666;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  margin-right: 18px;
}
/* prev左箭头  next右箭头 */
.fenye>.next,.fenye>.prev{
  background:url("../../public/img/pagination.gif");
  font-size:0;
  text-align: center;
}
.fenye>.next{
  background-position:-20px 0;
}
.fenye>.prev{
  background-position:0 0;
}

/*商品列*/
.product{
  margin-top:25px;
}
.product li{
  float:left;
  width:280px;
  margin: 0 24px 25px 0;
  border: solid 1px #fff;
  background: #fff;
  transition-duration: .1s;
  transition-timing-function: linear;
  position: relative;
}
/* hover 阴影效果 */
.product li:hover{
  box-shadow: #b3b3b3 0px 3px 3px 3px;
}
.product li:nth-child(4n){
  margin-right:0;/*每行第四个li右外边距为0*/
}
.product .freely{
  width:280px;
  height:280px;
  padding-bottom: 10px;
}
.product img{
  width:100%;
}
.product p{
  font-size:12px;
  color:#666;
}
.pro_name{
  display: block;
  height: 20px;
  padding: 0px 20px 0px 20px;
  line-height: 2;
  overflow: hidden;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}
.pro_price{
  padding:0 20px 15px 20px;
}
.pro_price p{
  padding-top:8px;
}
.pro_price>:nth-child(1){
  color:#999;
}
.pro_price>:nth-child(2){
  color:#B2904C;
}
/*底部分页*/
.fenye_bottom{
  width:1200px;
  float:right;
  padding-top: 5px;
  margin-bottom: 20px;
  display:block;
}
.fenye_bottom div{
  float:right;
}
</style>

