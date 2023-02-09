<template>
  <div class="tas-progress">
    <div class="line">
      <div class="colorLine" :style="'background:' + props.color + ';width:' + props.percent + '%'">

      </div>
    </div>

    <div class="status" v-if="status">
      <!-- 这里显示图标  如果有 -->
      <tass-icon name="warning" v-if="status=='warning'"></tass-icon>
    </div>
    <div class="percent" v-else-if="percent==100">
      <!-- 这里显示百分比为100的时候给满字 -->
      满
    </div>
    <div class="percent" v-else>
      <!-- 这里显示百分比 -->
      {{ props.percent }}%
    </div>
  </div>
</template>
<script setup lang="ts" name="TassProgress">
const props = defineProps({
  color: {
    type: String,
    default: (): String => '#409eff',
  },
  percent: {
    type: Number,
    default: (): Number => 0,
  },
  status: {
    type: String,
    default: (): String => '',
  }
});
// color：颜色
// percent:百分比
// status：状态显示对应图标
</script>