<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-02-10 11:26:22
 * @LastEditors: Huccct
 * @LastEditTime: 2023-02-16 09:58:58
-->
<script setup lang="ts">
  import Base from './base.vue';
  import Disabled from './disabled.vue';
  import Group from './group.vue';
  import Funct from './funct.vue'
</script>
<style>
  .example{
      border: 1px solid #f5f5f5;
      border-radius: 5px;
      padding: 20px;
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

# Checkbox 多选框
在一组备选项中进行多选。

## 基础用法
单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍

<div class="example">
    <Base/>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <tass-checkbox v-model="checked1">Option 1</tass-checkbox>
  <tass-checkbox disabled>Option 2</tass-checkbox>
  <tass-checkbox v-model="checked2">Option 3</tass-checkbox>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  const checked1 = ref(true);
  const checked2 = ref(false);
</script>
```
</details>

## 禁用状态
多选框不可用状态。

设置 disabled 属性即可
<div class="example">
    <Disabled/>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <tass-checkbox disabled>Disabled</tass-checkbox>
  <tass-checkbox v-model="checked1">Not Disabled</tass-checkbox>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  const checked1 = ref(true);
</script>
```
</details>

## 多选框组
适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。
<div class="example">
    <Group/>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  {{ checkList }}<br /><br />
  <tass-checkbox-group v-model="checkList">
    <tass-checkbox v-for="(item, index) in showList" :key="index" :label="item"></tass-checkbox>
  </tass-checkbox-group>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  let checkList = ref(['OptionA', 'OptionB']);
  let showList = ref(['OptionA', 'OptionB', 'OptionC', 'OptionD']);
</script>
```
</details>

## 事件回调
<div class="example">
    <Funct/>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <tass-checkbox v-model="checked1" @change="handlerChange">Option 1</tass-checkbox>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  const checked1 = ref(true);
  const handlerChange = () => {
    alert('This is a handleChange test.');
  };
</script>
```
</details>
