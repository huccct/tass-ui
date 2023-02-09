<!--
 * @Author: 申恒杰
 * @Date: 2023-02-09 13:00:19
 * @Description: 铁沸物
 * @FilePath: \tass-ui\docs\components\switch\detail.vue
-->
<template>
  <div style="width:40px">
    <tass-switch v-model="active1"></tass-switch>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const active1 = ref(false);
    return {
        active1
    }
  }
}
</script>