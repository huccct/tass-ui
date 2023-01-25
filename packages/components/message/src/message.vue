<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-25 22:08:03
 * @LastEditors: Huccct
 * @LastEditTime: 2023-01-25 23:21:45
-->
<template>
  <transition name="ec-message-fade">
    <div class="ec-message" :class="defClass" v-show="isShow">message</div>
  </transition>
</template>
<script setup lang="ts">
  import { onMounted, ref } from 'vue';

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
      default: false
    },
    offset: {
      type: Number,
      default: 20
    }
  });
  let defClass;
  let isShow = ref(false);
  onMounted(() => {
    isShow.value = true;
  });
</script>
<style></style>
