<template>
  <tass-button type="primary" :visible="!normalVisible" @click="changeView">dialog</tass-button>
  <transition>
    <tass-dialog
      :visible="normalVisible"
      width="500px"
      @cancel="handleClickCancelButton"
      @confirm="handleConfirmButton"
    >
    </tass-dialog>
  </transition>
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
<style lang="scss" scoped>
.v-enter-active {
  animation: dialog 0.1s linear;
}
@keyframes dialog {
  from {
    transform: scale(95%);
  }
  to {
    transform: scale(100%);
  }
}
</style>
