<template>
  <tass-button type="primary" :visible="!normalVisible" @click="changeView"
    >自定义内容和宽度</tass-button
  >
  <tass-dialog
    :visible="normalVisible"
    title="自定义内容"
    width="500px"
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
