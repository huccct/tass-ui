<style>
  .example{
      border: 1px solid #f5f5f5;
      border-radius: 5px;
      padding:0px;
  }
  
  details > summary:first-of-type {
      font-size: 10px;
      padding: 8px 0;
      cursor: pointer;
      color: #1989fa;
  }
</style>
# Backtop 回到顶部
## 基础用法
点击按钮直接回到页面顶部。
<div class="example">
     <div v-show="btnShow" class="tas-backtop">
    <tass-icon name="rocket"  class="tas-backtop-icon" :src="BackTop"  @click="backTop"></tass-icon>
  </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div v-show="btnShow" class="tas-backtop">
    <tass-icon name="rocket"  class="tas-backtop-icon" :src="BackTop"  @click="backTop"></tass-icon>
  </div>
</template>

```
</details>
