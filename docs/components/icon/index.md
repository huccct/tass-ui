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
  .icon-items {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width: 100px;
    height: 100px;
    position: relative;
  }
  .icon-items::after {
    content: '';
    position: absolute;
    border: 1px solid #ccc;
    top: 0;
    left: 0;
    width: 200%;
    height: 200%;
    transform: scale(0.5);
    transform-origin: left top;
  }


  .icon-items:hover {
    cursor: pointer;
    background: rgb(241, 241, 241);
  }
</style>
# Icon 图标
## 基础用法

<div class="example">
  <tass-icon name="magnifier"></tass-icon>&nbsp;
  <tass-icon name="trash" style="color:red;"></tass-icon>&nbsp;
  <tass-button type="primary" icon="tas-icon-enterdown">下载</tass-button>
  <br />
  <br />
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <tass-icon name="magnifier"></tass-icon>&nbsp;
  <tass-icon name="trash" style="color:red;"></tass-icon>&nbsp;
  <tass-button type="primary" icon="tas-icon-enterdown">下载</tass-button>
  <br />
  <br />
</template>
<script lang="ts" setup>
  import { TassIcon } from "tass-ui";
</script>

```
</details>

## 所有图标
<div class="example">
  <div style="display:flex;">
    <div class="icon-items">
      <tass-icon name="pluscircle"></tass-icon>
      <span>pluscircle</span>
    </div>
    <div class="icon-items">
      <tass-icon name="pluscircle"></tass-icon>
      <span>pluscircle</span>
    </div>
    <div class="icon-items">
      <tass-icon name="pluscircle"></tass-icon>
      <span>pluscircle</span>
    </div>
    <div class="icon-items">
      <tass-icon name="pluscircle"></tass-icon>
      <span>pluscircle</span>
    </div>
    <div class="icon-items">
      <tass-icon name="pluscircle"></tass-icon>
      <span>pluscircle</span>
    </div>
    <div class="icon-items">
      <tass-icon name="pluscircle"></tass-icon>
      <span>pluscircle</span>
    </div>
    <div class="icon-items">
      <tass-icon name="pluscircle"></tass-icon>
      <span>pluscircle</span>
    </div>
  </div>

  <div style="display:flex;">
    <div class="icon-items">
      <tass-icon name="pluscircle"></tass-icon>
      <span>pluscircle</span>
    </div>
    <div class="icon-items">
      <tass-icon name="pluscircle"></tass-icon>
      <span>pluscircle</span>
    </div>
    <div class="icon-items">
      <tass-icon name="pluscircle"></tass-icon>
      <span>pluscircle</span>
    </div>
    <div class="icon-items">
      <tass-icon name="pluscircle"></tass-icon>
      <span>pluscircle</span>
    </div>
    <div class="icon-items">
      <tass-icon name="pluscircle"></tass-icon>
      <span>pluscircle</span>
    </div>
    <div class="icon-items">
      <tass-icon name="pluscircle"></tass-icon>
      <span>pluscircle</span>
    </div>
    <div class="icon-items">
      <tass-icon name="pluscircle"></tass-icon>
      <span>pluscircle</span>
    </div>
  </div>
  <div style="display:flex;">
    <div class="icon-items">
      <tass-icon name="pluscircle"></tass-icon>
      <span>pluscircle</span>
    </div>
    <div class="icon-items">
      <tass-icon name="pluscircle"></tass-icon>
      <span>pluscircle</span>
    </div>
    <div class="icon-items">
      <tass-icon name="pluscircle"></tass-icon>
      <span>pluscircle</span>
    </div>
    <div class="icon-items">
      <tass-icon name="pluscircle"></tass-icon>
      <span>pluscircle</span>
    </div>
    <div class="icon-items">
      <tass-icon name="pluscircle"></tass-icon>
      <span>pluscircle</span>
    </div>
    <div class="icon-items">
      <tass-icon name="pluscircle"></tass-icon>
      <span>pluscircle</span>
    </div>
    <div class="icon-items">
      <tass-icon name="pluscircle"></tass-icon>
      <span>pluscircle</span>
    </div>
  </div>
  <div style="display:flex;">
    <div class="icon-items">
      <tass-icon name="pluscircle"></tass-icon>
      <span>pluscircle</span>
    </div>
    <div class="icon-items">
      <tass-icon name="pluscircle"></tass-icon>
      <span>pluscircle</span>
    </div>
    <div class="icon-items">
      <tass-icon name="pluscircle"></tass-icon>
      <span>pluscircle</span>
    </div>
    <div class="icon-items">
      <tass-icon name="pluscircle"></tass-icon>
      <span>pluscircle</span>
    </div>
    <div class="icon-items">
      <tass-icon name="pluscircle"></tass-icon>
      <span>pluscircle</span>
    </div>
    <div class="icon-items">
      <tass-icon name="pluscircle"></tass-icon>
      <span>pluscircle</span>
    </div>
    <div class="icon-items">
      <tass-icon name="pluscircle"></tass-icon>
      <span>pluscircle</span>
    </div>
  </div>
  <div style="display:flex;">
    <div class="icon-items">
      <tass-icon name="pluscircle"></tass-icon>
      <span>pluscircle</span>
    </div>
    <div class="icon-items">
      <tass-icon name="pluscircle"></tass-icon>
      <span>pluscircle</span>
    </div>
    <div class="icon-items">
      <tass-icon name="pluscircle"></tass-icon>
      <span>pluscircle</span>
    </div>
    <div class="icon-items">
      <tass-icon name="pluscircle"></tass-icon>
      <span>pluscircle</span>
    </div>
    <div class="icon-items">
      <tass-icon name="pluscircle"></tass-icon>
      <span>pluscircle</span>
    </div>
    <div class="icon-items">
      <tass-icon name="pluscircle"></tass-icon>
      <span>pluscircle</span>
    </div>
    <div class="icon-items">
      <tass-icon name="pluscircle"></tass-icon>
      <span>pluscircle</span>
    </div>
  </div>
</div>