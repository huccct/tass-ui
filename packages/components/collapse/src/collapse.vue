<template>
  <!--手风琴组件-->
  <div>
    <ul>
      <li>
        <div class="title" @click="toggle(1)">标题一</div>
        <transition name="slide">
          <div class="content" v-show="show===1">
            <slot name="one"></slot>
          </div>
        </transition>
      </li>
      <li>
        <div class="title" @click="toggle(2)">标题二</div>
        <transition name="slide">
          <div class="content" v-show="show===2">
            <slot name="two"></slot>
          </div>
        </transition>
      </li>
      <li>
        <div class="title" @click="toggle(3)">标题三</div>
        <transition name="slide">
          <div class="content" v-show="show===3">
            <slot name="three"></slot>
          </div>
        </transition>
      </li>
    </ul>
  </div>
</template>
 
<script lang="ts" setup name="EchoCollapse">
import { computed, onMounted, onUnmounted, ref } from 'vue';
const show = ref(0);
 
function toggle(index) {
      // 获取index 来判断当前点击并展示
      if(this.show==index) this.show=0;
      else
      this.show = index;
};
  

</script>
<style scoped lang="scss">
ul {
  list-style: none;
  margin: 0;
  padding: 0;
    .title {
    height: 50px;
    line-height: 50px;
    padding-left: 10px;
    border: 1px solid #c0c0c1;
    border-radius: 10px;
    cursor: pointer;
      .content {
      padding-left: 30px;
      background: rgb(250, 247, 247);
      color: rgb(56, 57, 59);
    }
  }
}



</style>