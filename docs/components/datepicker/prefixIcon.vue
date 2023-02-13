<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-02-13 11:52:44
 * @LastEditors: Huccct
 * @LastEditTime: 2023-02-13 11:52:51
-->
<template>
  <tass-date-picker v-model="nowDate" prefix-icon="book"></tass-date-picker>
</template>
<script setup lang="ts">
  import { ref } from 'vue';

  const nowDate = ref(new Date());
</script>
<style></style>
