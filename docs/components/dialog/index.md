<script setup>
  import Dialog from './dialog.vue'
  import DialogDefault from './dialogdefault.vue'
</script>
<style>
 .example{
      border: 1px solid #f5f5f5;
      border-radius: 5px;
      padding:20px
  }
  details > summary:first-of-type {
      font-size: 10px;
      padding: 8px 0;
      cursor: pointer;
      color: #1989fa;
  }
</style>
# Dialog 对话框
## 基础用法

<div class="example">
  <DialogDefault></DialogDefault>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <tass-button type="primary" :visible="!normalVisible" @click="changeView">dialog</tass-button>
  <tass-dialog
    :visible="normalVisible"
    @cancel="handleClickCancelButton"
    @confirm="handleConfirmButton"
  >
  </tass-dialog>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  let normalVisible = ref(false)
  changeView = ()=> {
    normalVisible.value = !normalVisible.value
  }
  handleClickCancelButton = ()=> {
    normalVisible.value = !normalVisible.value
  }
  handleConfirmButton = ()=> {
    normalVisible.value = !normalVisible.value
  }
</script>

<style>
</style>
```
</details>

## 自定义内容
通过设置title,来展示自定义内容。
<div class="example">
    <Dialog></Dialog>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <template>
  <tass-button type="primary" :visible="!normalVisible" @click="changeView">自定义内容</tass-button>
  <tass-dialog
    :visible="normalVisible"
    title="自定义内容"
    @cancel="handleClickCancelButton"
    @confirm="handleConfirmButton"
  >
  </tass-dialog>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  let normalVisible = ref(false)
  changeView = ()=> {
    normalVisible.value = !normalVisible.value
  }
  handleClickCancelButton = ()=> {
    normalVisible.value = !normalVisible.value
  }
  handleConfirmButton = ()=> {
    normalVisible.value = !normalVisible.value
  }
</script>

</template>
```
</details>