<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-25 22:08:03
 * @LastEditors: Huccct
 * @LastEditTime: 2023-02-09 15:43:20
-->
<template>
  <transition name="tas-message-fade" @before-leave="beforeLeave" @after-leave="$emit('destroy')">
    <div
      v-show="visible"
      :id="id"
      class="tas-message"
      :style="styles"
      :class="defClass"
      @mouseenter="clearTimeFn"
      @mouseleave="startTimerFn"
    >
      <tass-icon :name="iconName" class="tas-message__icon" />
      <slot>
        <span class="tas-message__content">{{ message }}</span>
      </slot>
      <tass-icon name="cross" class="tas-message__close-btn" v-if="closeable" @click="close" />
    </div>
  </transition>
</template>
<script setup lang="ts">
  import '../style/';
  import { computed, onMounted, onUnmounted, ref } from 'vue';
  import { TassIcon } from '../../icon';
  import { MessageProps } from './message';
  const iconMaps: any = {
    info: 'info',
    success: 'success',
    error: 'danger',
    warning: 'warning'
  };
  const emit = defineEmits(['destroy', 'close']);
  let visible = ref(false);
  const props = defineProps(MessageProps);
  const close = () => (visible.value = false);
  const beforeLeave = () => {
    emit('close');
  };
  const iconName = computed(() => {
    const { type } = props;
    return iconMaps[type];
  });
  let timer: null | NodeJS.Timeout = null;
  const startTimerFn = () => {
    if (props.duration > 0) {
      timer = setTimeout(() => {
        visible.value = false;
      }, props.duration);
    }
  };
  const clearTimeFn = () => {
    clearTimeout(Number(timer));
  };
  onMounted(() => {
    visible.value = true;
    startTimerFn();
  });
  let styles = computed(() => ({
    top: `${props.offset}px`,
    zIndex: props.zIndex
  }));
  const defClass = computed(() => ['tas-message--' + props.type, props.center ? 'is-center' : '']);
  onUnmounted(() => {
    clearTimeFn();
  });
</script>
<style></style>
