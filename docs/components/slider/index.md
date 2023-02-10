<style>

</style>
# Slider 滑块
## 基础用法
<br>

<tass-slider :min="0" :max="100"></tass-slider>
<br>
<br>
<tass-slider disabled></tass-slider>


<details>
<summary>展开查看</summary>

```vue
<template>
  <tass-slider :min="0" :max="100"></tass-slider>
  <tass-slider disabled></tass-slider>
</template>

```
</details>


## 自定义值
通过设置min 与 mix , 来展示起始值。
<br>
<br>
  <div>
    <tass-slider :min="100" :max="500"></tass-slider>
  </div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <tass-slider :min="100" :max="500"></tass-slider>
</template>

```
</details>