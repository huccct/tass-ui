<style>
  .example{
      border: 1px solid #f5f5f5;
      border-radius: 5px;
      padding:20px;
  }
  
  details > summary:first-of-type {
      font-size: 10px;
      padding: 8px 0;
      cursor: pointer;
      color: #1989fa;
  }
  .vp-doc ul, .vp-doc ol {
    padding-left: 0px !important;
  }
</style>

# Dropdown 下拉菜单

将动作或菜单折叠到下拉菜单中。

## 基本用法

### **hover** 触发

<script lang="ts" setup>
import {ref} from "vue";

const click = ref('click');
const hover = ref('hover');
</script>
<div class="example">
    <tass-dropdown :trigger="hover">
        <button class="tas-dropdown-button">
            <span class="tas-dropdown-link">
                下拉菜单
                <tass-icon style="margin-left: 10px" name="chevrondown"></tass-icon>
            </span>
        </button> 
            <tass-dropdown-menu>
            <tass-dropdown-item>北京市</tass-dropdown-item>
            <tass-dropdown-item>上海市</tass-dropdown-item>
            <tass-dropdown-item>杭州市</tass-dropdown-item>
            <tass-dropdown-item>厦门市</tass-dropdown-item>
            </tass-dropdown-menu>
    </tass-dropdown>
</div>

<details>
<summary>展开看看</summary>

```vue
<template>
  <tass-dropdown :trigger="state.hover">
    <button class="tas-dropdown-button">
      <span class="tas-dropdown-link">
        下拉菜单
        <tass-icon style="margin-left: 10px" name="chevrondown"></tass-icon>
      </span>
    </button>
    <tass-dropdown-menu>
      <tass-dropdown-item>北京市</tass-dropdown-item>
      <tass-dropdown-item>上海市</tass-dropdown-item>
      <tass-dropdown-item>杭州市</tass-dropdown-item>
      <tass-dropdown-item>厦门市</tass-dropdown-item>
    </tass-dropdown-menu>
  </tass-dropdown>
</template>

<script setup lang="ts">
  import { reactive } from 'vue';

  const state = reactive({
    hover: 'hover'
  });
</script>
```

</details>

### **click** 触发

<div class="example">
    <div>
        <tass-dropdown :trigger="click">
          <button class="tas-dropdown-button">
              <span class="tas-dropdown-link">
                    下拉菜单
                    <tass-icon style="margin-left: 10px" name="chevrondown"></tass-icon>
              </span>
          </button>
            <tass-dropdownMenu-click>
                <tass-dropdown-item>北京市</tass-dropdown-item>
                <tass-dropdown-item>上海市</tass-dropdown-item>
                <tass-dropdown-item>杭州市</tass-dropdown-item>
                <tass-dropdown-item>厦门市</tass-dropdown-item>
            </tass-dropdownMenu-click>
        </tass-dropdown>
    </div>
</div>
<details>
<summary>展开看看</summary>

```vue
<template>
  <div>
    <tass-dropdown :trigger="state.click">
      <button class="tas-dropdown-button">
        <span class="tas-dropdown-link">
          下拉菜单
          <tass-icon style="margin-left: 10px" name="chevrondown"></tass-icon>
        </span>
      </button>
      <tass-dropdown-menu-click>
        <tass-dropdown-item>北京市</tass-dropdown-item>
        <tass-dropdown-item>上海市</tass-dropdown-item>
        <tass-dropdown-item>杭州市</tass-dropdown-item>
        <tass-dropdown-item>厦门市</tass-dropdown-item>
      </tass-dropdown-menu-click>
    </tass-dropdown>
  </div>
</template>

<script setup lang="ts">
  import { reactive } from 'vue';

  const state = reactive({
    click: 'click',
    hover: 'hover'
  });
</script>
```

</details>
