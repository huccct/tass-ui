<!--
 * @Author: 申恒杰
 * @Date: 2023-02-09 13:23:33
 * @Description: 铁沸物
 * @FilePath: \tass-ui\docs\components\switch\changedetail.vue
-->
<template>
  <div style="width:60px">
    <tass-switch v-model="active4" onswitch-text="白天"  unswitch-text="夜间"></tass-switch>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const active4 = ref(true)
    return {
        active4
    }
  }
}
</script>