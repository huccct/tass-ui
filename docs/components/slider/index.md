<style>

</style>
# Slider 滑块
## 基础用法
<br>

<tass-slider :min="0" :max="100"></tass-slider>

<details>
<summary>展开查看</summary>

```vue
<template>
  <tass-slider :min="0" :max="100"></tass-slider>
</template>

```
</details>

## 禁用状态
<br>

<div >
     <tass-slider disabled></tass-slider>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
    <tass-slider disabled></tass-slider>
</template>
```

</details>

## 自定义值
通过 min 与 mix 属性, 设置不同的长度。
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