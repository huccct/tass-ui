<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-25 22:08:03
 * @LastEditors: Huccct
 * @LastEditTime: 2023-01-26 14:33:04
-->
<template>
  <transition name="ec-message-fade" @before-leave="onclose" @after-leave="$emit('destroy')">
    <div v-show="isShow" class="ec-message" :style="style" :class="defClass">
      {{ message }}
    </div>
  </transition>
</template>
<script setup lang="ts">
  import { computed, onMounted, onUnmounted, ref } from 'vue';
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
      default: 2000
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
    }
  });
  const defClass = computed(() => ['ec-message--' + props.type, props.center ? 'is-center' : '']);
  let isShow = ref(false);
  let timer: null | NodeJS.Timeout = null;
  onMounted(() => {
    isShow.value = true;
    timer = setTimeout(() => {
      isShow.value = false;
    }, props.duration);
  });
  let style = computed(() => ({
    top: `${props.offset}px`
  }));
  onUnmounted(() => {
    clearTimeout(Number(timer));
  });
</script>
<style></style>
