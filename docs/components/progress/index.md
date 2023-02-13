
<style>
  .example{
      border: 1px solid #f5f5f5;
      border-radius: 5px;
      padding:20px;
  }
  .mask {
  position: absolute;
  top: 50%;
  left: 24%;
  transform: translate(-50%, -50%);
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
  <div style="width: 640px;padding: 20px 0;">
    <tass-progress color="#918fc0" :percent='60' select="on"></tass-progress>
    <tass-progress color="#C0B2FE" :percent='50' select="on"></tass-progress>
    <tass-progress color="#ADA9BB" :percent='100' select="on"></tass-progress>
    <tass-progress color="#8888d0" :percent='80' status="warning" select="on"></tass-progress>
    <tass-progress  color="#8D80FC" :percent='40' status="success" select="on"></tass-progress>
  </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div style="width: 640px;padding: 20px 0;">
   <tass-progress color="#918fc0" :percent='60' select="on"></tass-progress>
    <tass-progress color="#C0B2FE" :percent='50' select="on"></tass-progress>
    <tass-progress color="#ADA9BB" :percent='100' select="on"></tass-progress>
    <tass-progress color="#8888d0" :percent='80' status="warning" select="on"></tass-progress>
    <tass-progress  color="#8D80FC" :percent='40' status="success" select="on"></tass-progress>
  </div>
</template>
```
</details>

## 百分比内显
百分比不占用额外控件，适用于文件上传等场景。
<div class="example">
  <div style="width: 640px;padding: 20px 0;">
    <tass-progress color="#918fc0" :percent='60' select="on" type="in"></tass-progress>
    <tass-progress color="#595d83" :percent='100' select="on" type="in"></tass-progress>
    <tass-progress color="#C0B2FE" :percent='80' select="on" type="in"></tass-progress>
    <tass-progress color="#ADA9BB" :percent='40' select="on" type="in"></tass-progress>
  </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div style="width: 640px;padding: 20px 0;">
    <tass-progress color="#918fc0" :percent='60' select="on" type="in"></tass-progress>
    <tass-progress color="#595d83" :percent='100' select="on" type="in"></tass-progress>
    <tass-progress color="#C0B2FE" :percent='80' select="on" type="in"></tass-progress>
    <tass-progress color="#ADA9BB" :percent='40' select="on" type="in"></tass-progress>
  </div>
</template>
```
</details>

## 环形进度条
可以通过控制 svg 的 stroke-dasharray 属性值来达到控制圆环进度的变化。
<div class="example">
  <div style="width: 640px;padding: 20px 0;">
    <tass-progress color="#373271" :percent='50'></tass-progress>
    <tass-progress color="#ADA9BB" :percent='90' status="warning"></tass-progress>
    <tass-progress color="#8888d0 " :percent='100' status="success"></tass-progress>
  </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div style="width: 640px;padding: 20px 0;">
   <tass-progress color="#373271" :percent='50'></tass-progress>
    <tass-progress color="#ADA9BB" :percent='90' status="warning"></tass-progress>
    <tass-progress color="#8888d0 " :percent='100' status="success"></tass-progress>
  </div>
</template>
```
</details>