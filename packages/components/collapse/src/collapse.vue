<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-30 11:59:28
 * @LastEditors: Huccct
 * @LastEditTime: 2023-01-30 12:18:11
-->
<template>
  <!--手风琴组件-->
  <div class="ec-collapse">
    <ul class="ec-collapse-ul">
      <li>
        <div class="ec-collapse-title" @click="toggle(1)">标题一</div>
        <ec-collapse-transition name="slide">
          <div class="ec-collapse-content" v-show="show === 1">
            <slot name="one"></slot>
          </div>
        </ec-collapse-transition>
      </li>
      <li>
        <div class="ec-collapse-title" @click="toggle(2)">标题二</div>
        <ec-collapse-transition name="slide">
          <div class="ec-collapse-content" v-show="show === 2">
            <slot name="two"></slot>
          </div>
        </ec-collapse-transition>
      </li>
      <li>
        <div class="ec-collapse-title" @click="toggle(3)">标题三</div>
        <ec-collapse-transition name="slide">
          <div class="ec-collapse-content" v-show="show === 3">
            <slot name="three"></slot>
          </div>
        </ec-collapse-transition>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="EchoCollapse">
  import { ref } from 'vue';
  let show = ref(0);

  function toggle(index) {
    // 获取index 来判断当前点击并展示
    // console.log(show.value, index);

    if (show.value === index) show.value = 0;
    else show.value = index;
  }
</script>
