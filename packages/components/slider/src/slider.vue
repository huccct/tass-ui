<template>
  <div class="dx-slider-warpper">
    <div class="dx-slider-content" :draggable="false">
      <div class="dx-slider-track" ref="sliderTrack" :draggable="false" @click="handleClickTrack">
        <div class="dx-slider-fill" :style="{ width: sliderFillPercent + '%' }"></div>
      </div>
      <div
        class="dx-slider-thumb"
        :class="sliderThumbStatusClass"
        ref="sliderThumb"
        :style="{ left: thumbX }"
        @mousedown="thumbDown"
        :draggable="false"
      >
        <div class="dx-slider-other">
          <div class="dx-slider-value">{{ sliderValue }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, ref, watch, SetupContext } from 'vue';
export default {
  props: {
    // 滑动条最小值
    min: {
      require: false,
      default: 0,
      type: Number
    },
    // 滑动条最大值
    max: {
      require: false,
      default: 100,
      type: Number
    },
    // 滑动条每一次滑动的最小值1 必须为整数
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
  },
  setup(props: any, context: SetupContext) {
    let maxX = 0;
    let thumbWidth = 6;

    const sliderTrack = ref<any>();
    const sliderThumb = ref<any>();

    // sliderThumb被激活时的样式名称
    const sliderThumbStatusClass = ref('');

    // 当前的值
    const sliderValue = ref<number>(props.value as number);
    // 进度条填充百分比
    const sliderFillPercent = ref<number>(0);
    // 数值之间的间距
    const distance = Number(props.max) - Number(props.min);

    // value的值必须大于等于min，小于等于max
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

      // 初始化，根据sliderValue.value的值，分别计算百分比和thumbX
      sliderFillPercent.value = ((sliderValue.value - Number(props.min)) / distance) * 100;
      thumbX.value =
        ((sliderValue.value - Number(props.min)) / distance) * (maxX + thumbWidth) -
        thumbWidth +
        'px';
      if (props.disabled) {
        sliderThumbStatusClass.value = 'dx-slider-thumb-disabled';
      }
    });

    // 点击轨道，thumb跳跃至点击的位置，offsetX是个好东西
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

      sliderThumbStatusClass.value = 'dx-slider-thumb-active';

      const startX = e?.clientX;
      const initX = parseFloat(thumbX.value);

      const handler = (event: any) => {
        const nowX = event.clientX;
        const disX = nowX - startX;

        thumbX.value = initX + disX + 'px';
        // 限制可拖拽的范围
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
      // 计算百分比,显示fill的进度条
      sliderFillPercent.value =
        ((parseFloat(thumbX.value) + thumbWidth) / (maxX + thumbWidth)) * 100;

      // 计算对应的value的值
      const b =
        ((parseFloat(thumbX.value) + thumbWidth) / (maxX + thumbWidth)) * distance +
        Number(props.min);

      // 求余并去除余数
      const a = b % Number(props.step);
      sliderValue.value = b - a;
      context.emit('sliderChange', sliderValue.value);
    });

    return {
      thumbDown,
      thumbX,
      thumbTop,
      handleClickTrack,
      sliderTrack,
      sliderThumb,
      sliderFillPercent,
      sliderThumbStatusClass,
      sliderValue
    };
  }
};
</script>

<style lang="scss" scoped>
.dx-slider-warpper {
  width: 50vh;

  .dx-slider-content {
    position: relative;
    cursor: pointer;
    -webkit-user-drag: none;
    user-select: none;
    width: calc(100%);
  }

  .dx-slider-track {
    width: 100%;
    height: 6px;
    border-radius: 3px;
    background-color: #e1e1e1;
    overflow: hidden;
    .dx-slider-fill {
      background-color: blue;
      height: 100%;
      width: 20%;
    }
  }

  .dx-slider-track:hover {
    background: #e1e1e1;
  }

  .dx-slider-thumb {
    position: relative;
    height: 14px;
    width: 14px;
    border-radius: 50%;
    border: 2px solid blue;
    background: white;
    cursor: pointer;
    z-index: 100;
    top: 50%;
    transform: translateY(-50%);
    .dx-slider-other {
      position: absolute;
      left: 0;
      top: -25px;
    }
    .dx-slider-value {
      display: inline-block;
      margin-left: 50%;
      transform: translateX(-50%);
    }
  }

  .dx-slider-thumb-active {
    height: 20px;
    width: 20px;
  }

  .dx-slider-thumb-disabled {
    cursor: not-allowed;
    border: 2px solid gray;
    background: gray;
    .dx-slider-value {
      display: none;
    }
  }
}
</style>

