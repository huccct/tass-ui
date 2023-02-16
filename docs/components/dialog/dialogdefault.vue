<template>
  <tass-button type="primary" :visible="!normalVisible" @click="changeView">dialog</tass-button>
  <tass-dialog
    :visible="normalVisible"
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
