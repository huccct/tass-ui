<template>
  <div class="tas-slider">
    <div class="tas-slider__content" :draggable="false">
      <div class="tas-slider__track" ref="sliderTrack" :draggable="false" @click="handleClickTrack">
        <div class="tas-slider__fill" :style="{ width: sliderFillPercent + '%' }"></div>
      </div>
      <div
        class="tas-slider__thumb"
        :class="sliderThumbStatusClass"
        ref="sliderThumb"
        :style="{ left: thumbX }"
        @mousedown="thumbDown"
        :draggable="false"
      >
        <div class="tas-slider__other">
          <div class="tas-slider__value">{{ sliderValue }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="tassSlider">
import '../style/';
import { ref, onMounted, watch } from 'vue';
const props = defineProps({
  min: {
    require: false,
    default: 0,
    type: Number
  },
  max: {
    require: false,
    default: 100,
    type: Number
  },
  step: {
    require: false,
    default: 1,
    type: Number
  },
  value: {
    require: false,
    default: 0,
    type: Number
  },
  disabled: {
    require: false,
    default: false,
    type: Boolean
  }
});
let maxX = 0;
let thumbWidth = 6;

const sliderTrack = ref<any>();
const sliderThumb = ref<any>();

const sliderThumbStatusClass = ref('');

const sliderValue = ref<number>(props.value as number);

const sliderFillPercent = ref<number>(0);

const distance = Number(props.max) - Number(props.min);

const emit = defineEmits(['sliderChange']);

if (sliderValue.value < Number(props.min)) {
  sliderValue.value = Number(props.min) || 0;
} else if (sliderValue.value > Number(props.max)) {
  sliderValue.value = Number(props.max) || 100;
}

const thumbX = ref('0px');
const thumbTop = ref('-7px');

onMounted(() => {
  thumbWidth = (sliderThumb.value?.offsetWidth || 0) / 2;
  thumbTop.value = -((sliderThumb.value?.offsetHeight || 0) / 2) + 'px';
  maxX = (sliderTrack.value?.offsetWidth || 0) - thumbWidth;

  sliderFillPercent.value = ((sliderValue.value - Number(props.min)) / distance) * 100;
  thumbX.value =
    ((sliderValue.value - Number(props.min)) / distance) * (maxX + thumbWidth) - thumbWidth + 'px';
  if (props.disabled) {
    sliderThumbStatusClass.value = 'tas-slider__thumb-disabled';
  }
});

const handleClickTrack = (e: any) => {
  const targetX = e?.offsetX;
  if (props.disabled) {
    return;
  }
  thumbX.value = targetX - thumbWidth + 'px';
};

const thumbDown = (e: any) => {
  if (props.disabled) {
    return;
  }

  sliderThumbStatusClass.value = 'tas-slider__thumb-active';

  const startX = e?.clientX;
  const initX = parseFloat(thumbX.value);

  const handler = (event: any) => {
    const nowX = event.clientX;
    const disX = nowX - startX;

    thumbX.value = initX + disX + 'px';
    if (initX + disX <= -thumbWidth) {
      thumbX.value = `-${thumbWidth}px`;
    }

    if (initX + disX > maxX) {
      thumbX.value = `${maxX}px`;
    }
  };

  document.addEventListener('mousemove', handler, false);
  document.addEventListener(
    'mouseup',
    () => {
      sliderThumbStatusClass.value = '';
      document.removeEventListener('mousemove', handler);
    },
    false
  );
};

watch(thumbX, () => {
  sliderFillPercent.value = ((parseFloat(thumbX.value) + thumbWidth) / (maxX + thumbWidth)) * 100;

  const b =
    ((parseFloat(thumbX.value) + thumbWidth) / (maxX + thumbWidth)) * distance + Number(props.min);

  const a = b % Number(props.step);
  sliderValue.value = b - a;
  emit('sliderChange', sliderValue.value);
});
</script>

<style lang="scss" scoped>
</style>

