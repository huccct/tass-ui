<style>
  .example{
      border: 1px solid #f5f5f5;
      border-radius: 5px;
      padding: 20px;
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
# Button 按钮
常用的操作按钮。
## 基础用法
使用 type、plain、round 和 circle 来定义按钮的样式。

<div class="example">
    <div>
      <tass-button>默认按钮</tass-button>
      <tass-button type="primary">主要按钮</tass-button>
      <tass-button type="success">成功按钮</tass-button>
      <tass-button type="info">信息按钮</tass-button>
      <tass-button type="warning">警告按钮</tass-button>
      <tass-button type="danger">危险按钮</tass-button>
      <br />
      <br />
      <tass-button plain>朴素按钮</tass-button>
      <tass-button type="primary" plain>主要按钮</tass-button>
      <tass-button type="success" plain>成功按钮</tass-button>
      <tass-button type="info" plain>信息按钮</tass-button>
      <tass-button type="warning" plain>警告按钮</tass-button>
      <tass-button type="danger" plain>危险按钮</tass-button>
      <br />
      <br />
      <tass-button round>圆角按钮</tass-button>
      <tass-button type="primary" round>主要按钮</tass-button>
      <tass-button type="success" round>成功按钮</tass-button>
      <tass-button type="info" round>信息按钮</tass-button>
      <tass-button type="danger" round>危险按钮</tass-button>
      <br />
      <br />
      <tass-button circle icon="tas-icon-upload"></tass-button>
      <tass-button type="primary" circle icon="tas-icon-alarm"></tass-button>
      <tass-button type="success" circle icon="tas-icon-arrowdown"></tass-button>
      <tass-button type="info" circle icon="tas-icon-arrowleft"></tass-button>
      <tass-button type="danger" circle icon="tas-icon-arrowright"></tass-button>
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <tass-button>默认按钮</tass-button>
    <tass-button type="primary">主要按钮</tass-button>
    <tass-button type="success">成功按钮</tass-button>
    <tass-button type="info">信息按钮</tass-button>
    <tass-button type="warning">警告按钮</tass-button>
    <tass-button type="danger">危险按钮</tass-button>
    <br />
    <br />
    <tass-button plain>朴素按钮</tass-button>
    <tass-button type="primary" plain>主要按钮</tass-button>
    <tass-button type="success" plain>成功按钮</tass-button>
    <tass-button type="info" plain>信息按钮</tass-button>
    <tass-button type="warning" plain>警告按钮</tass-button>
    <tass-button type="danger" plain>危险按钮</tass-button>
    <br />
    <br />
    <tass-button round>圆角按钮</tass-button>
    <tass-button type="primary" round>主要按钮</tass-button>
    <tass-button type="success" round>成功按钮</tass-button>
    <tass-button type="info" round>信息按钮</tass-button>
    <tass-button type="danger" round>危险按钮</tass-button>
  </div>
</template>
```
</details>

## 禁用状态
<div class="example">
    <div>
      <tass-button disabled>禁用按钮</tass-button>
      <tass-button type="primary" disabled>主要按钮</tass-button>
      <tass-button type="success" disabled>成功按钮</tass-button>
      <tass-button type="info" disabled>信息按钮</tass-button>
      <tass-button type="warning" disabled>警告按钮</tass-button>
      <tass-button type="danger" disabled>危险按钮</tass-button>
      <br />
      <br />
      <tass-button disabled plain>禁用按钮</tass-button> 
      <tass-button type="primary" disabled plain>主要按钮</tass-button>
      <tass-button type="success" disabled plain>成功按钮</tass-button>
      <tass-button type="info" disabled plain>信息按钮</tass-button>
      <tass-button type="warning" disabled plain>警告按钮</tass-button>
      <tass-button type="danger" disabled plain>危险按钮</tass-button>
      <br />
      <br />
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <tass-button disabled>禁用按钮</tass-button>
    <tass-button type="primary" disabled>主要按钮</tass-button>
    <tass-button type="success" disabled>成功按钮</tass-button>
    <tass-button type="info" disabled>信息按钮</tass-button>
    <tass-button type="warning" disabled>警告按钮</tass-button>
    <tass-button type="danger" disabled>危险按钮</tass-button>
    <br />
    <br />
  </div>
</template>
```
</details>

## 调整尺寸
<div class="example">
    <div>
        <tass-button>默认按钮</tass-button>
        <tass-button size="medium">中等按钮</tass-button>
        <tass-button size="small">小型按钮</tass-button>
        <tass-button size="mini">超小按钮</tass-button>
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <tass-button>默认按钮</tass-button>
    <tass-button size="medium">中等按钮</tass-button>
    <tass-button size="small">小型按钮</tass-button>
    <tass-button size="mini">超小按钮</tass-button>
  </div>
</template>

```

</details>
