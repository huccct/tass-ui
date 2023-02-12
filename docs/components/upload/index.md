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
  <tass-upload></tass-upload>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div style="width: 500px; border: 1px solid #ddd; padding: 20px">
    <tass-upload @changeUpload="changeUpload" @deleteUpload="deleteUpload"></tass-upload>
  </div>
</template>

<script>
  // 上传更新文件，第一个参数为当前上传文件，第二个参数为上传之后的文件列表
  const changeUpload = (file: any, fileList: any) => {
    console.log(file, fileList);
  };
  // 删除更新文件，第一个参数为当前删除文件，第二个参数为上传之后的文件列表
  const deleteUpload = (file: any, fileList: any) => {
    console.log(file, fileList);
  };
</script>
```
</details>