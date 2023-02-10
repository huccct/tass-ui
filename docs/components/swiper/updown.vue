<!--
 * @Author: 申恒杰
 * @Date: 2023-02-09 11:43:51
 * @Description: 铁沸物
 * @FilePath: \tass-ui\docs\components\swiper\updown.vue
-->
<template>
  <div style="display:flex;flex-wrap:wrap; margin:20px">
  <tass-carousel v-model="activeAnmi1" anim="updown" style="display:inline-block;width:30%" :autoplay="true">
    <tass-carousel-item id="1">
      <div style="color: white;text-align: center;width:100%;height:300px;line-height:260px;background-color:#009688;">条目一</div>
    </tass-carousel-item>
    <tass-carousel-item style="top: -8px;" id="2">
      <div style="color: white;text-align: center;width:100%;height:300px;line-height:260px;background-color:#5FB878;">条目二</div>
    </tass-carousel-item>
    <tass-carousel-item style="top: -8px;" id="3">
      <div style="color: white;text-align: center;width:100%;height:300px;line-height:260px;background-color:#FFB800;">条目三</div>
    </tass-carousel-item>
    <tass-carousel-item style="top: -8px;" id="4">
      <div style="color: white;text-align: center;width:100%;height:300px;line-height:260px;background-color:#FF5722;">条目四</div>
    </tass-carousel-item>
  </tass-carousel>
  <tass-carousel v-model="activeAnmi2" style="width:32%">
    <tass-carousel-item id="1">
      <div style="color: white;text-align: center;width:100%;height:300px;line-height:300px;background-color:#009688;">条目一</div>
    </tass-carousel-item>
    <tass-carousel-item style="top: -8px;" id="2">
      <div style="color: white;text-align: center;width:100%;height:300px;line-height:300px;background-color:#5FB878;">条目二</div>
    </tass-carousel-item>
    <tass-carousel-item style="top: -8px;" id="3">
      <div style="color: white;text-align: center;width:100%;height:300px;line-height:300px;background-color:#FFB800;">条目三</div>
    </tass-carousel-item>
    <tass-carousel-item style="top: -8px;" id="4">
      <div style="color: white;text-align: center;width:100%;height:300px;line-height:300px;background-color:#FF5722;">条目四</div>
    </tass-carousel-item>
  </tass-carousel>
  <tass-carousel v-model="activeAnmi3" anim="fade" style="width:32%;">
    <tass-carousel-item id="1">
      <div style="color: white;text-align: center;width:100%;height:300px;line-height:300px;background-color:#009688;">条目一</div>
    </tass-carousel-item>
    <tass-carousel-item style="top: -8px;" id="2">
      <div style="color: white;text-align: center;width:100%;height:300px;line-height:300px;background-color:#5FB878;">条目二</div>
    </tass-carousel-item>
    <tass-carousel-item style="top: -8px;" id="3">
      <div style="color: white;text-align: center;width:100%;height:300px;line-height:300px;background-color:#FFB800;">条目三</div>
    </tass-carousel-item>
    <tass-carousel-item style="top: -8px;" id="4">
      <div style="color: white;text-align: center;width:100%;height:300px;line-height:300px;background-color:#FF5722;">条目四</div>
    </tass-carousel-item>
  </tass-carousel>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const activeAnmi1 = ref("1")
    const activeAnmi2 = ref("1")
    const activeAnmi3 = ref("1")
    return {
      activeAnmi1,activeAnmi2,activeAnmi3
    }
  }
}
</script>