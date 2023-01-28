<!--
 * @Author: 申恒杰
 * @Date: 2023-01-24 17:17:49
 * @Description: 铁沸物
 * @FilePath: \echo-ui\packages\components\carousel\src\carousel.vue
-->
<template>
  <div>
      <div class="SwiperBox" @mouseenter="MouseFun()" @mouseleave="MouseFun()">
          <!-- 图片 -->
          <div class="imgBox" :style="{left:`-${leftVal}px`,transition:`${ition}s`}">
            <img :src="item.imgUrl" v-for="(item,index) in imgList" :key="index" />
            <img :src="imgList[0].imgUrl" alt="">
          </div>
          <div class="leftBtn" @click="throttle(PrevFun)">&larr;</div>
          <div class="rightBtn" @click="throttle(NextFun)">&rarr;</div>
          <div class="instBox">
            <div @click="instFun(index)" v-for="(item,index) in imgList.length" :key="index"
            :class="['inst',index==imgShow?'instActv':'']">
            </div>
          </div>
      </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        imgList: [
          {imgUrl: 'https://img-blog.csdnimg.cn/56ccdc8105654867bf3520b262b0ac5a.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbXVrZXM=,size_20,color_FFFFFF,t_70,g_se,x_16'},
          {imgUrl: "https://img-blog.csdnimg.cn/2d94424e09494c5790d0cfef5336d428.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbXVrZXM=,size_20,color_FFFFFF,t_70,g_se,x_16"},
          {imgUrl: "https://img-blog.csdnimg.cn/cd76ed04785e48f7aefd1248e3a53758.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbXVrZXM=,size_20,color_FFFFFF,t_70,g_se,x_16"},
          {imgUrl: "https://img-blog.csdnimg.cn/1b298eabab75404db22c08fc41fa2ac2.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbXVrZXM=,size_20,color_FFFFFF,t_70,g_se,x_16"},
        ],
        leftVal:0,
        flag:true,
        start:null,
        imgWidth:500,
        ition:0.8,
        imgShow:0,
      };
    },
    methods: {
      MouseFun(type){
        type=='移入'?clearTimeout(this.start):this.settime()
      },
      settime(){
          this.start = setInterval(()=>{
          this.NextFun()
        },1500)
      },
      throttle(fun) {
      	if (this.flag) {
      		this.flag = false;
      		fun();
      	  setTimeout(() => {
      			this.flag = true;
      		}, 1200);
      	}
      },
      PrevFun(){
        if(this.leftVal==0){
          this.ition=0
          this.imgShow=this.imgList.length-1
          this.leftVal=(this.imgList.length)*this.imgWidth
           setTimeout(()=>{
             this.ition=0.8
             this.leftVal -= this.imgWidth
           },this.ition*1000)
        }else{
           this.ition=0.8
           this.leftVal -= this.imgWidth
           this.imgShow--
        }
      },
      NextFun(){
        if(this.leftVal==(this.imgList.length-1)*this.imgWidth){
             this.ition=0.8
             this.leftVal+=this.imgWidth
             this.imgShow=0
           setTimeout(()=>{
             this.ition=0
             this.leftVal=0
           },this.ition*1000)
        }else{
           this.ition=0.8
           this.leftVal+=this.imgWidth
           this.imgShow++
        }
      },
      instFun(index){
        this.ition=0.8
        this.leftVal=index*this.imgWidth
        this.imgShow=index
      },
    }
  };
</script>
<style scoped>
  .SwiperBox {
    position: relative;
    width: 500px;
    height: 300px;
    box-sizing: border-box;
    cursor: pointer;
    overflow: hidden;
  }
  .imgBox{
    position: absolute;
    top: 0px;
    left: 0px;
    min-width: 500px;
    height: 300px;
    display: flex;
    justify-content: flex-start;
  }
  .imgBox img {
    flex-shrink: 0;
    width: 500px;
    height: 300px;
  }
  .leftBtn,.rightBtn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(109, 109, 109, 0.445);
    color: #fff;
    border-radius: 50%;
    cursor: pointer;
    font-size: 12px;
    font-weight: 500;
  }
  .leftBtn {
    left: 10px;
  }
  .rightBtn {
    right: 10px;
  }
  .instBox{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10px;
    display: flex;
  }
  .inst{
    width: 10px;
    height: 10px;
    border: 1px solid #ccc;
    margin-right: 8px;
    background: #fff;
    border-radius: 50%;
    cursor: pointer;
  }
  .inst:last-child{
    margin-right: 0px;
  }
  .instActv{
    border: 1px solid #ff0000;
    background: #ff0000;
  }
  #app{
    width: 100%;
    padding: 120px;
    display: flex;
    justify-content: center;
  }
</style>