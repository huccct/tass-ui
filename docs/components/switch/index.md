<!--
 * @Author: 申恒杰
 * @Date: 2023-02-12 19:17:38
 * @Description: 铁沸物
 * @FilePath: \tass-ui\docs\components\switch\index.md
-->
<script setup>
  import Detail from './detail.vue'
  import Change from './change.vue'
  import Disabled from './disabled.vue'
  import Changedetail from './changedetail.vue'
  import Switchicon from './switch-icon.vue'
  import Definevalue from './definevalue.vue'
  import Size from './size.vue'
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
# Switch 开关
开关选择器, 需要表示开关状态/两种状态之间的切换时。
## 基础用法
使用 tass-switch 标签, 创建开关

<div class="example">
    <Detail></Detail>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div style="width:40px">
    <tass-switch v-model="active1"></tass-switch>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const active1 = ref(false);
</script>
```
</details>

## 事件回调
通过 change 事件, 在操作后完成一些后续处理。
<div class="example">
    <Change></Change>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div style="width:40px">
    <tass-switch v-model="active2" @change="change"></tass-switch>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const active2 = ref(true);
  const change = ( val )=> {
      alert("当前值:" + val)
  }
</script>
```
</details>

## 禁用状态
<div class="example">
    <Disabled></Disabled>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div style="width:40px">
    <tass-switch v-model="active3" :disabled="disabled"></tass-switch>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const active3 = ref(false);
  const disabled = ref(true);
</script>

```

</details>

## 修改描述
通过 onswitch-text 与 unswitch-text 属性, 设置不同状态的描述文字。
<div class="example">
    <Changedetail></Changedetail>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div style="width:60px">
    <tass-switch v-model="active4" onswitch-text="白天"  unswitch-text="夜间"></tass-switch>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const active4 = ref(true);
</script>
```
</details>

## 图标插槽
通过 onswitch-icon 与 unswitch-icon 属性, 设置不同状态的展示图标。
<div class="example">
    <Switchicon></Switchicon>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div style="width:40px">
    <tass-switch v-model="active5">
      <template #onswitch-icon>😄</template>
      <template #unswitch-icon>🤔</template>
    </tass-switch>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const active5 = ref(true);
</script>
```
</details>

## 自定义值
通过 onswitch-value 与 unswitch-value 属性, 设置不同状态的值。
<div class="example">
    <Definevalue></Definevalue>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div style="width:40px">
    <tass-switch v-model="active6" onswitch-value="dark" unswitch-value="light"></tass-switch>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const active6 = ref('dark');
</script>
```
</details>

## 尺寸
通过 size 属性, 设置尺寸。
<div class="example">
    <Size></Size>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div style='display:flex;align-items: flex-end;'>
    <tass-switch v-model="active7" size='lg'></tass-switch>
    <tass-switch v-model="active7" size='md' style='margin-left:10px'></tass-switch>
    <tass-switch v-model="active7" size='sm' style='margin-left:10px'></tass-switch>
    <tass-switch v-model="active7" size='xs' style='margin-left:10px'></tass-switch>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const active7 = ref(true);
</script>
```
</details>