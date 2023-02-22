<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-02-08 23:09:59
 * @LastEditors: Huccct
 * @LastEditTime: 2023-02-22 22:19:15
-->
<script setup lang="ts">
  import AllIcon from './allIcon.vue'
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
# Icon 图标
Tass UI 提供了一套常用的图标集合。
## 基础用法

<div class="example">
  <tass-icon name="magnifier"></tass-icon>&nbsp;
  <tass-icon name="trash" style="color:red;"></tass-icon>&nbsp;
  <tass-button type="primary" icon="tas-icon-enterdown">下载</tass-button>
  <br />
  <br />
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <tass-icon name="magnifier"></tass-icon>&nbsp;
  <tass-icon name="trash" style="color:red;"></tass-icon>&nbsp;
  <tass-button type="primary" icon="tas-icon-enterdown">下载</tass-button>
  <br />
  <br />
</template>
```
</details>

## 所有图标
<div class="example">
  <AllIcon/>
  
</div>
