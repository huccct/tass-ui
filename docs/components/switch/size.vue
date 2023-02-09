<!--
 * @Author: 申恒杰
 * @Date: 2023-02-09 13:34:47
 * @Description: 铁沸物
 * @FilePath: \tass-ui\docs\components\switch\size.vue
-->
<template>
  <div style='display:flex;align-items: flex-end;'>
    <tass-switch v-model="active7" size='lg'></tass-switch>
    <tass-switch v-model="active7" size='md' style='margin-left:10px'></tass-switch>
    <tass-switch v-model="active7" size='sm' style='margin-left:10px'></tass-switch>
    <tass-switch v-model="active7" size='xs' style='margin-left:10px'></tass-switch>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const active7 = ref(true)

    return {
        active7
    }
  }
}
</script>