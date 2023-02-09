<script setup>
import Default from './default.vue'
import Updown from './updown.vue'
import Address from './address.vue'
</script>
<style>
  .example{
      border: 1px solid #f5f5f5;
      border-radius: 5px;
      padding:20px
  }
  .tass-button {
      margin:10px 5px;
  }
  
  details > summary:first-of-type {
      font-size: 10px;
      padding: 8px 0;
      cursor: pointer;
      color: #1989fa;
  }
</style>
# Swiper 轮播图
## 基础用法

<div class='example'>
  <Default></Default>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <tass-carousel v-model="active1">
    <tass-carousel-item id="1">
      <div style="color: white;text-align: center;width:100%;height:300px;line-height:300px;background-color:#009688;">条目一</div>
    </tass-carousel-item>
    <tass-carousel-item id="2">
      <div style="color: white;text-align: center;width:100%;height:300px;line-height:300px;background-color:#5FB878;">条目二</div>
    </tass-carousel-item>
    <tass-carousel-item id="3">
      <div style="color: white;text-align: center;width:100%;height:300px;line-height:300px;background-color:#FFB800;">条目三</div>
    </tass-carousel-item>
    <tass-carousel-item id="4">
      <div style="color: white;text-align: center;width:100%;height:300px;line-height:300px;background-color:#FF5722;">条目四</div>
    </tass-carousel-item>
  </tass-carousel>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const active1 = ref("1")

    return {
      active1
    }
  }
}
</script>

```
</details>

## 不同方向与不同切换动画
<div class=example>
  <Updown></Updown>
</div>
<div class=example>
通过 anim 属性来控制切换的放向与动画，支持 default左右切换(默认)、updown上线切换、fade渐隐渐显切换
</div>
<details>
<summary>展开查看</summary>

```vue
<template>
  <div style="display:flex;justify-content: space-around;flex-wrap:wrap">
  <tass-carousel v-model="activeAnmi1" anim="updown" style="display:inline-block;width:32%" :autoplay="true">
    <tass-carousel-item id="1">
      <div style="color: white;text-align: center;width:100%;height:300px;line-height:300px;background-color:#009688;">条目一</div>
    </tass-carousel-item>
    <tass-carousel-item id="2">
      <div style="color: white;text-align: center;width:100%;height:300px;line-height:300px;background-color:#5FB878;">条目二</div>
    </tass-carousel-item>
    <tass-carousel-item id="3">
      <div style="color: white;text-align: center;width:100%;height:300px;line-height:300px;background-color:#FFB800;">条目三</div>
    </tass-carousel-item>
    <tass-carousel-item id="4">
      <div style="color: white;text-align: center;width:100%;height:300px;line-height:300px;background-color:#FF5722;">条目四</div>
    </tass-carousel-item>
  </tass-carousel>
  <tass-carousel v-model="activeAnmi2" style="width:32%">
    <tass-carousel-item id="1">
      <div style="color: white;text-align: center;width:100%;height:300px;line-height:300px;background-color:#009688;">条目一</div>
    </tass-carousel-item>
    <tass-carousel-item id="2">
      <div style="color: white;text-align: center;width:100%;height:300px;line-height:300px;background-color:#5FB878;">条目二</div>
    </tass-carousel-item>
    <tass-carousel-item id="3">
      <div style="color: white;text-align: center;width:100%;height:300px;line-height:300px;background-color:#FFB800;">条目三</div>
    </tass-carousel-item>
    <tass-carousel-item id="4">
      <div style="color: white;text-align: center;width:100%;height:300px;line-height:300px;background-color:#FF5722;">条目四</div>
    </tass-carousel-item>
  </tass-carousel>
  <tass-carousel v-model="activeAnmi3" anim="fade" style="width:32%;">
    <tass-carousel-item id="1">
      <div style="color: white;text-align: center;width:100%;height:300px;line-height:300px;background-color:#009688;">条目一</div>
    </tass-carousel-item>
    <tass-carousel-item id="2">
      <div style="color: white;text-align: center;width:100%;height:300px;line-height:300px;background-color:#5FB878;">条目二</div>
    </tass-carousel-item>
    <tass-carousel-item id="3">
      <div style="color: white;text-align: center;width:100%;height:300px;line-height:300px;background-color:#FFB800;">条目三</div>
    </tass-carousel-item>
    <tass-carousel-item id="4">
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
      activeAnmi1,activeAnmi2,activeAnmi3,activeAnmi4
    }
  }
}
</script>
```
</details>

## 控制器位置
<div class="example">
    <Address></Address>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <tass-carousel v-model="active3" indicator="outside">
    <tass-carousel-item id="1">
      <div style="color: white;text-align: center;width:100%;height:300px;line-height:300px;background-color:#009688;">条目一</div>
    </tass-carousel-item>
    <tass-carousel-item id="2">
      <div style="color: white;text-align: center;width:100%;height:300px;line-height:300px;background-color:#5FB878;">条目二</div>
    </tass-carousel-item>
    <tass-carousel-item id="3">
      <div style="color: white;text-align: center;width:100%;height:300px;line-height:300px;background-color:#FFB800;">条目三</div>
    </tass-carousel-item>
    <tass-carousel-item id="4">
      <div style="color: white;text-align: center;width:100%;height:300px;line-height:300px;background-color:#FF5722;">条目四</div>
    </tass-carousel-item>
  </tass-carousel>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const active3 = ref("1")

    return {
      active3
    }
  }
}
</script>

```

</details>