<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-02-13 10:04:01
 * @LastEditors: Huccct
 * @LastEditTime: 2023-02-13 11:50:15
-->
<template>
  <tass-date-picker v-model="nowDate"></tass-date-picker>
</template>
<script setup lang="ts">
  import { ref } from 'vue';

  const nowDate = ref(new Date());
</script>
<style></style>
