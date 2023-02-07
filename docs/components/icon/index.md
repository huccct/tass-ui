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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 116px;
    height: 100px;
  }
  .icon-items:hover {
    cursor: pointer;
    background: rgb(241, 241, 241);
  }
</style>
# Icon 图标
## 基础用法

<div class="example">
  <tass-icon name="pluscircle"></tass-icon>&nbsp; 
  <tass-icon name="pushpin"></tass-icon>&nbsp;
  <tass-icon name="textalignjustify"></tass-icon>&nbsp; <tass-icon name="danger"></tass-icon>&nbsp;
  <tass-icon name="success"></tass-icon>&nbsp; 
  <tass-icon name="info"></tass-icon>&nbsp;
  <tass-icon name="warning"></tass-icon>
  <br />
  <br />
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <tass-icon name="pluscircle"></tass-icon>&nbsp; 
  <tass-icon name="pushpin"></tass-icon>&nbsp;
  <tass-icon name="textalignjustify"></tass-icon>&nbsp; <tass-icon name="danger"></tass-icon>&nbsp;
  <tass-icon name="success"></tass-icon>&nbsp; 
  <tass-icon name="info"></tass-icon>&nbsp;
  <tass-icon name="warning"></tass-icon>
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
  <div class="icon-items">
    <tass-icon name="pluscircle"></tass-icon>
    <span>pluscircle</span>
  </div>
</div>