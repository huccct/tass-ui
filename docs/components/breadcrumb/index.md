<!--
 * @Descripttion: Spicy chicken
 * @Author: YuShu Xiao
 * @Date: 2023-02-12 11:38:41
 * @LastEditors: YuShu Xiao
 * @LastEditTime: 2023-02-13 21:29:58
-->
<style>
    details > summary:first-of-type {
      font-size: 10px;
      padding: 8px 0;
      cursor: pointer;
      color: #1989fa;
  }
</style>
# Breadcrumb 面包屑
Breadcrumb 面包屑
## 基础用法
在 tass-breadcrumb 中使用 tass-breadcrumb-item 标签表示从首页开始的每一级。 该组件接受一个 String 类型的参数 separator-icon来作为分隔符。 默认值为"chevronright"。

<div class="example">
<tass-breadcrumb>
    <tass-breadcrumb-item  :to="{ path: '/' }">homepage</tass-breadcrumb-item>
    <tass-breadcrumb-item>promotion management</tass-breadcrumb-item>
    <tass-breadcrumb-item to="/">promotion list</tass-breadcrumb-item>
    <tass-breadcrumb-item>promotion list</tass-breadcrumb-item>
  </tass-breadcrumb>
</div>
<details>
<summary>展开查看</summary>

```vue
<template>
  <tass-breadcrumb>
    <tass-breadcrumb-item :to="{ path: '/' }">homepage</tass-breadcrumb-item>
    <tass-breadcrumb-item>promotion management</tass-breadcrumb-item>
    <tass-breadcrumb-item to="/">promotion list</tass-breadcrumb-item>
    <tass-breadcrumb-item>promotion list</tass-breadcrumb-item>
  </tass-breadcrumb>
</template>
```
</details>

## 图标分隔符
通过设置 separator-icon 可使用相应的 tassUI中icon的名字作为分隔符
<div class="example" >
<tass-breadcrumb separator-icon="rocket">
    <tass-breadcrumb-item  :to="{ path: '/' }">homepage</tass-breadcrumb-item>
    <tass-breadcrumb-item>promotion management</tass-breadcrumb-item>
    <tass-breadcrumb-item to="/">promotion list</tass-breadcrumb-item>
    <tass-breadcrumb-item>promotion list</tass-breadcrumb-item>
  </tass-breadcrumb>
</div>
<details>
<summary>展开查看</summary>

```vue
<template>
  <tass-breadcrumb separator-icon="rocket">
    <tass-breadcrumb-item :to="{ path: '/' }">homepage</tass-breadcrumb-item>
    <tass-breadcrumb-item>promotion management</tass-breadcrumb-item>
    <tass-breadcrumb-item to="/">promotion list</tass-breadcrumb-item>
    <tass-breadcrumb-item>promotion list</tass-breadcrumb-item>
  </tass-breadcrumb>
</template>
```
</details>

## 路由跳转记录
通过设置replace 如果设置该属性为 true, 导航将不会留下历史记录
<div class="example" >
<tass-breadcrumb separator-icon="rocket">
    <tass-breadcrumb-item  :to="{ path: '/' }" replace>homepage</tass-breadcrumb-item>
    <tass-breadcrumb-item>promotion management</tass-breadcrumb-item>
  </tass-breadcrumb>
</div>
<details>
<summary>展开查看</summary>

```vue
<template>
  tass-breadcrumb separator-icon="rocket">
    <tass-breadcrumb-item  :to="{ path: '/' }" replace>homepage</tass-breadcrumb-item>
    <tass-breadcrumb-item>promotion management</tass-breadcrumb-item>
  </tass-breadcrumb>
</template>
```
</details>