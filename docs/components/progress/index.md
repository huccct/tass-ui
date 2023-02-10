<style>
  .example{
      border: 1px solid #f5f5f5;
      border-radius: 5px;
      padding:20px;
  }
  
  details > summary:first-of-type {
      font-size: 10px;
      padding: 8px 0;
      cursor: pointer;
      color: #1989fa;
  }
</style>
# Progress 进度条
## 基础用法
用于展示操作进度，告知用户当前状态和预期。
<div class="example">
  <div style="width:540px;padding:20px 0;">
    <tass-progress color="#e6a23c"  percent="60" ></tass-progress>
    <tass-progress color="#67c23a"  percent="100" ></tass-progress>
    <tass-progress  percent="30" status="warning"></tass-progress>
  </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div style="width:540px;padding:20px 0;">
    <tass-progress color="#e6a23c"  percent="60" ></tass-progress>
    <tass-progress color="#67c23a"  percent="100" ></tass-progress>
    <tass-progress  percent="30" status="warning"></tass-progress>
  </div>
</template>
```
</details>