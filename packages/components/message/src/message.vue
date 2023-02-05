<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-25 22:08:03
 * @LastEditors: Huccct
 * @LastEditTime: 2023-02-04 21:41:44
-->
<template>
  <transition name="tas-message-fade" @before-leave="onclose" @after-leave="$emit('destroy')">
    <div
      v-show="isShow"
      class="tas-message"
      :style="controlTop"
      :class="defClass"
      @mouseenter="clearTimeFn"
      @mouseleave="startTimerFn"
    >
      <tass-icon :name="iconName" class="tas-message__icon" v-if="showIcon" />
      <slot>
        <span class="tas-message__content">{{ message }}</span>
      </slot>
      <tass-icon
        name="cross"
        class="tas-message__close-btn"
        v-if="closeable"
        @click="handleClose"
      />
    </div>
  </transition>
</template>
<script setup lang="ts">
  import { computed, onMounted, onUnmounted, ref } from 'vue';
  import { TassIcon } from '../../icon';
  const props = defineProps({
    id: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'success'
    },
    duration: {
      type: Number,
      default: 3000
    },
    center: {
      type: Boolean,
      default: true
    },
    offset: {
      type: Number,
      default: 20
    },
    onclose: {
      type: Function,
      required: false
    },
    showIcon: {
      type: Boolean,
      default: false
    },
    closeable: {
      type: Boolean,
      default: false
    }
  });
  const defClass = computed(() => ['ec-message--' + props.type, props.center ? 'is-center' : '']);
  const iconMaps = {
    info: 'info',
    success: 'success',
    error: 'danger',
    warning: 'warning'
  };
  const iconName = computed(() => {
    const { type } = props;
    return iconMaps[type];
  });
  let isShow = ref(false);
  let timer: null | NodeJS.Timeout = null;
  const startTimerFn = () => {
    if (props.duration > 0) {
      timer = setTimeout(() => {
        isShow.value = false;
      }, props.duration);
    }
  };
  const clearTimeFn = () => {
    clearTimeout(Number(timer));
  };
  onMounted(() => {
    isShow.value = true;
    startTimerFn();
  });
  let controlTop = computed(() => ({
    top: `${props.offset}px`
  }));

  onUnmounted(() => {
    clearTimeFn();
  });
  const handleClose = () => {
    isShow.value = false;
  };
</script>
<style></style>
