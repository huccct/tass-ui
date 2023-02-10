<!--
 * @Author: 申恒杰
 * @Date: 2023-02-09 13:08:22
 * @Description: 铁沸物
 * @FilePath: \tass-ui\docs\components\switch\change.vue
-->
<template>
  <div style="width:40px">
    <tass-switch v-model="active2" @change="change"></tass-switch>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const active2 = ref(false);
    const change =( val )=> {
        alert("当前值:" + val)
    }
    return {
        active2,
        change
    }
  }
}
</script>