<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-02-12 10:57:19
 * @LastEditors: Huccct
 * @LastEditTime: 2023-02-12 13:25:21
-->
<template>
  <div class="tas-datepicker">
    <tass-input prefix-icon="calendarfull" @focus="onFocus" @blur="onBlur" />
    <div class="tas-picker" v-if="isVisible"></div>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import '../style/';
  const isVisible = ref(false);
  const onFocus = () => {
    isVisible.value = true;
  };
  const onBlur = () => {
    isVisible.value = false;
  };
</script>
<style></style>
