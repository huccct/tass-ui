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
# Upload 上传
## 基础用法
通过点击上传文件。
<div class="example">
    <div>
        <tass-button type="primary" @click="beginUpload">点击上传</tass-button>
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <tass-button type="primary" @click="beginUpload">点击上传</tass-button>
  </div>
</template>
```
</details>