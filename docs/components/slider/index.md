<style>

</style>
# Slider 滑块
## 基础用法
<br>

<tass-slider></tass-slider>
<br>
<br>
<tass-slider disabled></tass-slider>


<details>
<summary>展开查看</summary>

```vue
<template>
  <tass-slider></tass-slider>
  <tass-slider disabled></tass-slider>
</template>

```
</details>


## 自定义初末值
通过设置min 与 mix , 来展示初末位置。
<br>
<br>
  <div>
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
通过设置value , 来展示初始值。
<br>
<br>
  <div>
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