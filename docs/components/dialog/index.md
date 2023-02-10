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
    width="500px"
    title="dialog"
    @cancel="handleClickCancelButton"
    @confirm="handleConfirmButton"
  >
  </tass-dialog>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    let normalVisible = ref(false)
    function changeView () {
      normalVisible.value = !normalVisible.value
    }
    function handleClickCancelButton () {
      normalVisible.value = !normalVisible.value
    }
    function handleConfirmButton () {
      normalVisible.value = !normalVisible.value
    }
    return {
      normalVisible,
      changeView,
      handleClickCancelButton,
      handleConfirmButton
    }
  }
}
</script>

<style>
</style>
```
</details>

## 自定义内容和宽度
通过设置title 与 width , 来展示内容和宽度。
<div class="example">
    <Dialog></Dialog>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <template>
  <tass-button type="primary" :visible="!normalVisible" @click="changeView">自定义内容和宽度</tass-button>
  <tass-dialog
    :visible="normalVisible"
    title="自定义内容"
    width="400px"
    @cancel="handleClickCancelButton"
    @confirm="handleConfirmButton"
  >
  </tass-dialog>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    let normalVisible = ref(false)
    function changeView () {
      normalVisible.value = !normalVisible.value
    }
    function handleClickCancelButton () {
      normalVisible.value = !normalVisible.value
    }
    function handleConfirmButton () {
      normalVisible.value = !normalVisible.value
    }
    return {
      normalVisible,
      changeView,
      handleClickCancelButton,
      handleConfirmButton
    }
  }
}
</script>

</template>
```
</details>