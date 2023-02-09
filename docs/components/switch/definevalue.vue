<template>
  <div style="width:40px">
    <tass-switch v-model="active6" onswitch-value="dark" unswitch-value="light"></tass-switch>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const active6 = ref('dark')
    return {
        active6
    }
  }
}
</script>