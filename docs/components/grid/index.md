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
通过基础的 24 分栏，迅速简便地创建布局。
::: tip
组件默认使用 Flex 布局，不需要手动设置 type="flex"。
请注意父容器避免使用 inline 相关样式，会导致组件宽度不能撑满
:::
## 基础用法

<div class="example">
  <tass-row>
    <tass-col :span="24">
      <div style="background-color: #9090C0; height: 35px; border-radius: 8px"></div>
    </tass-col>
  </tass-row>
  <br />
  <br />
  <tass-row>
    <tass-col :span="12">
      <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
    </tass-col>
    <tass-col :span="12">
      <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
    </tass-col>
  </tass-row>
  <br />
  <br />
  <tass-row tag="div">
    <tass-col tag="span" :span="12">
      <div style="background-color: #9090C0; height: 35px; border-radius: 8px"></div>
    </tass-col>
    <tass-col tag="span" :span="6">
      <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
    </tass-col>
    <tass-col tag="span" :span="6">
      <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
    </tass-col>
  </tass-row>
  <br />
  <br />
  <tass-row tag="div" :gutter="20" justify="end">
    <tass-col tag="span" :span="6">
      <div style="background-color: #9090C0; height: 35px; border-radius: 8px"></div>
    </tass-col>
    <tass-col tag="span" :span="6">
      <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
    </tass-col>
    <tass-col tag="span" :span="6">
      <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
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
      <div style="background-color: #9090C0; height: 35px; border-radius: 8px"></div>
    </tass-col>
  </tass-row>
  <br />
  <br />
  <tass-row>
    <tass-col :span="12">
      <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
    </tass-col>
    <tass-col :span="12">
      <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
    </tass-col>
  </tass-row>
  <br />
  <br />
  <tass-row tag="div">
    <tass-col tag="span" :span="12">
      <div style="background-color: #9090C0; height: 35px; border-radius: 8px"></div>
    </tass-col>
    <tass-col tag="span" :span="6">
      <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
    </tass-col>
    <tass-col tag="span" :span="6">
      <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
    </tass-col>
  </tass-row>
  <br />
  <br />
  <tass-row tag="div" :gutter="20" justify="end">
    <tass-col tag="span" :span="6">
      <div style="background-color: #9090C0; height: 35px; border-radius: 8px"></div>
    </tass-col>
    <tass-col tag="span" :span="6">
      <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
    </tass-col>
    <tass-col tag="span" :span="6">
      <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
    </tass-col>
  </tass-row>
  <br />
  <br />
</template>
```
</details>

## 分栏间隔
<div class="example">
    <tass-row tag="div" :gutter="40" justify="end">
      <tass-col tag="span" :span="6">
        <div style="background-color: #9090C0; height: 35px; border-radius: 8px"></div>
      </tass-col>
      <tass-col tag="span" :span="6">
        <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
      </tass-col>
      <tass-col tag="span" :span="6">
        <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
      </tass-col>
      <tass-col tag="span" :span="6">
        <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
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
        <div style="background-color: #9090C0; height: 35px; border-radius: 8px"></div>
      </tass-col>
      <tass-col tag="span" :span="6">
        <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
      </tass-col>
      <tass-col tag="span" :span="6">
        <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
      </tass-col>
      <tass-col tag="span" :span="6">
        <div style="background-color: #595B83; height: 35px; border-radius: 8px"></div>
      </tass-col>
    </tass-row>
  </div>
</template>
```
</details>