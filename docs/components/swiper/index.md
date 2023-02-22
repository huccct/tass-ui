<!--
 * @Author: 申恒杰
 * @Date: 2023-02-08 19:27:33
 * @Description: 铁沸物
 * @FilePath: \tass-ui\docs\components\swiper\index.md
-->
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
  
  details > summary:first-of-type {
      font-size: 10px;
      padding: 8px 0;
      cursor: pointer;
      color: #1989fa;
  }
</style>
# Swiper 轮播图
在有限空间内，循环播放同一类型的图片、文字等内容
## 基础用法
<div class='example'>
  <Default></Default>
</div>
<details>
<summary>展开查看</summary>

```vue
<template>
  <tass-carousel v-model="active1" width="100%" height="280px">
    <tass-carousel-item id="1">
      <div style="color: white;text-align: center;width:100%;height:280px;line-height:280px;background-color:#9090C0;">一</div>
    </tass-carousel-item>
    <tass-carousel-item style="top: -8px;" id="2">
      <div style="color: white;text-align: center;width:100%;height:280px;line-height:280px;background-color:#282858;">二</div>
    </tass-carousel-item>
    <tass-carousel-item style="top: -8px;" id="3">
      <div style="color: white;text-align: center;width:100%;height:280px;line-height:280px;background-color:#000840;">三</div>
    </tass-carousel-item>
    <tass-carousel-item style="top: -8px;" id="4">
      <div style="color: white;text-align: center;width:100%;height:280px;line-height:280px;background-color:#8888D0;">四</div>
    </tass-carousel-item>
  </tass-carousel>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const active1 = ref("1");
</script>

```
</details>

## 不同方向与不同切换动画
通过 anim 属性来控制切换的放向与动画，支持 default左右切换(默认)、updown上线切换、fade渐隐渐显切换
<div class='example'>
  <Updown style="width: 100%;"></Updown>
</div>
<details>
<summary>展开查看</summary>

```vue
<template>
  <div style="display:flex;flex-wrap:wrap; margin:20px">
  <tass-carousel v-model="activeAnmi1" anim="updown" style="display:inline-block;width:30%" :autoplay="true">
    <tass-carousel-item id="1">
      <div style="color: white;text-align: center;width:100%;height:300px;line-height:260px;background-color:#9090C0;">一</div>
    </tass-carousel-item>
    <tass-carousel-item style="top: -8px;" id="2">
      <div style="color: white;text-align: center;width:100%;height:300px;line-height:260px;background-color:#282858;">二</div>
    </tass-carousel-item>
    <tass-carousel-item style="top: -8px;" id="3">
      <div style="color: white;text-align: center;width:100%;height:300px;line-height:260px;background-color:#000840;">三</div>
    </tass-carousel-item>
    <tass-carousel-item style="top: -8px;" id="4">
      <div style="color: white;text-align: center;width:100%;height:300px;line-height:260px;background-color:#8888D0;">四</div>
    </tass-carousel-item>
  </tass-carousel>
  <tass-carousel v-model="activeAnmi2" style="width:32%" interval="5000">
    <tass-carousel-item id="1">
      <div style="color: white;text-align: center;width:100%;height:300px;line-height:300px;background-color:#9090C0;">一</div>
    </tass-carousel-item>
    <tass-carousel-item style="top: -8px;" id="2">
      <div style="color: white;text-align: center;width:100%;height:300px;line-height:300px;background-color:#282858;">二</div>
    </tass-carousel-item>
    <tass-carousel-item style="top: -8px;" id="3">
      <div style="color: white;text-align: center;width:100%;height:300px;line-height:300px;background-color:#000840;">三</div>
    </tass-carousel-item>
    <tass-carousel-item style="top: -8px;" id="4">
      <div style="color: white;text-align: center;width:100%;height:300px;line-height:300px;background-color:#8888D0;">四</div>
    </tass-carousel-item>
  </tass-carousel>
  <tass-carousel v-model="activeAnmi3" anim="fade" style="width:32%;">
    <tass-carousel-item id="1">
      <div style="color: white;text-align: center;width:100%;height:300px;line-height:300px;background-color:#9090C0;">一</div>
    </tass-carousel-item>
    <tass-carousel-item style="top: -8px;" id="2">
      <div style="color: white;text-align: center;width:100%;height:300px;line-height:300px;background-color:#282858;">二</div>
    </tass-carousel-item>
    <tass-carousel-item style="top: -8px;" id="3">
      <div style="color: white;text-align: center;width:100%;height:300px;line-height:300px;background-color:#000840;">三</div>
    </tass-carousel-item>
    <tass-carousel-item style="top: -8px;" id="4">
      <div style="color: white;text-align: center;width:100%;height:300px;line-height:300px;background-color:#8888D0;">四</div>
    </tass-carousel-item>
  </tass-carousel>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const activeAnmi1 = ref("1");
  const activeAnmi2 = ref("1");
  const activeAnmi3 = ref("1");
   
</script>
```
</details>

## 控制器位置
通过indicator属性决定控制器位置，inside:内部(默认) outside:外部 none:不显示
<div class="example">
    <Address></Address>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <tass-carousel v-model="active3"  indicator="outside" width="100%" height="280px">
    <tass-carousel-item id="1">
      <div style="color: white;text-align: center;width:100%;height:300px;line-height:300px;background-color:#9090C0;">一</div>
    </tass-carousel-item>
    <tass-carousel-item style="top: -8px;" id="2">
      <div style="color: white;text-align: center;width:100%;height:300px;line-height:300px;background-color:#282858;">二</div>
    </tass-carousel-item>
    <tass-carousel-item style="top: -8px;" id="3">
      <div style="color: white;text-align: center;width:100%;height:300px;line-height:300px;background-color:#000840;">三</div>
    </tass-carousel-item>
    <tass-carousel-item style="top: -8px;" id="4">
      <div style="color: white;text-align: center;width:100%;height:300px;line-height:300px;background-color:#8888D0;">四</div>
    </tass-carousel-item>
  </tass-carousel>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const active3 = ref("1")
</script>

```

</details>