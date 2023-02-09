<!--
 * @Author: 申恒杰
 * @Date: 2023-02-09 13:27:52
 * @Description: 铁沸物
 * @FilePath: \tass-ui\docs\components\switch\switch-icon.vue
-->
<template>
  <div style="width:40px">
    <tass-switch v-model="active5">
      <template #onswitch-icon>😄</template>
      <template #unswitch-icon>🤔</template>
    </tass-switch>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const active5 = ref(true)

    return {
        active5
    }
  }
}
</script>