<!--
 * @Description: Stay hungry，Stay foolis
 * @Author: Huccct
 * @Date: 2023-02-10 11:26:22
 * @LastEditors: Huccct
 * @LastEditTime: 2023-02-10 15:01:39
-->
<script setup lang="ts">
  import Basic from './basic.vue';
  import Disabled from './disabled.vue';
  import ClearAble from './clearable.vue';
  import ShowPassword from './showpassword.vue';
  import SuffixIcon from './suffixIcon.vue';
  import Size from './size.vue';
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
# Input 输入框
通过鼠标或键盘输入字符
::: warning
Input 为受控组件，它 总会显示 Vue 绑定值。

在正常情况下，input 的输入事件应该被正常响应。 它的处理程序应该更新组件的绑定值 (或使用<div style="background:#ccc;display:inline;width:55px;border-radius:3px;">v-model</div>)。 否则，输入框的值将不会改变。

不支持 <div style="background:#ccc;display:inline;width:55px;border-radius:3px;">v-model</div> 修饰符
:::
## 基础用法
<div class="example">
  <Basic/>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <tass-input v-model="inputVal" />
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  let inputVal = ref('');
</script>
<style></style>

```
</details>

## 禁用状态
通过 <span style="color:#ccc;">disabled</span> 属性指定是否禁用 input 组件
<div class="example">
  <Disabled/>
</div>
<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <tass-input v-model="inputVal" disabled />
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  let inputVal = ref('');
</script>
<style></style>

```
</details>

## 一键清空
使用 <span style="color:#ccc;">clearable</span> 属性即可得到一个可一键清空的输入框
<div class="example">
  <ClearAble/>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <tass-input v-model="inputVal" clearable />
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  let inputVal = ref('');
</script>
<style></style>

```
</details>

## 密码框
使用 <span style="color:#ccc;">show-password</span> 属性即可得到一个可切换显示隐藏的密码框
<div class="example">
  <ShowPassword/>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <tass-input v-model="inputVal" show-password />
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  let inputVal = ref('');
</script>
<style></style>

```
</details>

## 带图标的输入框
带有图标标记输入类型

要在输入框中添加图标，你可以简单地使用 prefix-icon 和 suffix-icon 属性。 另外， prefix 和 suffix 命名的插槽也能正常工作。
<div class="example">
  <SuffixIcon/>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <tass-input v-model="inputVal" prefix-icon="upload" />
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  let inputVal = ref('');
</script>
<style></style>

```
</details>

## 尺寸
使用 size 属性改变输入框大小。 除了默认大小外，还有另外两个选项： medium, mini
<div class="example">
  <Size/>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <tass-input v-model="inputVal" />&nbsp; <tass-input v-model="inputVal" size="medium" />&nbsp;
    <tass-input v-model="inputVal" size="mini" />&nbsp;
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  let inputVal = ref('');
</script>
<style></style>

```
</details>