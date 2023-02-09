<!--
 * @Author: 申恒杰
 * @Date: 2023-02-09 13:15:10
 * @Description: 铁沸物
 * @FilePath: \tass-ui\docs\components\switch\disabled.vue
-->
<template>
  <div style="width:40px">
    <tass-switch v-model="active3" :disabled="disabled"></tass-switch>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const active3 = ref(false);
    const disabled = ref(true)

    return {
        active3,disabled
    }
  }
}
</script>