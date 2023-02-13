<template>
  <tass-carousel v-model="active1" width="100%" height="280px">
    <tass-carousel-item id="1">
      <div style="color: white;text-align: center;width:100%;height:280px;line-height:280px;background-color:#9090C0;">一</div>
    </tass-carousel-item>
    <tass-carousel-item style="top: -8px;" id="2">
      <div style="color: white;text-align: center;width:100%;height:280px;line-height:280px;background-color:#282858;">二</div>
    </tass-carousel-item>
    <tass-carousel-item style="top: -8px;" id="3">
      <div style="color: white;text-align: center;width:100%;height:280px;line-height:280px;background-color:#000840;">三</div>
    </tass-carousel-item>
    <tass-carousel-item style="top: -8px;" id="4">
      <div style="color: white;text-align: center;width:100%;height:280px;line-height:280px;background-color:#8888D0;">四</div>
    </tass-carousel-item>
  </tass-carousel>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const active1 = ref("1")

    return {
      active1
    }
  }
}
</script>