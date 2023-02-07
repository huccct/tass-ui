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
# Grid 栅格
## 基础用法

<div class="example">
    <tass-row>
      <tass-col :span="24">
        <div style="background-color: #d3dce6; height: 35px; border-radius: 8px"></div>
      </tass-col>
    </tass-row>
    <br />
    <br />
    <tass-row>
      <tass-col :span="12">
        <div style="background-color: #e5e9f2; height: 35px; border-radius: 8px"></div>
      </tass-col>
      <tass-col :span="12">
        <div style="background-color: #e5e9f2; height: 35px; border-radius: 8px"></div>
      </tass-col>
    </tass-row>
    <br />
    <br />
    <tass-row tag="div">
      <tass-col tag="span" :span="12">
        <div style="background-color: #d3dce6; height: 35px; border-radius: 8px"></div>
      </tass-col>
      <tass-col tag="span" :span="6">
        <div style="background-color: #e5e9f2; height: 35px; border-radius: 8px"></div>
      </tass-col>
      <tass-col tag="span" :span="6">
        <div style="background-color: #e5e9f2; height: 35px; border-radius: 8px"></div>
      </tass-col>
    </tass-row>
    <br />
    <br />
    <tass-row tag="div" :gutter="20" justify="end">
      <tass-col tag="span" :span="6">
        <div style="background-color: #d3dce6; height: 35px; border-radius: 8px"></div>
      </tass-col>
      <tass-col tag="span" :span="6">
        <div style="background-color: #e5e9f2; height: 35px; border-radius: 8px"></div>
      </tass-col>
      <tass-col tag="span" :span="6">
        <div style="background-color: #e5e9f2; height: 35px; border-radius: 8px"></div>
      </tass-col>
    </tass-row>
    <br />
    <br />
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
      <tass-row>
        <tass-col :span="24">
          <div style="background-color: #d3dce6; height: 35px; border-radius: 8px"></div>
        </tass-col>
      </tass-row>
      <br />
      <br />
      <tass-row>
        <tass-col :span="12">
          <div style="background-color: #e5e9f2; height: 35px; border-radius: 8px"></div>
        </tass-col>
        <tass-col :span="12">
          <div style="background-color: #e5e9f2; height: 35px; border-radius: 8px"></div>
        </tass-col>
      </tass-row>
      <br />
      <br />
      <tass-row tag="div">
        <tass-col tag="span" :span="12">
          <div style="background-color: #d3dce6; height: 35px; border-radius: 8px"></div>
        </tass-col>
        <tass-col tag="span" :span="6">
          <div style="background-color: #e5e9f2; height: 35px; border-radius: 8px"></div>
        </tass-col>
        <tass-col tag="span" :span="6">
          <div style="background-color: #e5e9f2; height: 35px; border-radius: 8px"></div>
        </tass-col>
      </tass-row>
      <br />
      <br />
      <tass-row tag="div" :gutter="20" justify="end">
        <tass-col tag="span" :span="6">
          <div style="background-color: #d3dce6; height: 35px; border-radius: 8px"></div>
        </tass-col>
        <tass-col tag="span" :span="6">
          <div style="background-color: #e5e9f2; height: 35px; border-radius: 8px"></div>
        </tass-col>
        <tass-col tag="span" :span="6">
          <div style="background-color: #e5e9f2; height: 35px; border-radius: 8px"></div>
        </tass-col>
      </tass-row>
      <br />
      <br />
</template>
<script lang="ts" setup>
  import { TassCol,TassRow } from "tass-ui";
</script>

```
</details>

## 分栏间隔
<div class="example">
    <tass-row tag="div" :gutter="40" justify="end">
      <tass-col tag="span" :span="6">
        <div style="background-color: #d3dce6; height: 35px; border-radius: 8px"></div>
      </tass-col>
      <tass-col tag="span" :span="6">
        <div style="background-color: #e5e9f2; height: 35px; border-radius: 8px"></div>
      </tass-col>
      <tass-col tag="span" :span="6">
        <div style="background-color: #e5e9f2; height: 35px; border-radius: 8px"></div>
      </tass-col>
      <tass-col tag="span" :span="6">
        <div style="background-color: #e5e9f2; height: 35px; border-radius: 8px"></div>
      </tass-col>
    </tass-row>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <tass-row tag="div" :gutter="40" justify="end">
      <tass-col tag="span" :span="6">
        <div style="background-color: #d3dce6; height: 35px; border-radius: 8px"></div>
      </tass-col>
      <tass-col tag="span" :span="6">
        <div style="background-color: #e5e9f2; height: 35px; border-radius: 8px"></div>
      </tass-col>
      <tass-col tag="span" :span="6">
        <div style="background-color: #e5e9f2; height: 35px; border-radius: 8px"></div>
      </tass-col>
      <tass-col tag="span" :span="6">
        <div style="background-color: #e5e9f2; height: 35px; border-radius: 8px"></div>
      </tass-col>
    </tass-row>
  </div>
</template>
<script lang="ts" setup>
  import { TassRow, TassCol } from "tass-ui";
</script>
```
</details>