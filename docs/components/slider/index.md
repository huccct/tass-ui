<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-02-12 12:41:30
 * @LastEditors: Huccct
 * @LastEditTime: 2023-02-22 22:26:52
-->
<style>
  .example {
      border: 1px solid #f5f5f5;
      border-radius: 5px;
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

# Slider 滑块

通过拖动滑块在一个固定区间内进行选择。

## 基础用法

  <div style="padding: 30px;" class="example">
    <tass-slider></tass-slider><br/><br/>
    <tass-slider disabled></tass-slider>
  </div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <tass-slider></tass-slider><br /><br />
  <tass-slider disabled></tass-slider>
</template>
```

</details>

## 自定义初末值

通过设置 min 与 mix , 来展示初末位置。

<div style="padding: 30px;" class="example">
  <tass-slider></tass-slider>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <tass-slider :min="100" :max="500"></tass-slider>
</template>
```

</details>

## 自定义初始值

通过设置 value , 来展示初始值。

<div style="padding: 30px;" class="example">
  <tass-slider :value="30"></tass-slider>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <tass-slider :value="30"></tass-slider>
</template>
```

</details>
