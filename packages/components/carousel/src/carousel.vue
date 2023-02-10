<!--
 * @Author: 申恒杰
 * @Date: 2023-02-01 21:33:37
 * @Description: 铁沸物
 * @FilePath: \tass-ui\packages\components\carousel\src\carousel.vue
-->
<template>
  <div
    class="tas-carousel"
    :tas-anim="anim"
    :tas-indicator="indicator"
    :tas-arrow="arrow"
    :style="{ width: width, height: height }"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div carousel-item>
      <slot></slot>
    </div>
    <div class="tas-carousel-ind">
      <ul>
        <li
          v-for="(ss, index) in childrens"
          :key="index"
          :class="[ss.props?.id === active ? 'tas-this' : '']"
          @click.stop="change(ss.props?.id)"
        ></li>
      </ul>
    </div>
    <button  v-show="anim === 'updown'" class="tas-icon tas-carousel-arrow" tas-type="sub" @click="sub">
      <!-- 上 -->
      <tass-icon style="position:relative;top: -2px;" name="chevronup"></tass-icon>
      <!-- <svg t="1675998673409" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1516" width="20" height="20"><path d="M65.582671 735.208665l446.417329-446.41733 446.417329 446.41733z" p-id="1517"></path></svg> -->
    </button>
    <button  v-show="anim !== 'updown'" class="tas-icon tas-carousel-arrow" tas-type="sub" @click="sub">
      <!-- 左 -->
      <tass-icon style="position:relative;top: -2px;right:0px;" name="chevronleft"></tass-icon>
      <!-- <svg style="position: relative;right: 3px;top: 2px;" t="1675998805042" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1816" width="20" height="20"><path d="M735.208665 65.582671l-446.41733 446.417329 446.41733 446.417329z" p-id="1817"></path></svg> -->
    </button>
    <button v-show="anim !== 'updown'" class="tas-icon tas-carousel-arrow" tas-type="add" @click="add">
      <!-- {{ anim === 'updown' ? '下' : '>' }} -->
      <!-- 右 -->
      <tass-icon style="position:relative;top: -2px;" name="chevronright"></tass-icon>
      <!-- <tass-icon style="position: relative;" name="chevronrightcircle"></tass-icon> -->
      <!-- <svg style="position: relative;left: 3px;top: 2px;" t="1675998831694" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1966" width="20" height="20"><path d="M288.791335 65.582671l446.41733 446.417329-446.41733 446.417329z" p-id="1967"></path></svg> -->
    </button>
    <button v-show="anim === 'updown'" class="tas-icon tas-carousel-arrow" tas-type="add" @click="add">
      <!-- 下 -->
      <!-- <svg style="position: relative;top: 3px;" t="1675998695795" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1666" width="20" height="20"><path d="M65.582671 288.791335l446.417329 446.41733 446.417329-446.41733z" p-id="1667"></path></svg> -->
      <tass-icon name="chevrondown"></tass-icon>
    </button>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'TassCarousel'
  };
</script>

<script setup lang="ts">
  import '@tass-ui/theme-chalk/src/carousel.scss';
  import {
    withDefaults,
    provide,
    useSlots,
    ref,
    computed,
    VNode,
    Ref,
    Component,
    watch
  } from 'vue';
  import CarouselItem from '@tass-ui/components/carousel-item/src/carousel-item.vue';

  export interface CarouselProps {
    width?: string;
    height?: string;
    // 当前激活项
    modelValue: string;
    // 是否自动切换
    autoplay?: boolean;
    // 箭头默认显示状态
    arrow?: 'always' | 'hover' | 'none';
    // 轮播切换方式
    anim?: 'default' | 'updown' | 'fade';
    // 指示器位置
    indicator?: 'inside' | 'outside' | 'none';
    // 鼠标悬停时暂停切换
    pauseOnHover?: boolean;
    // 轮播间隔
    interval?: number;
  }

  const props = withDefaults(defineProps<CarouselProps>(), {
    width: '100%',
    height: '280px',
    anim: 'default',
    autoplay: true,
    arrow: 'hover',
    interval: 3000,
    indicator: 'inside',
    pauseOnHover: true
  });

  const slot = useSlots() as any;
  const slots = slot.default && (slot.default() as any[]);

  const active = computed({
    get() {
      return props.modelValue;
    },
    set(val) {
      emit('update:modelValue', val);
    }
  });

  const anim = computed(() => props.anim);

  const emit = defineEmits(['update:modelValue', 'change']);

  const change = function (id: any) {
    emit('change', id);
    active.value = id;
  };

  const childrens: Ref<VNode[]> = ref([]);
  const slotsChange = ref(true);

  const setItemInstanceBySlot = function (nodes: VNode[]) {
    const showNodes = nodes?.filter((item: VNode) => {
      return item.children != 'v-if';
    });
    showNodes?.map(item => {
      let component = item.type as Component;
      if (component.name != CarouselItem.name) {
        setItemInstanceBySlot(item.children as VNode[]);
      } else {
        childrens.value.push(item);
      }
    });
  };

  watch(
    slotsChange,
    () => {
      childrens.value = [];
      setItemInstanceBySlot((slot.default && slot.default()) as VNode[]);
    },
    { immediate: true, deep: true }
  );

  const sub = () => {
    for (var i = 0; i < childrens.value.length; i++) {
      if (childrens.value[i].props?.id === active.value) {
        if (i === 0) {
          active.value = childrens.value[slots.length - 1].props?.id;
        } else {
          active.value = childrens.value[i - 1].props?.id;
        }
        break;
      }
    }
  };

  const add = () => {
    for (var i = 0; i < childrens.value.length; i++) {
      if (childrens.value[i].props?.id === active.value) {
        if (i === childrens.value.length - 1) {
          active.value = childrens.value[0].props?.id;
        } else {
          active.value = childrens.value[i + 1].props?.id;
        }
        break;
      }
    }
  };

  const autoplay = () => {
    for (var i = 0; i < childrens.value.length; i++) {
      if (childrens.value[i].props?.id === active.value) {
        if (i === childrens.value.length - 1) {
          active.value = childrens.value[0].props?.id;
        } else {
          active.value = childrens.value[i + 1].props?.id;
        }
        break;
      }
    }
  };

  let intervalTimer = 0;

  const cleanIntervalTimer = () => {
    if (intervalTimer) {
      window.clearInterval(intervalTimer);
      intervalTimer = 0;
    }
  };

  const handleMouseEnter = () => {
    if (props.autoplay && props.pauseOnHover) {
      cleanIntervalTimer();
    }
  };

  const handleMouseLeave = () => {
    if (props.autoplay && props.pauseOnHover) {
      intervalTimer = window.setInterval(autoplay, props.interval);
    }
  };

  watch(
    () => props.autoplay,
    () => {
      if (props.autoplay) {
        intervalTimer = window.setInterval(autoplay, props.interval);
      }
    },
    { immediate: true }
  );

  provide('active', active);
  provide('slotsChange', slotsChange);
  provide('anim', anim);
</script>
