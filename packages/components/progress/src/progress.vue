<template>
  <div class="tas-progress" v-if="props.select=='on'">
    <div class="line" v-if="props.type=='in'">
      <div class="colorLine" :style="'background:' + props.color + ';height:26px;text-align:right;line-height:26px;width:' + props.percent + '%'">
        {{ props.percent }}%
      </div>
    </div>

    <div class="line" v-else>
      <div class="colorLine" :style="'background:' + props.color + ';width:' + props.percent + '%'"></div>
    </div>
    <div class="status" v-if="status">
      <tass-icon name="warning" v-if="status=='warning'"></tass-icon>
      <tass-icon name="success" v-if="status=='success'"></tass-icon>
    </div>
    <div class="percent" v-else-if="percent==100">
      满
    </div>
    <div class="percent" v-else-if="props.type!='in'">
      {{ props.percent }}%
    </div>
  </div>

  <div class="tas-circleprogress" :style="{width, height}" v-else>
    <svg viewBox="0 0 96 96" class="svg-circle-progress" style="width: 96px; height: 96px;">
        <circle r="40" cx="48" cy="48" fill="none" stroke-miterlimit="20" stroke-width="10" class="svg-progress"
            style="stroke-dasharray: 275, 279.602;stroke:#eee;">
        </circle>
        <circle r="40" cx="48" cy="48" fill="none" stroke-miterlimit="20" stroke-width="10"
            class="svg-progress"
            :style="`stroke-dasharray: ${progressValue}, 279.602;stroke:${color};`">
        </circle>
    </svg>
    <div class="mask" v-if="status">
      <tass-icon name="warning" v-if="status=='warning'"></tass-icon>
      <tass-icon name="success" v-if="status=='success'"></tass-icon>
    </div>
    <div class="mask" v-else-if="props.type!='in'">
      {{props.percent}}%
    </div>
  </div>
</template>

<script setup lang="ts" name="TassProgress">
  import '../style/';
  import { ref, toRefs, watch, onMounted } from 'vue';

  const props = defineProps({
    select: {
      type: String,
      default: (): String => '',
    },
    type: {
      type: String,
      default: (): String => '',
    },
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
    },
    width: {
        type: String,
        default: () => "210px"
    },
    height: {
        type: String,
        default: () => "100px"
    },
  });

  const { height, width, color, percent } = toRefs(props)
  const progressValue = ref((percent.value / 100) * 250)

  watch(percent, (newValue) => {
      progressValue.value = (newValue / 100) * 250
  })
</script>