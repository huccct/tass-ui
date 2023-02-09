<script setup>
  import Base from './base.vue'
</script>
<style>
    details > summary:first-of-type {
      font-size: 10px;
      padding: 8px 0;
      cursor: pointer;
      color: #1989fa;
  }
</style>
# Alert 提示
用于页面中展示重要的提示信息。
## 基础用法
Alert 组件不属于浮层元素，不会自动消失或关闭。

Alert 组件提供四种类型，由 type 属性指定，默认值为 info。
<div class="example">
<div>
  <tass-alert title="hello tassUI"  type="error"> </tass-alert>
  <tass-alert title="hello tassUI"  type="success"> </tass-alert>
  <tass-alert title="hello tassUI"  type="info"> </tass-alert>
  <tass-alert title="hello tassUI"  type="warning"> </tass-alert>
</div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
<div>
  <tass-alert title="hello tassUI"  type="error"> </tass-alert>
  <tass-alert title="hello tassUI"  type="success"> </tass-alert>
  <tass-alert title="hello tassUI"  type="info"> </tass-alert>
  <tass-alert title="hello tassUI"  type="warning"> </tass-alert>
</div>
</template>
```
</details>

## 自定义关闭按钮

你可以设置 Alert 组件是否为可关闭状态， 关闭时的回调函数同样可以定制。 closable 属性决定 Alert 组件是否可关闭， 该属性接受一个 Boolean，默认为 false。 当 Alert 组件被关闭时会触发 close 事件。
<div class="example">
<Base/>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <tass-alert show-icon title="hello tassUI"  type="error" closeable> </tass-alert>
  <tass-alert show-icon title="hello tassUI"  type="success" closeable @close="alertClose">alert with callback</tass-alert>
</template>
<script setup lang="ts">
const alertClose= () =>{
  alert('hello tassUI')
}
</script>
```
</details>

## 使用图标
你可以通过为 Alert 组件添加图标来提高可读性。

通过设置 show-icon 属性来显示 Alert 的 icon，这能更有效地向用户展示你的显示意图。

<div class="example">
<div>
  <tass-alert show-icon title="hello tassUI"  type="error" > </tass-alert>
  <tass-alert show-icon title="hello tassUI"  type="success" > </tass-alert>
  <tass-alert show-icon title="hello tassUI"  type="info" > </tass-alert>
  <tass-alert show-icon title="hello tassUI"  type="warning" > </tass-alert>
</div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
  <tass-alert show-icon title="hello tassUI"  type="error" > </tass-alert>
  <tass-alert show-icon title="hello tassUI"  type="success" > </tass-alert>
  <tass-alert show-icon title="hello tassUI"  type="info" > </tass-alert>
  <tass-alert show-icon title="hello tassUI"  type="warning" > </tass-alert>
</div>
</template>
```
</details>

## 文字描述
为 Alert 组件添加一个更加详细的描述来使用户了解更多信息。

除了必填的 title 属性外，你可以设置 content 属性来帮助你更好地介绍，我们称之为辅助性文字。 辅助性文字只能存放文本内容，当内容超出长度限制时会自动换行。

<div class="example">
<tass-alert show-icon title="tassUI"  type="info" content="一个高效简洁的vuejs库" closeable> </tass-alert>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
<div>
  <div>
  <tass-alert title="hello tassUI"  type="error"> </tass-alert>
  <tass-alert title="hello tassUI"  type="success"> </tass-alert>
  <tass-alert title="hello tassUI"  type="info"> </tass-alert>
  <tass-alert title="hello tassUI"  type="warning"> </tass-alert>
</div>
</div>
</template>
```
</details>

