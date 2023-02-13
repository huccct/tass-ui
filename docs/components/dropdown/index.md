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
</style>
# Dropdown 下拉菜单
## 基本用法
###   **hover** 触发
<script lang="ts" setup>
import {ref} from "vue";

const click = ref('click');
const hover = ref('hover');
</script>
<div class="example">
    <div class="tass-dropdown-toggle">
      <tass-dropdown :trigger="hover">
          <tass-dropdownMenu>
            <tass-dropdown-item>北京市</tass-dropdown-item>
            <tass-dropdown-item>上海市</tass-dropdown-item>
            <tass-dropdown-item>杭州市</tass-dropdown-item>
            <tass-dropdown-item>厦门市</tass-dropdown-item>
          </tass-dropdownMenu>
    </tass-dropdown>
   </div>
</div>

<details>
<summary>展开看看</summary>

```vue

<template>
    <div class="tass-dropdown-toggle">
        <tass-dropdown :trigger="state.hover">
            <tass-dropdownMenu>
                <tass-dropdown-item>Chelsea</tass-dropdown-item>
                <tass-dropdown-item>Liverpool</tass-dropdown-item>
                <tass-dropdown-item>Manchester United</tass-dropdown-item>
                <tass-dropdown-item>Manchester City</tass-dropdown-item>
            </tass-dropdownMenu>
        </tass-dropdown>
    </div>
</template>

<script setup lang="ts">
import {reactive} from "vue";

const state = reactive({
    hover: 'hover'
});
</script>
```
</details>

### **click** 触发
<div class="example">
<div class="tass-dropdown-toggle">
        <tass-dropdown :trigger="click">
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
    <div class="tass-dropdown-toggle">
        <tass-dropdown :trigger="state.click">
            <tass-dropdownMenu>
                <tass-dropdown-item>Chelsea</tass-dropdown-item>
                <tass-dropdown-item>Liverpool</tass-dropdown-item>
                <tass-dropdown-item>Manchester United</tass-dropdown-item>
                <tass-dropdown-item>Manchester City</tass-dropdown-item>
            </tass-dropdownMenu>
        </tass-dropdown>
    </div>
</template>

<script setup lang="ts">
import {reactive} from "vue";

const state = reactive({
    click: 'click',
    hover: 'hover'
});
</script>
```

</details>
