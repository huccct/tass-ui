<script setup>
  import Base from './base.vue'
  import Different from './different.vue'
  import CloseAble from './closeable.vue'
  import TextCenter from './textcenter.vue'
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
# Message 消息提示
常用于主动操作后的反馈提示。 与 Notification 的区别是后者更多用于系统级通知的被动提醒。

## 基础用法
从顶部出现，3 秒后自动消失
<div class="example">
  <Base/>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <tass-button @click="showMsg">show Message</tass-button>
</template>
<script setup>
  import { TassMessage } from 'tass-ui/es/components/components.mjs';
  function showMsg() {
    TassMessage({
      message: 'this is a message',
      type: 'info',
      center: false,
      showIcon: true
    });
  }
</script>
```
</details>

## 不同状态
用来显示「成功、警告、消息、错误」类的操作反馈。
<div class="example">
  <Different/>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <tass-button @click="showMsg1">success</tass-button>
  <tass-button @click="showMsg2">warning</tass-button>
  <tass-button @click="showMsg3">info</tass-button>
  <tass-button @click="showMsg4">error</tass-button>
</template>
<script setup lang="ts">
  import { TassMessage } from 'tass-ui/es/components/components.mjs';
  function showMsg1() {
    TassMessage({
      message: 'Congrats, this is a success message.',
      type: 'success',
      center: false,
      showIcon: true
    });
  }
  function showMsg2() {
    TassMessage({
      message: 'Warning, this is a warning message.',
      type: 'warning',
      center: false,
      showIcon: true
    });
  }
  function showMsg3() {
    TassMessage({
      message: 'this is a message.',
      type: 'info',
      center: false,
      showIcon: true
    });
  }
  function showMsg4() {
    TassMessage({
      message: 'Oops, this is a error message.',
      type: 'error',
      center: false,
      showIcon: true
    });
  }
</script>
```
</details>

## 可关闭的消息提示
可以添加关闭按钮。
<div class="example">
  <CloseAble/>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <tass-button @click="showMsg1">success</tass-button>
  <tass-button @click="showMsg2">warning</tass-button>
  <tass-button @click="showMsg3">info</tass-button>
  <tass-button @click="showMsg4">error</tass-button>
</template>
<script setup lang="ts">
  import { TassMessage } from 'tass-ui/es/components/components.mjs';
  function showMsg1() {
    TassMessage({
      message: 'Congrats, this is a success message.',
      type: 'success',
      center: false,
      showIcon: true
    });
  }
  function showMsg2() {
    TassMessage({
      message: 'Warning, this is a warning message.',
      type: 'warning',
      center: false,
      showIcon: true
    });
  }
  function showMsg3() {
    TassMessage({
      message: 'this is a message.',
      type: 'info',
      center: false,
      showIcon: true
    });
  }
  function showMsg4() {
    TassMessage({
      message: 'Oops, this is a error message.',
      type: 'error',
      center: false,
      showIcon: true
    });
  }
</script>
```
</details>

# 文字居中
使用 center 属性让文字水平居中
<div class="example">
  <TextCenter/>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <tass-button @click="showMsg">Centered text</tass-button>
</template>
<script setup lang="ts">
  import { TassMessage } from 'tass-ui/es/components/components.mjs';
  function showMsg() {
    TassMessage({
      message: 'this is a message',
      type: 'info',
      center: true,
      showIcon: true,
      closeable: true
    });
  }
</script>
```
</details>