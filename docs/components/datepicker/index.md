<!--
 * @Descripttion: Spicy chicken
 * @Author: YuShu Xiao
 * @Date: 2023-02-12 12:52:07
 * @LastEditors: Huccct
 * @LastEditTime: 2023-02-13 11:55:23
-->
<script setup lang="ts">
  import Base from './base.vue'
  import PrefixIcon from './prefixIcon.vue'
</script>
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

# DatePicker 日期选择器
用于选择或输入日期

## 选择某一天
以”日“为基本单位，基础的日期选择控件
<div class=example>
  <Base/>
</div>
<details>
<summary>展开查看</summary>

```vue
<template>
  <tass-date-picker v-model="nowDate"></tass-date-picker>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  const nowDate = ref(new Date());
</script>
```
</details>

## 设置自定义前缀的内容
前缀内容可以被自定义。

当你从其他vue组件或由渲染函数生成的组件中导入组件时, 你可以设置 prefix-icon 属性来定制前缀内容
<div class=example>
  <PrefixIcon/>
</div>
<details>
<summary>展开查看</summary>

```vue
<template>
  <tass-date-picker v-model="nowDate"></tass-date-picker>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  const nowDate = ref(new Date());
</script>
```
</details>