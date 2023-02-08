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
      <tass-icon name="success"></tass-icon>
      <span>success</span>
    </div>
    <div class="icon-items">
      <tass-icon name="warning"></tass-icon>
      <span>warning</span>
    </div>
    <div class="icon-items">
      <tass-icon name="upload"></tass-icon>
      <span>upload</span>
    </div>
    <div class="icon-items">
      <tass-icon name="users"></tass-icon>
      <span>users</span>
    </div>
    <div class="icon-items">
      <tass-icon name="book"></tass-icon>
      <span>book</span>
    </div>
    <div class="icon-items">
      <tass-icon name="briefcase"></tass-icon>
      <span>briefcase</span>
    </div>
  </div>

  <div style="display:flex;">
    <div class="icon-items">
      <tass-icon name="clock"></tass-icon>
      <span>clock</span>
    </div>
    <div class="icon-items">
      <tass-icon name="car"></tass-icon>
      <span>car</span>
    </div>
    <div class="icon-items">
      <tass-icon name="cloud"></tass-icon>
      <span>cloud</span>
    </div>
    <div class="icon-items">
      <tass-icon name="database"></tass-icon>
      <span>database</span>
    </div>
    <div class="icon-items">
      <tass-icon name="dinner"></tass-icon>
      <span>dinner</span>
    </div>
    <div class="icon-items">
      <tass-icon name="exit"></tass-icon>
      <span>exit</span>
    </div>
    <div class="icon-items">
      <tass-icon name="enter"></tass-icon>
      <span>enter</span>
    </div>
  </div>

  <div style="display:flex;">
    <div class="icon-items">
      <tass-icon name="gift"></tass-icon>
      <span>gift</span>
    </div>
    <div class="icon-items">
      <tass-icon name="hand"></tass-icon>
      <span>hand</span>
    </div>
    <div class="icon-items">
      <tass-icon name="history"></tass-icon>
      <span>history</span>
    </div>
    <div class="icon-items">
      <tass-icon name="menu"></tass-icon>
      <span>menu</span>
    </div>
    <div class="icon-items">
      <tass-icon name="laptop"></tass-icon>
      <span>laptop</span>
    </div>
    <div class="icon-items">
      <tass-icon name="license"></tass-icon>
      <span>license</span>
    </div>
    <div class="icon-items">
      <tass-icon name="link"></tass-icon>
      <span>link</span>
    </div>
  </div>

  <div style="display:flex;">
    <div class="icon-items">
      <tass-icon name="moon"></tass-icon>
      <span>moon</span>
    </div>
    <div class="icon-items">
      <tass-icon name="pencil"></tass-icon>
      <span>pencil</span>
    </div>
    <div class="icon-items">
      <tass-icon name="poop"></tass-icon>
      <span>poop</span>
    </div>
    <div class="icon-items">
      <tass-icon name="star"></tass-icon>
      <span>star</span>
    </div>
    <div class="icon-items">
      <tass-icon name="select"></tass-icon>
      <span>select</span>
    </div>
    <div class="icon-items">
      <tass-icon name="tag"></tass-icon>
      <span>tag</span>
    </div>
    <div class="icon-items">
      <tass-icon name="underline"></tass-icon>
      <span>underline</span>
    </div>
  </div>

  <div style="display:flex;">
    <div class="icon-items">
      <tass-icon name="bubble"></tass-icon>
      <span>bubble</span>
    </div>
    <div class="icon-items">
      <tass-icon name="cog"></tass-icon>
      <span>cog</span>
    </div>
    <div class="icon-items">
      <tass-icon name="download"></tass-icon>
      <span>download</span>
    </div>
    <div class="icon-items">
      <tass-icon name="lock"></tass-icon>
      <span>lock</span>
    </div>
    <div class="icon-items">
      <tass-icon name="trash"></tass-icon>
      <span>trash</span>
    </div>
    <div class="icon-items">
      <tass-icon name="pluscircle"></tass-icon>
      <span>pluscircle</span>
    </div>
    <div class="icon-items">
      <tass-icon name="cross"></tass-icon>
      <span>cross</span>
    </div>
  </div>
  
  <div style="display:flex;">
    <div class="icon-items">
      <tass-icon name="tablet"></tass-icon>
      <span>tablet</span>
    </div>
    <div class="icon-items">
      <tass-icon name="store"></tass-icon>
      <span>store</span>
    </div>
    <div class="icon-items">
      <tass-icon name="smile"></tass-icon>
      <span>smile</span>
    </div>
    <div class="icon-items">
      <tass-icon name="shirt"></tass-icon>
      <span>shirt</span>
    </div>
    <div class="icon-items">
      <tass-icon name="screen"></tass-icon>
      <span>screen</span>
    </div>
    <div class="icon-items">
      <tass-icon name="rocket"></tass-icon>
      <span>rocket</span>
    </div>
    <div class="icon-items">
      <tass-icon name="phone"></tass-icon>
      <span>phone</span>
    </div>
  </div>

  <div style="display:flex;">
    <div class="icon-items">
      <tass-icon name="picture"></tass-icon>
      <span>picture</span>
    </div>
    <div class="icon-items">
      <tass-icon name="map"></tass-icon>
      <span>map</span>
    </div>
    <div class="icon-items">
      <tass-icon name="location"></tass-icon>
      <span>location</span>
    </div>
    <div class="icon-items">
      <tass-icon name="flag"></tass-icon>
      <span>flag</span>
    </div>
    <div class="icon-items">
      <tass-icon name="eye"></tass-icon>
      <span>eye</span>
    </div>
    <div class="icon-items">
      <tass-icon name="earth"></tass-icon>
      <span>earth</span>
    </div>
    <div class="icon-items">
      <tass-icon name="alarm"></tass-icon>
      <span>alarm</span>
    </div>
  </div>

</div>